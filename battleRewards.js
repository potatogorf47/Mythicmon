// =====================================================
// MYTHICMON
// BATTLE REWARDS
// =====================================================

const BattleRewards =
{

    //--------------------------------------------------
    // Calculate Rewards
    //--------------------------------------------------

    calculate(playerCreature, enemyCreature)
    {

        const levelDifference =
            enemyCreature.level -
            playerCreature.level;

        //--------------------------------------------------
        // Base Rewards
        //--------------------------------------------------

        let xp =
            20 +
            (enemyCreature.level * 6);

        let coins =
            10 +
            (enemyCreature.level * 3);

        let masteryXP =
            5 +
            Math.floor(enemyCreature.level / 2);

        let friendship = 1;

        //--------------------------------------------------
        // Level Scaling
        //--------------------------------------------------

        if(levelDifference >= 5)
        {
            xp *= 1.4;
            masteryXP *= 1.25;
        }

        if(levelDifference <= -5)
        {
            xp *= 0.6;
        }

        //--------------------------------------------------
        // Critical Bonus
        //--------------------------------------------------

        xp = Math.floor(xp);
        coins = Math.floor(coins);
        masteryXP = Math.floor(masteryXP);

        return {

            xp,

            coins,

            masteryXP,

            friendship,

            drops:
            this.rollDrops(enemyCreature)

        };

    },

    //--------------------------------------------------
    // Apply Rewards
    //--------------------------------------------------

    apply(playerCreature, rewards)
    {

        //--------------------------------------------------
        // Creature XP
        //--------------------------------------------------

        playerCreature.xp += rewards.xp;

        //--------------------------------------------------
        // Mastery
        //--------------------------------------------------

        playerCreature.mastery +=
            rewards.masteryXP;

        //--------------------------------------------------
        // Friendship
        //--------------------------------------------------

        playerCreature.friendship +=
            rewards.friendship;

        //--------------------------------------------------
        // Clamp Friendship
        //--------------------------------------------------

        playerCreature.friendship =
        Math.min(
            100,
            playerCreature.friendship
        );

        //--------------------------------------------------
        // Player Coins
        //--------------------------------------------------

        Player.coins += rewards.coins;

        //--------------------------------------------------
        // Inventory Drops
        //--------------------------------------------------

        for(const drop of rewards.drops)
        {

            Inventory.add(

                drop.category,

                drop.item,

                drop.amount

            );

        }

        return rewards;

    },

    //--------------------------------------------------
    // Random Loot
    //--------------------------------------------------

    rollDrops(enemyCreature)
    {

        const drops = [];

        //--------------------------------------------------
        // Berry
        //--------------------------------------------------

        if(Math.random() < 0.30)
        {

            drops.push({

                category:"berries",

                item:"basicBerry",

                amount:1

            });

        }

        //--------------------------------------------------
        // Crafting Material
        //--------------------------------------------------

        if(Math.random() < 0.45)
        {

            drops.push({

                category:"materials",

                item:

                enemyCreature.type +

                "Essence",

                amount:1

            });

        }

        //--------------------------------------------------
        // Rare Drop
        //--------------------------------------------------

        if(Math.random() < 0.02)
        {

            drops.push({

                category:"evolutionItems",

                item:"mysticStone",

                amount:1

            });

        }

        return drops;

    }

};
