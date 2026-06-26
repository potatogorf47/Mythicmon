// =====================================================
// MYTHICMON
// ZONES
// =====================================================
//
// Every world/biome in MythicMon.
//
// Future features:
//
// • Safari
// • Battles
// • Pack Shop
// • Map Creator
// • Platforming
// • Multiplayer Maps
//
// =====================================================



const ZONES =
{

// =====================================================
// VERDANT FOREST
// =====================================================

forest:
{

    id:"forest",

    name:"Verdant Forest",

    color:"#4CAF50",

    icon:"🌲",

    unlockLevel:1,

    packCost:100,

    battleBackground:"forest",

    music:"forest_theme",

    weather:
    [
        "Sunny",
        "Rain"
    ]

},



// =====================================================
// EMBER VOLCANO
// =====================================================

ember:
{

    id:"ember",

    name:"Ember Volcano",

    color:"#F4511E",

    icon:"🌋",

    unlockLevel:3,

    packCost:150,

    battleBackground:"ember",

    music:"ember_theme",

    weather:
    [
        "Ash",
        "Heat"
    ]

},



// =====================================================
// AZURE REEF
// =====================================================

reef:
{

    id:"reef",

    name:"Azure Reef",

    color:"#29B6F6",

    icon:"🌊",

    unlockLevel:5,

    packCost:200,

    battleBackground:"reef",

    music:"reef_theme",

    weather:
    [
        "Clear",

        "Rain"
    ]

},



// =====================================================
// CRYSTAL CAVERN
// =====================================================

cavern:
{

    id:"cavern",

    name:"Crystal Cavern",

    color:"#7E57C2",

    icon:"💎",

    unlockLevel:8,

    packCost:250,

    battleBackground:"cavern",

    music:"cavern_theme",

    weather:
    [
        "Crystal Dust"
    ]

},



// =====================================================
// FROZEN TUNDRA
// =====================================================

tundra:
{

    id:"tundra",

    name:"Frozen Tundra",

    color:"#90CAF9",

    icon:"❄️",

    unlockLevel:12,

    packCost:300,

    battleBackground:"tundra",

    music:"tundra_theme",

    weather:
    [
        "Snow",

        "Blizzard"
    ]

},



// =====================================================
// POISON SWAMP
// =====================================================

swamp:
{

    id:"swamp",

    name:"Poison Swamp",

    color:"#7CB342",

    icon:"☣️",

    unlockLevel:16,

    packCost:350,

    battleBackground:"swamp",

    music:"swamp_theme",

    weather:
    [
        "Fog",

        "Rain"
    ]

},



// =====================================================
// SKY KINGDOM
// =====================================================

sky:
{

    id:"sky",

    name:"Sky Kingdom",

    color:"#42A5F5",

    icon:"☁️",

    unlockLevel:20,

    packCost:400,

    battleBackground:"sky",

    music:"sky_theme",

    weather:
    [
        "Wind",

        "Storm"
    ]

},



// =====================================================
// MOLTEN CORE
// =====================================================

volcano:
{

    id:"volcano",

    name:"Molten Core",

    color:"#FF5722",

    icon:"🔥",

    unlockLevel:24,

    packCost:500,

    battleBackground:"volcano",

    music:"volcano_theme",

    weather:
    [
        "Ash",

        "Lava Rain"
    ]

},



// =====================================================
// ANCIENT TEMPLE
// =====================================================

temple:
{

    id:"temple",

    name:"Ancient Temple",

    color:"#C0A060",

    icon:"🏛️",

    unlockLevel:30,

    packCost:600,

    battleBackground:"temple",

    music:"temple_theme",

    weather:
    [
        "Sunny"
    ]

},



// =====================================================
// STEEL FACTORY
// =====================================================

factory:
{

    id:"factory",

    name:"Steel Factory",

    color:"#78909C",

    icon:"⚙️",

    unlockLevel:36,

    packCost:700,

    battleBackground:"factory",

    music:"factory_theme",

    weather:
    [
        "Steam"
    ]

},



// =====================================================
// MYTHIC REALM
// =====================================================

mythic:
{

    id:"mythic",

    name:"Mythic Realm",

    color:"#AB47BC",

    icon:"✨",

    unlockLevel:45,

    packCost:1000,

    battleBackground:"mythic",

    music:"mythic_theme",

    weather:
    [
        "Aurora",

        "Magic"
    ]

}

};



// =====================================================
// HELPERS
// =====================================================

function getZone(id)
{
    return ZONES[id];
}



function getZoneName(id)
{
    return ZONES[id].name;
}



function getZoneColor(id)
{
    return ZONES[id].color;
}



function getZonePackCost(id)
{
    return ZONES[id].packCost;
}



function getZoneWeather(id)
{
    return ZONES[id].weather;
}



// =====================================================
// STARTUP
// =====================================================

if(DEBUG.enabled && DEBUG.logLoading)
{
    console.log("Loaded zones.js");
}
