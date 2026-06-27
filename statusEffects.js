// =====================================================
// MYTHICMON
// STATUS EFFECT ENGINE
// =====================================================

const StatusEffects =
{

    //--------------------------------------------------
    // Effect Definitions
    //--------------------------------------------------

    effects:
    {

        burn:
        {

            id: "burn",

            name: "Burn",

            duration: 3,

            onTurnStart(target)
            {
                const damage = Math.max(
                    1,
                    Math.floor(target.stats.hp * 0.08)
                );

                target.currentHP = Math.max(
                    0,
                    target.currentHP - damage
                );

                return {
                    type: "burn",
                    damage
                };
            }

        },

        poison:
        {

            id: "poison",

            name: "Poison",

            duration: 5,

            onTurnStart(target)
            {

                const damage = Math.max(
                    2,
                    Math.floor(target.stats.hp * 0.12)
                );

                target.currentHP = Math.max(
                    0,
                    target.currentHP - damage
                );

                return {
                    type: "poison",
                    damage
                };

            }

        },

        freeze:
        {

            id: "freeze",

            name: "Freeze",

            duration: 2,

            preventsAction: true

        },

        stun:
        {

            id: "stun",

            name: "Stun",

            duration: 1,

            preventsAction: true

        },

        sleep:
        {

            id: "sleep",

            name: "Sleep",

            duration: 3,

            preventsAction: true

        },

        shock:
        {

            id: "shock",

            name: "Shock",

            duration: 3,

            onTurnStart(target)
            {

                if(Math.random() < 0.25)
                {
                    return {
                        skipTurn: true
                    };
                }

                return null;

            }

        },

        bleed:
        {

            id: "bleed",

            name: "Bleed",

            duration: 4,

            onTurnStart(target)
            {

                const damage =
                Math.max(
                    1,
                    Math.floor(target.stats.attack * 0.25)
                );

                target.currentHP =
                Math.max(
                    0,
                    target.currentHP - damage
                );

                return {
                    damage
                };

            }

        }

    },

    //--------------------------------------------------
    // Add Effect
    //--------------------------------------------------

    add(target, effectID)
    {

        if(!target.status)
        {
            target.status = [];
        }

        const effect =
        this.effects[effectID];

        if(!effect)
        {
            return;
        }

        target.status.push({

            id: effectID,

            remaining:
            effect.duration

        });

    },

    //--------------------------------------------------
    // Remove Effect
    //--------------------------------------------------

    remove(target, effectID)
    {

        if(!target.status)
        {
            return;
        }

        target.status =
        target.status.filter(

            effect =>

            effect.id !== effectID

        );

    },

    //--------------------------------------------------
    // Has Effect?
    //--------------------------------------------------

    has(target, effectID)
    {

        if(!target.status)
        {
            return false;
        }

        return target.status.some(

            effect =>

            effect.id === effectID

        );

    },

    //--------------------------------------------------
    // Process Turn
    //--------------------------------------------------

    processTurn(target)
    {

        if(!target.status)
        {
            return [];
        }

        const events = [];

        for(const status of target.status)
        {

            const effect =
            this.effects[status.id];

            if(!effect)
            {
                continue;
            }

            if(effect.onTurnStart)
            {

                const result =
                effect.onTurnStart(target);

                if(result)
                {
                    events.push(result);
                }

            }

            status.remaining--;

        }

        target.status =
        target.status.filter(

            effect =>

            effect.remaining > 0

        );

        return events;

    },

    //--------------------------------------------------
    // Can Act?
    //--------------------------------------------------

    canAct(target)
    {

        if(!target.status)
        {
            return true;
        }

        for(const status of target.status)
        {

            const effect =
            this.effects[status.id];

            if(effect?.preventsAction)
            {
                return false;
            }

        }

        return true;

    }

};
