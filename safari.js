// =====================================================
// MYTHICMON
// SAFARI DATABASE
// =====================================================
//
// This file defines how creatures spawn in the Safari.
//
// Gameplay logic belongs in safari.js.
//
// =====================================================



// =====================================================
// GLOBAL SAFARI SETTINGS
// =====================================================

const SAFARI =
{

    maxCreatures:10,

    spawnInterval:5000,

    creatureLifetime:30000,

    clickRadius:40,

    minimumSpawnLevel:1,

    maximumSpawnLevel:100

};



// =====================================================
// CREATURE MOVEMENT
// =====================================================

const SAFARI_MOVEMENT =
{

    minimumSpeed:20,

    maximumSpeed:80,

    directionChangeTime:2500,

    idleChance:20,

    sprintChance:8

};



// =====================================================
// SPAWN WEIGHTS
// =====================================================
//
// Larger number = more common.
//

const SPAWN_WEIGHTS =
{

    Common:60,

    Rare:25,

    Epic:10,

    Legendary:4,

    Mythic:1

};



// =====================================================
// BIOME SETTINGS
// =====================================================

const SAFARI_BIOMES =
{

    forest:
    {

        background:"forest",

        music:"forest_theme",

        maxCreatures:12

    },



    ember:
    {

        background:"ember",

        music:"ember_theme",

        maxCreatures:10

    },



    reef:
    {

        background:"reef",

        music:"reef_theme",

        maxCreatures:10

    },



    cavern:
    {

        background:"cavern",

        music:"cavern_theme",

        maxCreatures:9

    },



    tundra:
    {

        background:"tundra",

        music:"tundra_theme",

        maxCreatures:8

    },



    swamp:
    {

        background:"swamp",

        music:"swamp_theme",

        maxCreatures:9

    },



    sky:
    {

        background:"sky",

        music:"sky_theme",

        maxCreatures:11

    },



    volcano:
    {

        background:"volcano",

        music:"volcano_theme",

        maxCreatures:7

    },



    temple:
    {

        background:"temple",

        music:"temple_theme",

        maxCreatures:6

    },



    factory:
    {

        background:"factory",

        music:"factory_theme",

        maxCreatures:8

    },



    mythic:
    {

        background:"mythic",

        music:"mythic_theme",

        maxCreatures:5

    }

};



// =====================================================
// SPECIAL SPAWN CHANCES
// =====================================================

const SPECIAL_SPAWNS =
{

    shinyChance:512,

    alphaChance:250,

    bossChance:1000

};



// =====================================================
// WEATHER
// =====================================================

const WEATHER =
[

    "Sunny",

    "Rain",

    "Snow",

    "Fog",

    "Storm",

    "Heat",

    "Ash",

    "Wind",

    "Aurora"

];



// =====================================================
// FUTURE EVENTS
// =====================================================

const SAFARI_EVENTS =
{

    doubleSpawn:false,

    shinyWeekend:false,

    legendaryRush:false,

    bossInvasion:false

};



// =====================================================
// HELPER FUNCTIONS
// =====================================================

function getSafariBiome(zone)
{

    return SAFARI_BIOMES[zone];

}



function getSpawnWeight(rarity)
{

    return SPAWN_WEIGHTS[rarity];

}



function getBiomeCreatureLimit(zone)
{

    return SAFARI_BIOMES[zone].maxCreatures;

}



function getRandomWeather()
{

    return WEATHER[

        Math.floor(

            Math.random() *

            WEATHER.length

        )

    ];

}



// =====================================================
// STARTUP
// =====================================================

if(DEBUG.enabled && DEBUG.logLoading)
{

    console.log(

        "Loaded safari.js"

    );

}
