// =====================================
// MYTHICMON CREATURE DATABASE
// creatures.js
// =====================================

const creatures = [

    // ==========================
    // STARTERS
    // ==========================

    {
        id:1,
        name:"Flaretail",
        type:"Fire",
        rarity:"Starter",
        zone:"ember",

        hp:65,
        attack:14,
        defense:10,
        speed:12
    },

    {
        id:2,
        name:"Aquafang",
        type:"Water",
        rarity:"Starter",
        zone:"reef",

        hp:72,
        attack:12,
        defense:12,
        speed:10
    },

    {
        id:3,
        name:"Leafhorn",
        type:"Nature",
        rarity:"Starter",
        zone:"forest",

        hp:80,
        attack:10,
        defense:15,
        speed:8
    },

    // ==========================
    // FOREST
    // ==========================

    {
        id:4,
        name:"Sparkit",
        type:"Electric",
        rarity:"Common",
        zone:"forest",

        hp:42,
        attack:9,
        defense:5,
        speed:14
    },

    {
        id:5,
        name:"Mosshell",
        type:"Nature",
        rarity:"Common",
        zone:"forest",

        hp:48,
        attack:8,
        defense:8,
        speed:6
    },

    {
        id:6,
        name:"Barkoon",
        type:"Nature",
        rarity:"Common",
        zone:"forest",

        hp:52,
        attack:9,
        defense:10,
        speed:7
    },

    {
        id:7,
        name:"Owlight",
        type:"Air",
        rarity:"Rare",
        zone:"forest",

        hp:60,
        attack:13,
        defense:8,
        speed:15
    },

    {
        id:8,
        name:"Ancientroot",
        type:"Nature",
        rarity:"Epic",
        zone:"forest",

        hp:95,
        attack:18,
        defense:20,
        speed:5
    },

    // ==========================
    // EMBER
    // ==========================

    {
        id:9,
        name:"Thunderclaw",
        type:"Electric",
        rarity:"Rare",
        zone:"ember",

        hp:75,
        attack:17,
        defense:11,
        speed:13
    },

    {
        id:10,
        name:"Lavabear",
        type:"Fire",
        rarity:"Common",
        zone:"ember",

        hp:58,
        attack:12,
        defense:8,
        speed:8
    },

    {
        id:11,
        name:"Ashwing",
        type:"Fire",
        rarity:"Rare",
        zone:"ember",

        hp:70,
        attack:16,
        defense:9,
        speed:15
    },

    {
        id:12,
        name:"Infernotaur",
        type:"Fire",
        rarity:"Epic",
        zone:"ember",

        hp:100,
        attack:22,
        defense:18,
        speed:7
    },

    // ==========================
    // REEF
    // ==========================

    {
        id:13,
        name:"Crystalback",
        type:"Water",
        rarity:"Rare",
        zone:"reef",

        hp:82,
        attack:15,
        defense:16,
        speed:7
    },

    {
        id:14,
        name:"Seafin",
        type:"Water",
        rarity:"Common",
        zone:"reef",

        hp:50,
        attack:8,
        defense:6,
        speed:12
    },

    {
        id:15,
        name:"Coralisk",
        type:"Water",
        rarity:"Common",
        zone:"reef",

        hp:62,
        attack:11,
        defense:11,
        speed:7
    },

    {
        id:16,
        name:"Deepjaw",
        type:"Water",
        rarity:"Epic",
        zone:"reef",

        hp:104,
        attack:21,
        defense:18,
        speed:6
    },

    // ==========================
    // CAVERN
    // ==========================

    {
        id:17,
        name:"Stonejaw",
        type:"Rock",
        rarity:"Common",
        zone:"cavern",

        hp:68,
        attack:11,
        defense:15,
        speed:4
    },

    {
        id:18,
        name:"Shadowfang",
        type:"Dark",
        rarity:"Epic",
        zone:"cavern",

        hp:96,
        attack:22,
        defense:12,
        speed:16
    },

    {
        id:19,
        name:"Batshade",
        type:"Dark",
        rarity:"Rare",
        zone:"cavern",

        hp:66,
        attack:15,
        defense:8,
        speed:17
    },

    // ==========================
    // TUNDRA
    // ==========================

    {
        id:20,
        name:"Frosthorn",
        type:"Ice",
        rarity:"Common",
        zone:"tundra",

        hp:62,
        attack:11,
        defense:10,
        speed:7
    },

    {
        id:21,
        name:"Blizzardon",
        type:"Ice",
        rarity:"Rare",
        zone:"tundra",

        hp:84,
        attack:17,
        defense:15,
        speed:10
    },

    {
        id:22,
        name:"Snowlynx",
        type:"Ice",
        rarity:"Epic",
        zone:"tundra",

        hp:95,
        attack:20,
        defense:13,
        speed:18
    },

    // ==========================
    // SWAMP
    // ==========================

    {
        id:23,
        name:"Bogtoad",
        type:"Poison",
        rarity:"Common",
        zone:"swamp",

        hp:54,
        attack:9,
        defense:8,
        speed:8
    },

    {
        id:24,
        name:"Venomwing",
        type:"Poison",
        rarity:"Epic",
        zone:"swamp",

        hp:97,
        attack:22,
        defense:12,
        speed:16
    },

    {
        id:25,
        name:"Toxisnake",
        type:"Poison",
        rarity:"Rare",
        zone:"swamp",

        hp:72,
        attack:15,
        defense:10,
        speed:15
    },

    // ==========================
    // LEGENDARIES
    // ==========================

    {
        id:26,
        name:"Skyserpent",
        type:"Air",
        rarity:"Legendary",
        zone:"sky",

        hp:130,
        attack:28,
        defense:20,
        speed:20
    },

    {
        id:27,
        name:"Solarion",
        type:"Light",
        rarity:"Legendary",
        zone:"temple",

        hp:140,
        attack:30,
        defense:22,
        speed:18
    },

    {
        id:28,
        name:"Moonfang",
        type:"Dark",
        rarity:"Legendary",
        zone:"temple",

        hp:135,
        attack:29,
        defense:20,
        speed:19
    }

];

// =====================================
// HELPER FUNCTIONS
// =====================================

function getCreature(name)
{
    return creatures.find(
        creature => creature.name === name
    );
}

function getCreaturesByZone(zone)
{
    return creatures.filter(
        creature => creature.zone === zone
    );
}

function getCreaturesByRarity(rarity)
{
    return creatures.filter(
        creature => creature.rarity === rarity
    );
}
