// =====================================================
// MYTHICMON
// TYPES
// =====================================================
//
// This file contains:
//
// • Creature Types
// • Type Colors
// • Type Icons
// • Battle Effectiveness
// • Platformer Interactions
//
// No gameplay logic belongs here.
//
// =====================================================



// =====================================================
// TYPES
// =====================================================

const TYPES =
[
    "Fire",

    "Water",

    "Nature",

    "Electric",

    "Ice",

    "Rock",

    "Steel",

    "Air",

    "Dark",

    "Light",

    "Poison",

    "Psychic",

    "Cosmic"
];



// =====================================================
// TYPE COLORS
// =====================================================

const TYPE_COLORS =
{

    Fire:"#ff7043",

    Water:"#42a5f5",

    Nature:"#66bb6a",

    Electric:"#ffd54f",

    Ice:"#81d4fa",

    Rock:"#8d6e63",

    Steel:"#90a4ae",

    Air:"#e1f5fe",

    Dark:"#424242",

    Light:"#fff59d",

    Poison:"#8e24aa",

    Psychic:"#ec407a",

    Cosmic:"#7c4dff"

};



// =====================================================
// TYPE ICONS
// =====================================================
//
// Replace these later with image paths.
//

const TYPE_ICONS =
{

    Fire:"🔥",

    Water:"💧",

    Nature:"🌿",

    Electric:"⚡",

    Ice:"❄",

    Rock:"🪨",

    Steel:"⚙",

    Air:"🌪",

    Dark:"🌑",

    Light:"☀",

    Poison:"☣",

    Psychic:"🔮",

    Cosmic:"🌌"

};



// =====================================================
// TYPE EFFECTIVENESS
// =====================================================
//
// Attacking Type
//
// Strong Against
//

const TYPE_ADVANTAGES =
{

    Fire:
    [
        "Nature",
        "Ice"
    ],

    Water:
    [
        "Fire",
        "Rock"
    ],

    Nature:
    [
        "Water",
        "Rock"
    ],

    Electric:
    [
        "Water",
        "Air"
    ],

    Ice:
    [
        "Nature",
        "Air"
    ],

    Rock:
    [
        "Fire",
        "Electric"
    ],

    Steel:
    [
        "Rock",
        "Ice"
    ],

    Air:
    [
        "Nature",
        "Poison"
    ],

    Dark:
    [
        "Psychic",
        "Light"
    ],

    Light:
    [
        "Dark"
    ],

    Poison:
    [
        "Nature"
    ],

    Psychic:
    [
        "Poison"
    ],

    Cosmic:
    [
        "Fire",
        "Water",
        "Nature",
        "Electric"
    ]

};



// =====================================================
// PLATFORMER INTERACTIONS
// =====================================================
//
// These are NOT abilities.
//
// They are passive traits granted by a creature's type.
//

const TYPE_TRAITS =
{

    Fire:
    {
        lavaResistance:true,

        freezeImmune:false,

        waterWalking:false
    },

    Water:
    {
        swim:true,

        lavaResistance:false,

        waterWalking:true
    },

    Nature:
    {
        growVines:true,

        climbTrees:true
    },

    Electric:
    {
        powerMachines:true,

        activateSwitches:true
    },

    Ice:
    {
        freezeWater:true,

        iceResistance:true
    },

    Rock:
    {
        breakWeakWalls:true
    },

    Steel:
    {
        immuneSpikes:true
    },

    Air:
    {
        glideBoost:true
    },

    Dark:
    {
       seeHiddenPaths:true
    },

    Light:
    {
        illuminateDarkness:true
    },

    Poison:
    {
        poisonImmune:true
    },

    Psychic:
    {
        moveObjects:true
    },

    Cosmic:
    {
        teleportPads:true
    }

};



// =====================================================
// HELPER FUNCTIONS
// =====================================================

function getTypeColor(type)
{
    return TYPE_COLORS[type];
}



function getTypeIcon(type)
{
    return TYPE_ICONS[type];
}



function getTypeTraits(type)
{
    return TYPE_TRAITS[type];
}



function isStrongAgainst(
    attackType,
    defendType
)
{
    const advantages =
    TYPE_ADVANTAGES[attackType];

    if(!advantages)
    {
        return false;
    }

    return advantages.includes(
        defendType
    );
}



// =====================================================
// DAMAGE MULTIPLIER
// =====================================================

function getTypeMultiplier(
    attackType,
    defendType
)
{
    if(
        isStrongAgainst(
            attackType,
            defendType
        )
    )
    {
        return 2;
    }

    return 1;
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
        "Loaded types.js"
    );
}
