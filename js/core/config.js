// =====================================================
// MYTHICMON
// CONFIG
// =====================================================
//
// This file contains global configuration values
// used throughout the game.
//
// It should NEVER contain gameplay logic.
//
// =====================================================



// =====================================================
// GAME INFO
// =====================================================

const GAME =
{
    title: "MythicMon",

    version: "1.0.0",

    saveKey: "mythicmon_save",

    fps: 60
};



// =====================================================
// PLAYER SETTINGS
// =====================================================

const PLAYER =
{
    maxLevel: 100,

    startingCoins: 100,

    startingXP: 0,

    battleTeamSize: 3,

    movementTeamSize: 3,

    inventoryLimit: 9999
};



// =====================================================
// CARD SETTINGS
// =====================================================

const CARD =
{
    width: 260,

    height: 360,

    animationSpeed: 400
};



// =====================================================
// MAP SETTINGS
// =====================================================

const MAP =
{
    tileSize: 64,

    gravity: 0.6,

    playerSpeed: 5,

    jumpPower: 13,

    maxFallSpeed: 18
};



// =====================================================
// SAFARI SETTINGS
// =====================================================

const SAFARI_CONFIG =
{
    creatureLifetime: 30000,

    spawnInterval: 5000,

    maxCreatures: 10,

    minMovementSpeed: 20,

    maxMovementSpeed: 80
};



// =====================================================
// PACK SETTINGS
// =====================================================

const PACK =
{
    revealDelay: 800,

    cardsPerPack: 5,

    guaranteedRareSlot: 3,

    guaranteedEpicSlot: 4,

    guaranteedHitSlot: 5
};



// =====================================================
// SHINY SETTINGS
// =====================================================

const SHINY =
{
    baseChance: 512,

    masteryBonus: 0.002
};



// =====================================================
// DEBUG
// =====================================================

const DEBUG =
{
    enabled: true,

    logLoading: true,

    showFPS: false
};



// =====================================================
// STARTUP
// =====================================================

if(DEBUG.enabled && DEBUG.logLoading)
{
    console.log("Loaded config.js");
}
