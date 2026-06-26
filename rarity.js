// =====================================================
// MYTHICMON
// RARITIES
// =====================================================
//
// Everything related to creature rarities.
//
// Includes:
//
// • Pack odds
// • Card frame colors
// • Coin rewards
// • XP rewards
// • Safari spawn weighting
// • Stat multipliers
// • Shiny multipliers
//
// =====================================================



// =====================================================
// RARITY LIST
// =====================================================

const RARITIES =
[
    "Starter",

    "Common",

    "Rare",

    "Epic",

    "Legendary",

    "Mythic"
];



// =====================================================
// PACK ODDS
// =====================================================

const PACK_ODDS =
{

    Common:60,

    Rare:25,

    Epic:10,

    Legendary:4.5,

    Mythic:0.5

};



// =====================================================
// SAFARI SPAWN WEIGHTS
// =====================================================
//
// Higher number = more common
//

const SAFARI_WEIGHTS =
{

    Common:60,

    Rare:25,

    Epic:10,

    Legendary:4,

    Mythic:1

};



// =====================================================
// CARD FRAME COLORS
// =====================================================

const RARITY_COLORS =
{

    Starter:"#58c36d",

    Common:"#777777",

    Rare:"#2d8cff",

    Epic:"#b146ff",

    Legendary:"#ffb300",

    Mythic:"#ff3b8b"

};



// =====================================================
// GLOW COLORS
// =====================================================

const RARITY_GLOWS =
{

    Starter:"#66ff88",

    Common:"#bbbbbb",

    Rare:"#4aa8ff",

    Epic:"#d46bff",

    Legendary:"#ffd54f",

    Mythic:"#ff66b7"

};



// =====================================================
// XP MULTIPLIERS
// =====================================================

const XP_MULTIPLIERS =
{

    Starter:1,

    Common:1,

    Rare:1.25,

    Epic:1.6,

    Legendary:2,

    Mythic:3

};



// =====================================================
// COIN REWARDS
// =====================================================

const COIN_REWARDS =
{

    Common:5,

    Rare:10,

    Epic:20,

    Legendary:40,

    Mythic:100

};



// =====================================================
// BASE STAT MULTIPLIERS
// =====================================================
//
// Applied when creatures are generated.
//

const STAT_MULTIPLIERS =
{

    Starter:1.10,

    Common:1,

    Rare:1.15,

    Epic:1.35,

    Legendary:1.65,

    Mythic:2.0

};



// =====================================================
// SHINY MULTIPLIERS
// =====================================================

const SHINY_MULTIPLIERS =
{

    hp:1.05,

    attack:1.05,

    defense:1.05,

    speed:1.05

};



// =====================================================
// HELPER FUNCTIONS
// =====================================================

function getRarityColor(rarity)
{
    return RARITY_COLORS[rarity];
}



function getRarityGlow(rarity)
{
    return RARITY_GLOWS[rarity];
}



function getPackChance(rarity)
{
    return PACK_ODDS[rarity];
}



function getSafariWeight(rarity)
{
    return SAFARI_WEIGHTS[rarity];
}



function getStatMultiplier(rarity)
{
    return STAT_MULTIPLIERS[rarity];
}



function getCoinReward(rarity)
{
    return COIN_REWARDS[rarity];
}



function getXPMultiplier(rarity)
{
    return XP_MULTIPLIERS[rarity];
}



// =====================================================
// RANDOM RARITY ROLL
// =====================================================

function rollPackRarity()
{
    const roll =
    Math.random() * 100;

    if(roll < PACK_ODDS.Common)
    {
        return "Common";
    }

    if(roll < PACK_ODDS.Common + PACK_ODDS.Rare)
    {
        return "Rare";
    }

    if(
        roll <
        PACK_ODDS.Common +
        PACK_ODDS.Rare +
        PACK_ODDS.Epic
    )
    {
        return "Epic";
    }

    if(
        roll <
        PACK_ODDS.Common +
        PACK_ODDS.Rare +
        PACK_ODDS.Epic +
        PACK_ODDS.Legendary
    )
    {
        return "Legendary";
    }

    return "Mythic";
}



// =====================================================
// STARTUP
// =====================================================

if(DEBUG.enabled && DEBUG.logLoading)
{
    console.log("Loaded rarities.js");
}
