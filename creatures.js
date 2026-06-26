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
    },

    // =====================================
// FOREST CREATURES
// =====================================

{
    name:"Barkub",
    type:"Nature",
    rarity:"Common",
    zone:"forest",
    hp:48,
    attack:8,
    defense:8,
    speed:6
},

{
    name:"Twiglet",
    type:"Nature",
    rarity:"Common",
    zone:"forest",
    hp:44,
    attack:10,
    defense:6,
    speed:9
},

{
    name:"Acorno",
    type:"Nature",
    rarity:"Common",
    zone:"forest",
    hp:52,
    attack:7,
    defense:10,
    speed:5
},

{
    name:"Owlgrove",
    type:"Air",
    rarity:"Rare",
    zone:"forest",
    hp:70,
    attack:16,
    defense:12,
    speed:15
},

{
    name:"Thornpaw",
    type:"Nature",
    rarity:"Rare",
    zone:"forest",
    hp:74,
    attack:18,
    defense:13,
    speed:10
},

{
    name:"Vineclaw",
    type:"Nature",
    rarity:"Epic",
    zone:"forest",
    hp:98,
    attack:24,
    defense:19,
    speed:17
},

{
    name:"Ancientoak",
    type:"Nature",
    rarity:"Legendary",
    zone:"forest",
    hp:145,
    attack:30,
    defense:30,
    speed:8
},

// =====================================
// EMBER CREATURES
// =====================================

{
    name:"Cindercub",
    type:"Fire",
    rarity:"Common",
    zone:"ember",
    hp:48,
    attack:10,
    defense:7,
    speed:10
},

{
    name:"Ashhound",
    type:"Fire",
    rarity:"Common",
    zone:"ember",
    hp:52,
    attack:11,
    defense:8,
    speed:8
},

{
    name:"Coalimp",
    type:"Fire",
    rarity:"Common",
    zone:"ember",
    hp:46,
    attack:12,
    defense:6,
    speed:11
},

{
    name:"Blazewolf",
    type:"Fire",
    rarity:"Rare",
    zone:"ember",
    hp:72,
    attack:19,
    defense:11,
    speed:18
},

{
    name:"Lavabeak",
    type:"Fire",
    rarity:"Rare",
    zone:"ember",
    hp:76,
    attack:17,
    defense:13,
    speed:16
},

{
    name:"Inferdrake",
    type:"Fire",
    rarity:"Epic",
    zone:"ember",
    hp:108,
    attack:27,
    defense:18,
    speed:19
},

{
    name:"Phoenixar",
    type:"Fire",
    rarity:"Legendary",
    zone:"ember",
    hp:150,
    attack:34,
    defense:25,
    speed:28
},

// =====================================
// REEF CREATURES
// =====================================

{
    name:"Finlet",
    type:"Water",
    rarity:"Common",
    zone:"reef",
    hp:50,
    attack:9,
    defense:8,
    speed:9
},

{
    name:"Coralisk",
    type:"Water",
    rarity:"Common",
    zone:"reef",
    hp:56,
    attack:8,
    defense:11,
    speed:6
},

{
    name:"Bubblefin",
    type:"Water",
    rarity:"Common",
    zone:"reef",
    hp:48,
    attack:10,
    defense:8,
    speed:11
},

{
    name:"Tidehorn",
    type:"Water",
    rarity:"Rare",
    zone:"reef",
    hp:78,
    attack:17,
    defense:15,
    speed:12
},

{
    name:"Seadrake",
    type:"Water",
    rarity:"Rare",
    zone:"reef",
    hp:82,
    attack:18,
    defense:14,
    speed:13
},

{
    name:"Leviacoral",
    type:"Water",
    rarity:"Epic",
    zone:"reef",
    hp:110,
    attack:24,
    defense:22,
    speed:16
},

{
    name:"Poseigill",
    type:"Water",
    rarity:"Legendary",
    zone:"reef",
    hp:155,
    attack:32,
    defense:28,
    speed:18
},

// =====================================
// CAVERN CREATURES
// =====================================

{
    name:"Pebblit",
    type:"Rock",
    rarity:"Common",
    zone:"cavern",
    hp:60,
    attack:8,
    defense:14,
    speed:4
},

{
    name:"Batshade",
    type:"Dark",
    rarity:"Common",
    zone:"cavern",
    hp:50,
    attack:11,
    defense:8,
    speed:12
},

{
    name:"Cragmite",
    type:"Rock",
    rarity:"Common",
    zone:"cavern",
    hp:65,
    attack:9,
    defense:15,
    speed:3
},

{
    name:"Stonefang",
    type:"Rock",
    rarity:"Rare",
    zone:"cavern",
    hp:88,
    attack:19,
    defense:22,
    speed:7
},

{
    name:"Shadowbat",
    type:"Dark",
    rarity:"Rare",
    zone:"cavern",
    hp:72,
    attack:22,
    defense:12,
    speed:20
},

{
    name:"Obsidigon",
    type:"Rock",
    rarity:"Epic",
    zone:"cavern",
    hp:118,
    attack:27,
    defense:28,
    speed:12
},

{
    name:"Titanite",
    type:"Rock",
    rarity:"Legendary",
    zone:"cavern",
    hp:170,
    attack:33,
    defense:35,
    speed:10
},

// =====================================
// TUNDRA CREATURES
// =====================================

{
    name:"Snowcub",
    type:"Ice",
    rarity:"Common",
    zone:"tundra",
    hp:48,
    attack:10,
    defense:9,
    speed:10
},

{
    name:"Frostling",
    type:"Ice",
    rarity:"Common",
    zone:"tundra",
    hp:46,
    attack:11,
    defense:8,
    speed:12
},

{
    name:"Icetusk",
    type:"Ice",
    rarity:"Common",
    zone:"tundra",
    hp:58,
    attack:9,
    defense:12,
    speed:7
},

{
    name:"Blizzardeer",
    type:"Ice",
    rarity:"Rare",
    zone:"tundra",
    hp:82,
    attack:20,
    defense:15,
    speed:16
},

{
    name:"Glaciron",
    type:"Ice",
    rarity:"Rare",
    zone:"tundra",
    hp:86,
    attack:18,
    defense:18,
    speed:13
},

{
    name:"Cryofang",
    type:"Ice",
    rarity:"Epic",
    zone:"tundra",
    hp:115,
    attack:28,
    defense:20,
    speed:20
},

{
    name:"Avalore",
    type:"Ice",
    rarity:"Legendary",
    zone:"tundra",
    hp:160,
    attack:34,
    defense:27,
    speed:22
},

// =====================================
// SWAMP CREATURES
// =====================================

{
    name:"Bogling",
    type:"Poison",
    rarity:"Common",
    zone:"swamp",
    hp:54,
    attack:9,
    defense:10,
    speed:7
},

{
    name:"Sludglet",
    type:"Poison",
    rarity:"Common",
    zone:"swamp",
    hp:52,
    attack:10,
    defense:9,
    speed:8
},

{
    name:"Croakroot",
    type:"Nature",
    rarity:"Common",
    zone:"swamp",
    hp:56,
    attack:8,
    defense:11,
    speed:6
},

{
    name:"Venomtoad",
    type:"Poison",
    rarity:"Rare",
    zone:"swamp",
    hp:84,
    attack:20,
    defense:16,
    speed:14
},

{
    name:"Marshcoil",
    type:"Poison",
    rarity:"Rare",
    zone:"swamp",
    hp:80,
    attack:21,
    defense:15,
    speed:16
},

{
    name:"Plaguevine",
    type:"Poison",
    rarity:"Epic",
    zone:"swamp",
    hp:116,
    attack:27,
    defense:21,
    speed:18
},

{
    name:"Hydrabog",
    type:"Poison",
    rarity:"Legendary",
    zone:"swamp",
    hp:165,
    attack:35,
    defense:28,
    speed:16
},

// =====================================
// CAVERN CREATURES
// =====================================

{
    name:"Pebblit",
    type:"Rock",
    rarity:"Common",
    zone:"cavern",
    hp:60,
    attack:8,
    defense:14,
    speed:4
},

{
    name:"Batshade",
    type:"Dark",
    rarity:"Common",
    zone:"cavern",
    hp:50,
    attack:11,
    defense:8,
    speed:12
},

{
    name:"Cragmite",
    type:"Rock",
    rarity:"Common",
    zone:"cavern",
    hp:65,
    attack:9,
    defense:15,
    speed:3
},

{
    name:"Stonefang",
    type:"Rock",
    rarity:"Rare",
    zone:"cavern",
    hp:88,
    attack:19,
    defense:22,
    speed:7
},

{
    name:"Shadowbat",
    type:"Dark",
    rarity:"Rare",
    zone:"cavern",
    hp:72,
    attack:22,
    defense:12,
    speed:20
},

{
    name:"Obsidigon",
    type:"Rock",
    rarity:"Epic",
    zone:"cavern",
    hp:118,
    attack:27,
    defense:28,
    speed:12
},

{
    name:"Titanite",
    type:"Rock",
    rarity:"Legendary",
    zone:"cavern",
    hp:170,
    attack:33,
    defense:35,
    speed:10
},

// =====================================
// TUNDRA CREATURES
// =====================================

{
    name:"Snowcub",
    type:"Ice",
    rarity:"Common",
    zone:"tundra",
    hp:48,
    attack:10,
    defense:9,
    speed:10
},

{
    name:"Frostling",
    type:"Ice",
    rarity:"Common",
    zone:"tundra",
    hp:46,
    attack:11,
    defense:8,
    speed:12
},

{
    name:"Icetusk",
    type:"Ice",
    rarity:"Common",
    zone:"tundra",
    hp:58,
    attack:9,
    defense:12,
    speed:7
},

{
    name:"Blizzardeer",
    type:"Ice",
    rarity:"Rare",
    zone:"tundra",
    hp:82,
    attack:20,
    defense:15,
    speed:16
},

{
    name:"Glaciron",
    type:"Ice",
    rarity:"Rare",
    zone:"tundra",
    hp:86,
    attack:18,
    defense:18,
    speed:13
},

{
    name:"Cryofang",
    type:"Ice",
    rarity:"Epic",
    zone:"tundra",
    hp:115,
    attack:28,
    defense:20,
    speed:20
},

{
    name:"Avalore",
    type:"Ice",
    rarity:"Legendary",
    zone:"tundra",
    hp:160,
    attack:34,
    defense:27,
    speed:22
},

// =====================================
// SWAMP CREATURES
// =====================================

{
    name:"Bogling",
    type:"Poison",
    rarity:"Common",
    zone:"swamp",
    hp:54,
    attack:9,
    defense:10,
    speed:7
},

{
    name:"Sludglet",
    type:"Poison",
    rarity:"Common",
    zone:"swamp",
    hp:52,
    attack:10,
    defense:9,
    speed:8
},

{
    name:"Croakroot",
    type:"Nature",
    rarity:"Common",
    zone:"swamp",
    hp:56,
    attack:8,
    defense:11,
    speed:6
},

{
    name:"Venomtoad",
    type:"Poison",
    rarity:"Rare",
    zone:"swamp",
    hp:84,
    attack:20,
    defense:16,
    speed:14
},

{
    name:"Marshcoil",
    type:"Poison",
    rarity:"Rare",
    zone:"swamp",
    hp:80,
    attack:21,
    defense:15,
    speed:16
},

{
    name:"Plaguevine",
    type:"Poison",
    rarity:"Epic",
    zone:"swamp",
    hp:116,
    attack:27,
    defense:21,
    speed:18
},

{
    name:"Hydrabog",
    type:"Poison",
    rarity:"Legendary",
    zone:"swamp",
    hp:165,
    attack:35,
    defense:28,
    speed:16
},

// =====================================
// FACTORY CREATURES
// =====================================

{
    name:"Boltbot",
    type:"Electric",
    rarity:"Common",
    zone:"factory",
    hp:58,
    attack:12,
    defense:12,
    speed:9
},

{
    name:"Gearling",
    type:"Steel",
    rarity:"Common",
    zone:"factory",
    hp:62,
    attack:11,
    defense:15,
    speed:6
},

{
    name:"Sparkcore",
    type:"Electric",
    rarity:"Common",
    zone:"factory",
    hp:56,
    attack:13,
    defense:11,
    speed:10
},

{
    name:"Ironjaw",
    type:"Steel",
    rarity:"Rare",
    zone:"factory",
    hp:90,
    attack:22,
    defense:24,
    speed:10
},

{
    name:"Voltiger",
    type:"Electric",
    rarity:"Rare",
    zone:"factory",
    hp:82,
    attack:24,
    defense:18,
    speed:18
},

{
    name:"Titanbot",
    type:"Steel",
    rarity:"Epic",
    zone:"factory",
    hp:130,
    attack:31,
    defense:32,
    speed:12
},

{
    name:"Mechadon",
    type:"Steel",
    rarity:"Legendary",
    zone:"factory",
    hp:180,
    attack:37,
    defense:38,
    speed:14
},

// =====================================
// MYTHIC REALM
// =====================================

{
    name:"Aurorion",
    type:"Light",
    rarity:"Mythic",
    zone:"mythic",
    hp:200,
    attack:42,
    defense:35,
    speed:30
},

{
    name:"Voidrex",
    type:"Dark",
    rarity:"Mythic",
    zone:"mythic",
    hp:210,
    attack:45,
    defense:34,
    speed:28
},

{
    name:"Chronowl",
    type:"Psychic",
    rarity:"Mythic",
    zone:"mythic",
    hp:185,
    attack:40,
    defense:32,
    speed:38
},

{
    name:"Tempestia",
    type:"Air",
    rarity:"Mythic",
    zone:"mythic",
    hp:195,
    attack:43,
    defense:33,
    speed:36
},

{
    name:"Infernova",
    type:"Fire",
    rarity:"Mythic",
    zone:"mythic",
    hp:205,
    attack:46,
    defense:31,
    speed:27
},

{
    name:"Leviacrown",
    type:"Water",
    rarity:"Mythic",
    zone:"mythic",
    hp:215,
    attack:41,
    defense:38,
    speed:25
},

{
    name:"Gaiaheart",
    type:"Nature",
    rarity:"Mythic",
    zone:"mythic",
    hp:225,
    attack:39,
    defense:42,
    speed:22
},

{
    name:"Electryx",
    type:"Electric",
    rarity:"Mythic",
    zone:"mythic",
    hp:195,
    attack:47,
    defense:30,
    speed:40
},

{
    name:"Cryonis",
    type:"Ice",
    rarity:"Mythic",
    zone:"mythic",
    hp:200,
    attack:44,
    defense:34,
    speed:32
},

{
    name:"Mytharion",
    type:"Cosmic",
    rarity:"Mythic",
    zone:"mythic",
    hp:250,
    attack:50,
    defense:45,
    speed:35
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
