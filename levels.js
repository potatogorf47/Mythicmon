// =====================================================
// MYTHICMON
// LEVELS & PROGRESSION
// =====================================================
//
// Handles:
//
// • Player Level
// • Creature Levels
// • Experience Curve
// • Species Mastery
// • Pack Scaling
// • Safari Scaling
//
// No gameplay logic belongs here.
//
// =====================================================



// =====================================================
// PLAYER SETTINGS
// =====================================================

const PLAYER_LEVEL =
{
    min:1,

    max:100,

    startingXP:0,

    startingCoins:100
};



// =====================================================
// CREATURE SETTINGS
// =====================================================

const CREATURE_LEVEL =
{
    min:1,

    max:100,

    startingLevel:1
};



// =====================================================
// EXPERIENCE CURVE
// =====================================================
//
// XP required for the NEXT level.
//
// Formula:
//
// 100 × level^1.35
//

function getXPForLevel(level)
{
    return Math.floor(

        100 *

        Math.pow(level,1.35)

    );
}



// =====================================================
// STAT GROWTH
// =====================================================

const STAT_GROWTH =
{

    hp:5,

    attack:2,

    defense:2,

    speed:1

};



// =====================================================
// SPECIES MASTERY
// =====================================================
//
// Every species keeps track of:
//
// • Defeats
// • Captures
// • Mastery Level
//
// Higher mastery:
//
// • Better Safari levels
// • Better Pack levels
// • Slightly higher shiny chance
//
// =====================================================

const MASTERY =
{

    maxLevel:50,

    defeatsPerLevel:10

};



// =====================================================
// PACK LEVEL BONUS
// =====================================================

function getPackLevelBonus(masteryLevel)
{

    return Math.floor(

        masteryLevel / 5

    );

}



// =====================================================
// SAFARI LEVEL BONUS
// =====================================================

function getSafariLevelBonus(masteryLevel)
{

    return Math.floor(

        masteryLevel / 4

    );

}



// =====================================================
// SHINY BONUS
// =====================================================

function getMasteryShinyBonus(masteryLevel)
{

    return masteryLevel * 0.001;

}



// =====================================================
// RANDOM CREATURE LEVEL
// =====================================================
//
// Returns a random level
// based on mastery.
//
// Example:
//
// Base Level = 1
//
// Mastery = 20
//
// Possible:
//
// Level 3
//
// Level 4
//
// Level 5
//
// =====================================================

function rollCreatureLevel(
    masteryLevel
)
{

    const bonus =

        getPackLevelBonus(

            masteryLevel

        );



    const minimum =

        Math.max(

            1,

            1 + bonus

        );



    const maximum =

        minimum + 3;



    return Math.floor(

        Math.random() *

        (

            maximum -

            minimum +

            1

        )

    ) + minimum;

}



// =====================================================
// STAT SCALING
// =====================================================

function scaleStats(

    baseStats,

    level

)
{

    return {

        hp:

            baseStats.hp +

            (level - 1) *

            STAT_GROWTH.hp,



        attack:

            baseStats.attack +

            (level - 1) *

            STAT_GROWTH.attack,



        defense:

            baseStats.defense +

            (level - 1) *

            STAT_GROWTH.defense,



        speed:

            baseStats.speed +

            (level - 1) *

            STAT_GROWTH.speed

    };

}



// =====================================================
// MASTERY LEVEL
// =====================================================

function calculateMasteryLevel(

    defeats

)
{

    return Math.min(

        MASTERY.maxLevel,

        Math.floor(

            defeats /

            MASTERY.defeatsPerLevel

        )

    );

}



// =====================================================
// STARTUP
// =====================================================

if(
    DEBUG.enabled &&
    DEBUG.logLoading
)
{

    console.log(

        "Loaded levels.js"

    );

}
