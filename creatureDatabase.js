// =====================================================
// MYTHICMON
// CREATURE DATABASE
// =====================================================

// This file stores every creature in the game.
// Creature files call registerCreatures() to add
// themselves to this database.

const CreatureDatabase = {};

const CreatureList = [];

function registerCreatures(creatures)
{
    for(const creature of creatures)
    {
        if(CreatureDatabase[creature.id])
        {
            console.warn(
                "Duplicate Creature ID:",
                creature.id
            );

            continue;
        }

        CreatureDatabase[
            creature.id
        ] = creature;

        CreatureList.push(
            creature
        );
    }
}

function getCreatureByID(id)
{
    return CreatureDatabase[id];
}

function getCreatureByName(name)
{
    return CreatureList.find(
        creature =>
        creature.name === name
    );
}

function getCreaturesInZone(zone)
{
    return CreatureList.filter(
        creature =>
        creature.zone === zone
    );
}

function getCreaturesByType(type)
{
    return CreatureList.filter(
        creature =>
        creature.type === type
    );
}

function getCreaturesByRarity(rarity)
{
    return CreatureList.filter(
        creature =>
        creature.rarity === rarity
    );
}

function getRandomCreature(zone)
{
    const pool =
    getCreaturesInZone(zone);

    if(pool.length === 0)
    {
        return null;
    }

    return pool[
        Math.floor(
            Math.random() *
            pool.length
        )
    ];
}

function getAllCreatures()
{
    return CreatureList;
}

function getCreatureCount()
{
    return CreatureList.length;
}
