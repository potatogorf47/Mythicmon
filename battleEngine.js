// =====================================================
// MYTHICMON
// BATTLE ENGINE
// =====================================================

const BattleEngine =
{

    battle: null,

    //--------------------------------------------------
    // Start Battle
    //--------------------------------------------------

    start(playerCreature, enemyCreature)
    {

        this.battle =
        {

            turn: 1,

            winner: null,

            player:
            {

                creature: structuredClone(playerCreature),

                status: []

            },

            enemy:
            {

                creature: structuredClone(enemyCreature),

                status: []

            }

        };

        return this.battle;

    },

    //--------------------------------------------------
    // Player Attack
    //--------------------------------------------------

    playerAttack()
    {

        return this.attack(

            this.battle.player,

            this.battle.enemy

        );

    },

    //--------------------------------------------------
    // Enemy Attack
    //--------------------------------------------------

    enemyAttack()
    {

        return this.attack(

            this.battle.enemy,

            this.battle.player

        );

    },

    //--------------------------------------------------
    // Core Attack Function
    //--------------------------------------------------

    attack(attacker, defender)
    {

        if(!this.battle)
        {
            return null;
        }

        const damage =
        this.calculateDamage(

            attacker.creature,

            defender.creature

        );

        defender.creature.currentHP -= damage;

        if(defender.creature.currentHP < 0)
        {
            defender.creature.currentHP = 0;
        }

        const result =
        {

            attacker:
            attacker.creature.instanceID,

            defender:
            defender.creature.instanceID,

            damage,

            critical:false,

            defeated:
            defender.creature.currentHP === 0

        };

        if(result.defeated)
        {
            this.battle.winner =
            attacker;
        }

        this.battle.turn++;

        return result;

    },

    //--------------------------------------------------
    // Damage Formula
    //--------------------------------------------------

    calculateDamage(attacker, defender)
    {

        const attack =
        attacker.stats.attack;

        const defense =
        defender.stats.defense;

        const level =
        attacker.level;

        let damage =
        attack -
        (defense * 0.4);

        damage +=
        Math.floor(level * 0.6);

        damage +=
        Math.floor(
            Math.random() * 4
        );

        damage =
        Math.max(1, Math.floor(damage));

        return damage;

    },

    //--------------------------------------------------
    // Battle Over?
    //--------------------------------------------------

    isFinished()
    {

        if(!this.battle)
        {
            return true;
        }

        return this.battle.winner !== null;

    },

    //--------------------------------------------------
    // Winner
    //--------------------------------------------------

    getWinner()
    {

        return this.battle?.winner ?? null;

    },

    //--------------------------------------------------
    // Current Battle
    //--------------------------------------------------

    getBattle()
    {

        return this.battle;

    },

    //--------------------------------------------------
    // End Battle
    //--------------------------------------------------

    end()
    {

        this.battle = null;

    }

};
