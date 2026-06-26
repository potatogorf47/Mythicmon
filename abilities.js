// =====================================================
// MYTHICMON
// ABILITIES
// =====================================================
//
// This file contains EVERY ability in the game.
//
// Creatures reference abilities by ID.
//
// Example:
//
// movementAbility:"double_jump"
//
// instead of hardcoding movement.
//
// =====================================================



// =====================================================
// MOVEMENT ABILITIES
// =====================================================

const MOVEMENT_ABILITIES =
{

    none:
    {
        id:"none",

        name:"None",

        description:
        "No movement ability."
    },



    double_jump:
    {
        id:"double_jump",

        name:"Double Jump",

        description:
        "Allows a second jump while airborne."
    },



    wall_climb:
    {
        id:"wall_climb",

        name:"Wall Climb",

        description:
        "Climb vertical walls."
    },



    dash:
    {
        id:"dash",

        name:"Dash",

        description:
        "Dash forward quickly."
    },



    glide:
    {
        id:"glide",

        name:"Glide",

        description:
        "Fall much slower."
    },



    swim:
    {
        id:"swim",

        name:"Swim",

        description:
        "Move through water."
    },



    water_walk:
    {
        id:"water_walk",

        name:"Water Walk",

        description:
        "Walk across water."
    },



    freeze_water:
    {
        id:"freeze_water",

        name:"Freeze Water",

        description:
        "Freeze lakes into platforms."
    },



    lava_immunity:
    {
        id:"lava_immunity",

        name:"Lava Immunity",

        description:
        "Walk safely through lava."
    },



    vine_swing:
    {
        id:"vine_swing",

        name:"Vine Swing",

        description:
        "Swing across vines."
    },



    push_blocks:
    {
        id:"push_blocks",

        name:"Push Blocks",

        description:
        "Push heavy objects."
    },



    break_rocks:
    {
        id:"break_rocks",

        name:"Break Rocks",

        description:
        "Destroy cracked walls."
    },



    teleport:
    {
        id:"teleport",

        name:"Teleport",

        description:
        "Teleport short distances."
    },



    grapple:
    {
        id:"grapple",

        name:"Grapple",

        description:
        "Hook onto grapple points."
    }

};



// =====================================================
// BATTLE ABILITIES
// =====================================================

const BATTLE_ABILITIES =
{

    none:
    {
        id:"none",

        name:"None"
    },



    burn:
    {
        id:"burn",

        name:"Burn",

        description:
        "Chance to burn the opponent."
    },



    freeze:
    {
        id:"freeze",

        name:"Freeze",

        description:
        "Chance to freeze the opponent."
    },



    poison:
    {
        id:"poison",

        name:"Poison",

        description:
        "Deals damage every turn."
    },



    regeneration:
    {
        id:"regeneration",

        name:"Regeneration",

        description:
        "Restore HP every turn."
    },



    shell_armor:
    {
        id:"shell_armor",

        name:"Shell Armor",

        description:
        "Reduce incoming damage."
    },



    thorns:
    {
        id:"thorns",

        name:"Thorns",

        description:
        "Reflect damage."
    },



    speed_boost:
    {
        id:"speed_boost",

        name:"Speed Boost",

        description:
        "Increase speed every turn."
    },



    life_steal:
    {
        id:"life_steal",

        name:"Life Steal",

        description:
        "Heal from attacks."
    },



    berserk:
    {
        id:"berserk",

        name:"Berserk",

        description:
        "Gain attack when HP is low."
    }

};



// =====================================================
// PASSIVE ABILITIES
// =====================================================
//
// These are always active.
//

const PASSIVE_ABILITIES =
{

    none:
    {
        id:"none",

        name:"None"
    },



    lucky:
    {
        id:"lucky",

        name:"Lucky",

        description:
        "Slightly increases rare pack pulls."
    },



    explorer:
    {
        id:"explorer",

        name:"Explorer",

        description:
        "Safari creatures spawn faster."
    },



    shiny_hunter:
    {
        id:"shiny_hunter",

        name:"Shiny Hunter",

        description:
        "Slightly increases shiny odds."
    },



    quick_learner:
    {
        id:"quick_learner",

        name:"Quick Learner",

        description:
        "Gain extra experience."
    },



    collector:
    {
        id:"collector",

        name:"Collector",

        description:
        "Earn more coins from packs."
    }

};



// =====================================================
// HELPER FUNCTIONS
// =====================================================

function getMovementAbility(id)
{
    return MOVEMENT_ABILITIES[id];
}



function getBattleAbility(id)
{
    return BATTLE_ABILITIES[id];
}



function getPassiveAbility(id)
{
    return PASSIVE_ABILITIES[id];
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
        "Loaded abilities.js"
    );
}
