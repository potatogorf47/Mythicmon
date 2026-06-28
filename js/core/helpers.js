// =====================================================
// MYTHICMON
// HELPERS
// =====================================================
//
// Universal helper functions used throughout the game.
//
// This file should NEVER contain gameplay logic.
//
// =====================================================



// =====================================================
// RANDOM
// =====================================================

function randomInt(min, max)
{
    return Math.floor(
        Math.random() *
        (max - min + 1)
    ) + min;
}



function randomFloat(min, max)
{
    return Math.random() *
        (max - min) +
        min;
}



function randomChance(percent)
{
    return Math.random() * 100 < percent;
}



function chooseRandom(array)
{
    if(array.length === 0)
    {
        return null;
    }

    return array[
        randomInt(
            0,
            array.length - 1
        )
    ];
}



// =====================================================
// CREATURE LOOKUPS
// =====================================================

function getCreature(name)
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



function getCreaturesInZone(zone)
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



// =====================================================
// PACK HELPERS
// =====================================================

function getRandomCreature(zone)
{

    const creatures =

        getCreaturesInZone(zone);



    return chooseRandom(

        creatures

    );

}



function getRandomCreatureOfRarity(
    zone,
    rarity
)
{

    const creatures =

        CREATURES.filter(

            creature =>

                creature.zone === zone &&

                creature.rarity === rarity

        );



    return chooseRandom(

        creatures

    );

}



// =====================================================
// PLAYER STORAGE
// =====================================================

function saveGame(data)
{

    localStorage.setItem(

        GAME.saveKey,

        JSON.stringify(data)

    );

}



function loadGame()
{

    const save =

        localStorage.getItem(

            GAME.saveKey

        );



    if(!save)
    {
        return null;
    }



    return JSON.parse(save);

}



// =====================================================
// COLLECTION
// =====================================================

function hasCreature(name)
{

    const collection =

        JSON.parse(

            localStorage.getItem(

                "collection"

            )

        ) || [];



    return collection.some(

        creature =>

        creature.name === name

    );

}



function collectionCount(name)
{

    const collection =

        JSON.parse(

            localStorage.getItem(

                "collection"

            )

        ) || [];



    return collection.filter(

        creature =>

        creature.name === name

    ).length;

}



// =====================================================
// SHINY
// =====================================================

function rollShiny(masteryLevel = 0)
{

    const odds =

        SHINY.baseChance -

        masteryLevel;



    return randomInt(

        1,

        Math.max(2, odds)

    ) === 1;

}



// =====================================================
// UNIQUE IDs
// =====================================================

function generateID()
{

    return (

        Date.now().toString(36) +

        Math.random()
            .toString(36)
            .substring(2,10)

    );

}



// =====================================================
// CLAMP
// =====================================================

function clamp(value, min, max)
{

    return Math.max(

        min,

        Math.min(

            max,

            value

        )

    );

}



// =====================================================
// FORMATTERS
// =====================================================

function capitalize(text)
{

    return text.charAt(0).toUpperCase() +

        text.slice(1);

}



function formatCoins(number)
{

    return number.toLocaleString();

}



function formatPercentage(value)
{

    return value + "%";

}



// =====================================================
// DEBUG
// =====================================================

function debug(message)
{

    if(DEBUG.enabled)
    {
        console.log(

            "[MythicMon]",

            message

        );
    }

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

        "Loaded helpers.js"

    );

}
