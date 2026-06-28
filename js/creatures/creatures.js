// =====================================================
// MYTHICMON
// CREATURE DATABASE
// =====================================================
//
// This file initializes the global creature database.
//
// Every zone file adds creatures to this array.
//
// Example:
//
// forest.js
// CREATURES.push(...);
//
// ember.js
// CREATURES.push(...);
//
// reef.js
// CREATURES.push(...);
//
// =====================================================



// =====================================================
// GLOBAL DATABASE
// =====================================================

const CREATURES = [];



// =====================================================
// DATABASE HELPERS
// =====================================================

function registerCreature(creature)
{
    CREATURES.push(creature);
}



function registerCreatures(creatures)
{
    CREATURES.push(...creatures);
}



// =====================================================
// DATABASE LOOKUPS
// =====================================================

function getCreatureByName(name)
{
    return CREATURES.find(

        creature =>

        creature.name === name

    );
}



function getCreatureByID(id)
{
    return CREATURES.find(

        creature =>

        creature.id === id

    );
}



function getCreaturesByZone(zone)
{
    return CREATURES.filter(

        creature =>

        creature.zone === zone

    );
}



function getCreaturesByRarity(rarity)
{
    return CREATURES.filter(

        creature =>

        creature.rarity === rarity

    );
}



function getCreaturesByType(type)
{
    return CREATURES.filter(

        creature =>

        creature.type === type

    );
}



function getStarterCreatures()
{
    return CREATURES.filter(

        creature =>

        creature.rarity === "Starter"

    );
}



// =====================================================
// RANDOM LOOKUPS
// =====================================================

function getRandomCreature(zone)
{

    const list =

        getCreaturesByZone(zone);



    if(list.length === 0)
    {
        return null;
    }



    return chooseRandom(list);

}



function getRandomCreatureByRarity(
    zone,
    rarity
)
{

    const list =

        CREATURES.filter(

            creature =>

                creature.zone === zone &&

                creature.rarity === rarity

        );



    if(list.length === 0)
    {
        return null;
    }



    return chooseRandom(list);

}



// =====================================================
// STAT GENERATION
// =====================================================

function createBattleStats(
    creature,
    level
)
{

    return scaleStats(

        {

            hp:creature.hp,

            attack:creature.attack,

            defense:creature.defense,

            speed:creature.speed

        },

        level

    );

}



// =====================================================
// DATABASE INFO
// =====================================================

function totalCreatures()
{
    return CREATURES.length;
}



function totalStarters()
{
    return getStarterCreatures().length;
}



// =====================================================
// STARTUP
// =====================================================

if(DEBUG.enabled && DEBUG.logLoading)
{

    console.log(

        "Loaded creatures.js"

    );

}
