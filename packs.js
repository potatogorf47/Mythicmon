// =====================================================
// MYTHICMON
// PACK DATABASE
// =====================================================
//
// Contains:
//
// • Pack Definitions
// • Pack Prices
// • Guaranteed Slots
// • Pack Rewards
// • Pack Odds
//
// No gameplay logic belongs here.
//
// =====================================================



// =====================================================
// PACK DEFINITIONS
// =====================================================

const PACKS =
{

// =====================================================
// VERDANT PACK
// =====================================================

forest:
{

    id:"forest",

    name:"Verdant Pack",

    zone:"forest",

    price:100,

    cards:5,

    guaranteedRare:3,

    guaranteedEpic:4,

    guaranteedHit:5

},



// =====================================================
// EMBER PACK
// =====================================================

ember:
{

    id:"ember",

    name:"Ember Pack",

    zone:"ember",

    price:150,

    cards:5,

    guaranteedRare:3,

    guaranteedEpic:4,

    guaranteedHit:5

},



// =====================================================
// REEF PACK
// =====================================================

reef:
{

    id:"reef",

    name:"Azure Pack",

    zone:"reef",

    price:200,

    cards:5,

    guaranteedRare:3,

    guaranteedEpic:4,

    guaranteedHit:5

},



// =====================================================
// CAVERN PACK
// =====================================================

cavern:
{

    id:"cavern",

    name:"Crystal Pack",

    zone:"cavern",

    price:250,

    cards:5,

    guaranteedRare:3,

    guaranteedEpic:4,

    guaranteedHit:5

},



// =====================================================
// TUNDRA PACK
// =====================================================

tundra:
{

    id:"tundra",

    name:"Frozen Pack",

    zone:"tundra",

    price:300,

    cards:5,

    guaranteedRare:3,

    guaranteedEpic:4,

    guaranteedHit:5

},



// =====================================================
// SWAMP PACK
// =====================================================

swamp:
{

    id:"swamp",

    name:"Toxic Pack",

    zone:"swamp",

    price:350,

    cards:5,

    guaranteedRare:3,

    guaranteedEpic:4,

    guaranteedHit:5

},



// =====================================================
// SKY PACK
// =====================================================

sky:
{

    id:"sky",

    name:"Sky Pack",

    zone:"sky",

    price:400,

    cards:5,

    guaranteedRare:3,

    guaranteedEpic:4,

    guaranteedHit:5

},



// =====================================================
// VOLCANO PACK
// =====================================================

volcano:
{

    id:"volcano",

    name:"Inferno Pack",

    zone:"volcano",

    price:500,

    cards:5,

    guaranteedRare:3,

    guaranteedEpic:4,

    guaranteedHit:5

},



// =====================================================
// TEMPLE PACK
// =====================================================

temple:
{

    id:"temple",

    name:"Temple Pack",

    zone:"temple",

    price:600,

    cards:5,

    guaranteedRare:3,

    guaranteedEpic:4,

    guaranteedHit:5

},



// =====================================================
// FACTORY PACK
// =====================================================

factory:
{

    id:"factory",

    name:"Steel Pack",

    zone:"factory",

    price:750,

    cards:5,

    guaranteedRare:3,

    guaranteedEpic:4,

    guaranteedHit:5

},



// =====================================================
// MYTHIC PACK
// =====================================================

mythic:
{

    id:"mythic",

    name:"Mythic Pack",

    zone:"mythic",

    price:1000,

    cards:5,

    guaranteedRare:2,

    guaranteedEpic:3,

    guaranteedHit:5

}

};



// =====================================================
// PACK RARITY TABLE
// =====================================================

const PACK_RARITY_TABLE =
{

    Common:60,

    Rare:25,

    Epic:10,

    Legendary:4.5,

    Mythic:0.5

};



// =====================================================
// SHINY SETTINGS
// =====================================================

const PACK_SHINY =
{

    baseChance:512,

    masteryBonus:0.001

};



// =====================================================
// LEVEL SETTINGS
// =====================================================

const PACK_LEVELS =
{

    minimum:1,

    maximum:100

};



// =====================================================
// DUPLICATE REWARDS
// =====================================================

const DUPLICATE_REWARDS =
{

    Common:10,

    Rare:25,

    Epic:75,

    Legendary:250,

    Mythic:1000

};



// =====================================================
// HELPER FUNCTIONS
// =====================================================

function getPack(id)
{
    return PACKS[id];
}



function getPackPrice(id)
{
    return PACKS[id].price;
}



function getPackCards(id)
{
    return PACKS[id].cards;
}



function getPackZone(id)
{
    return PACKS[id].zone;
}



function getDuplicateReward(rarity)
{
    return DUPLICATE_REWARDS[rarity];
}



// =====================================================
// STARTUP
// =====================================================

if(DEBUG.enabled && DEBUG.logLoading)
{
    console.log(
        "Loaded packs.js"
    );
}
