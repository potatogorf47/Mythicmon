// =====================================================
// MYTHICMON
// PLAYER
// =====================================================

const Player =
{

    //--------------------------------------------------
    // Basic Information
    //--------------------------------------------------

    name: "Player",

    id: null,

    created: Date.now(),

    version: "0.1.0",

    //--------------------------------------------------
    // Currency
    //--------------------------------------------------

    coins: 0,

    gems: 0,

    packTokens: 0,

    //--------------------------------------------------
    // Collection
    //--------------------------------------------------

    collection: [],

    discovered: [],

    favorites: [],

    //--------------------------------------------------
    // Active Team
    //--------------------------------------------------

    team:
    [

        null,

        null,

        null,

        null

    ],

    //--------------------------------------------------
    // Inventory
    //--------------------------------------------------

    inventory:
    {

        berries: {},

        keys: {},

        evolutionItems: {},

        cosmetics: {},

        crafting: {}

    },

    //--------------------------------------------------
    // Safari
    //--------------------------------------------------

    safari:
    {

        currentZone: "forest",

        defeated: {},

        caught: {},

        longestChain: {},

        discoveredNests: []

    },

    //--------------------------------------------------
    // Packs
    //--------------------------------------------------

    packs:
    {

        opened: 0,

        pityCounter: {},

        statistics:
        {

            common: 0,

            uncommon: 0,

            rare: 0,

            epic: 0,

            legendary: 0,

            mythic: 0

        }

    },

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    statistics:
    {

        totalBattles: 0,

        totalWins: 0,

        totalLosses: 0,

        creaturesCaught: 0,

        creaturesDefeated: 0,

        totalPlayTime: 0,

        mapsCompleted: 0

    },

    //--------------------------------------------------
    // Progress
    //--------------------------------------------------

    progress:
    {

        unlockedZones:
        [

            "forest"

        ],

        completedMaps: [],

        unlockedAbilities: []

    },

    //--------------------------------------------------
    // Settings
    //--------------------------------------------------

    settings:
    {

        music: 100,

        sound: 100,

        fullscreen: false,

        showDamageNumbers: true,

        autoSave: true

    }

};
