// =====================================================
// MYTHICMON
// BATTLE AI
// =====================================================

const BattleAI =
{

    //--------------------------------------------------
    // Choose Action
    //--------------------------------------------------

    chooseAction(battle)
    {

        if(!battle)
        {
            return "attack";
        }

        const enemy =
        battle.enemy.creature;

        const player =
        battle.player.creature;

        //--------------------------------------------------
        // Low HP?
        //--------------------------------------------------

        const hpPercent =
        enemy.currentHP /
        enemy.stats.hp;

        if(hpPercent <= 0.25)
        {

            if(this.canUseUltimate(enemy))
            {
                return "ultimate";
            }

        }

        //--------------------------------------------------
        // Signature Ability
        //--------------------------------------------------

        if(this.canUseSignature(enemy))
        {
            return "signature";
        }

        //--------------------------------------------------
        // Finish Off Player
        //--------------------------------------------------

        if(player.currentHP <= enemy.stats.attack)
        {
            return "attack";
        }

        //--------------------------------------------------
        // Default
        //--------------------------------------------------

        return "attack";

    },

    //--------------------------------------------------
    // Signature Cooldown
    //--------------------------------------------------

    canUseSignature(creature)
    {

        if(
            creature.cooldowns == null
        )
        {
            creature.cooldowns = {};
        }

        return (
            creature.cooldowns.signature || 0
        ) <= 0;

    },

    //--------------------------------------------------
    // Ultimate Cooldown
    //--------------------------------------------------

    canUseUltimate(creature)
    {

        if(
            creature.cooldowns == null
        )
        {
            creature.cooldowns = {};
        }

        return (
            creature.cooldowns.ultimate || 0
        ) <= 0;

    },

    //--------------------------------------------------
    // Tick Cooldowns
    //--------------------------------------------------

    updateCooldowns(creature)
    {

        if(
            creature.cooldowns == null
        )
        {
            return;
        }

        for(const key in creature.cooldowns)
        {

            if(creature.cooldowns[key] > 0)
            {
                creature.cooldowns[key]--;
            }

        }

    },

    //--------------------------------------------------
    // Execute Turn
    //--------------------------------------------------

    takeTurn(battle)
    {

        const action =
        this.chooseAction(battle);

        switch(action)
        {

            case "ultimate":

                return {

                    action:

                    "ultimate"

                };

            case "signature":

                return {

                    action:

                    "signature"

                };

            default:

                return {

                    action:

                    "attack"

                };

        }

    }

};
