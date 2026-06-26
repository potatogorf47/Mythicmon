// =====================================
// MYTHICMON
// script.js
// PART 1 - SAVE SYSTEM
// =====================================

// -----------------------------
// SAVE SETTINGS
// -----------------------------

const SAVE_KEY = "mythicmon_save";

// -----------------------------
// GAME DATA
// -----------------------------

let gameData =
{
    username: "",

    starter: null,

    coins: 100,

    level: 1,

    xp: 0,

    collection: [],

    unlocked: []
};

// =====================================
// SAVE GAME
// =====================================

function saveGame()
{
    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(gameData)
    );
}

// =====================================
// LOAD GAME
// =====================================

function loadGame()
{
    const save =
    localStorage.getItem(
        SAVE_KEY
    );

    if(save)
    {
        gameData =
        JSON.parse(save);
    }

    // Future proof older saves

    if(!gameData.collection)
    {
        gameData.collection = [];
    }

    if(!gameData.unlocked)
    {
        gameData.unlocked = [];
    }

    if(gameData.coins == null)
    {
        gameData.coins = 100;
    }

    if(gameData.level == null)
    {
        gameData.level = 1;
    }

    if(gameData.xp == null)
    {
        gameData.xp = 0;
    }

    if(gameData.username == null)
    {
        gameData.username = "";
    }
}

// =====================================
// RESET SAVE
// =====================================

function resetGame()
{
    if(
        confirm(
            "Delete your MythicMon save?"
        )
    )
    {
        localStorage.removeItem(
            SAVE_KEY
        );

        location.reload();
    }
}

// =====================================
// HELPER FUNCTIONS
// =====================================

function getCreature(name)
{
    return creatures.find(
        creature =>
        creature.name === name
    );
}

function hasCreature(name)
{
    return gameData.collection.includes(
        name
    );
}

function unlockCreature(name)
{
    if(
        !gameData.unlocked.includes(
            name
        )
    )
    {
        gameData.unlocked.push(
            name
        );
    }
}

function addCreature(name)
{
    gameData.collection.push(
        name
    );

    unlockCreature(name);
}

function addCoins(amount)
{
    gameData.coins += amount;

    updateCoins();

    saveGame();
}

function removeCoins(amount)
{
    gameData.coins -= amount;

    if(gameData.coins < 0)
    {
        gameData.coins = 0;
    }

    updateCoins();

    saveGame();
}

// =====================================
// COINS
// =====================================

function updateCoins()
{
    const display =
    document.getElementById(
        "coin-display"
    );

    if(display)
    {
        display.textContent =
        gameData.coins;
    }
}

// =====================================
// STARTUP
// =====================================

loadGame();

console.log(
    "Part 1 Loaded"
);
// =====================================
// PART 2
// STARTER + PACK OPENING
// =====================================

// -----------------------------
// STARTER MODAL
// -----------------------------

function checkStarter()
{
    const modal =
    document.getElementById(
        "starter-modal"
    );

    if(!modal)
    {
        return;
    }

    if(gameData.starter === null)
    {
        modal.style.display = "flex";
    }
    else
    {
        modal.style.display = "none";
    }
}

// -----------------------------
// CHOOSE STARTER
// -----------------------------

function chooseStarter(name)
{
    if(gameData.starter !== null)
    {
        return;
    }

    const creature =
    getCreature(name);

    if(!creature)
    {
        alert(
            "Starter not found."
        );

        return;
    }

    gameData.starter =
    creature.name;

    addCreature(
        creature.name
    );

    saveGame();

    checkStarter();

    showCollection();

    alert(
        "You chose " +
        creature.name +
        "!"
    );
}

// =====================================
// RARITY CHANCES
// =====================================

const rarityTable =
[
    {
        rarity:"Legendary",
        chance:2
    },

    {
        rarity:"Epic",
        chance:8
    },

    {
        rarity:"Rare",
        chance:25
    },

    {
        rarity:"Common",
        chance:65
    }
];

// =====================================
// ROLL RARITY
// =====================================

function rollRarity()
{
    const roll =
    Math.random() * 100;

    let total = 0;

    for(const entry of rarityTable)
    {
        total += entry.chance;

        if(roll <= total)
        {
            return entry.rarity;
        }
    }

    return "Common";
}

// =====================================
// OPEN PACK
// =====================================

function openPack(zone)
{
    if(gameData.coins < 10)
    {
        alert("Not enough coins!");
        return;
    }

    gameData.coins -= 10;

    updateCoins();

    const available =
    creatures.filter(

        creature =>

        creature.zone === zone

    );

    if(available.length === 0)
    {
        alert("No creatures found.");
        return;
    }

    const pull =
    chooseCreatureByRarity(
        available
    );

    addCreature(
        pull.name
    );

    saveGame();

    showCard(
        pull
    );
}
// =====================================
// PART 3
// PACK REVEAL
// =====================================

let openedCards = [];
let currentReveal = 0;

// =====================================
// START PACK OPENING
// =====================================

function showPackOpening(cards)
{
    openedCards = cards;
    currentReveal = 0;

    showNextCard();
}

// =====================================
// SHOW NEXT CARD
// =====================================

function showNextCard()
{
    const oldOverlay =
    document.getElementById(
        "pack-overlay"
    );

    if(oldOverlay)
    {
        oldOverlay.remove();
    }

    if(currentReveal >= openedCards.length)
    {
        return;
    }

    const card =
    openedCards[currentReveal];

    const overlay =
    document.createElement("div");

    overlay.id =
    "pack-overlay";

    overlay.innerHTML =
    `
    <div class="reveal-card ${card.rarity.toLowerCase()}">

        <div class="card-art">

            ${card.name}

        </div>

        <h1>

            ${card.name}

        </h1>

        <h3>

            ${card.type}

        </h3>

        <p>

            ${card.rarity}

        </p>

        <div class="battle-stats">

            <div>HP ${card.hp}</div>

            <div>ATK ${card.attack}</div>

            <div>DEF ${card.defense}</div>

            <div>SPD ${card.speed}</div>

        </div>

        <button onclick="nextReveal()">

            Continue

        </button>

    </div>
    `;

    document.body.appendChild(
        overlay
    );
}

// =====================================
// NEXT CARD
// =====================================

function nextReveal()
{
    currentReveal++;

    if(currentReveal >= openedCards.length)
    {
        finishPackOpening();
        return;
    }

    showNextCard();
}

// =====================================
// FINISH PACK
// =====================================

function finishPackOpening()
{
    const overlay =
    document.getElementById(
        "pack-overlay"
    );

    if(overlay)
    {
        overlay.remove();
    }

    openedCards = [];
    currentReveal = 0;
}

// =====================================
// CLOSE IF PLAYER PRESSES ESC
// =====================================

document.addEventListener(
    "keydown",

    function(event)
    {
        if(event.key !== "Escape")
        {
            return;
        }

        const overlay =
        document.getElementById(
            "pack-overlay"
        );

        if(overlay)
        {
            finishPackOpening();
        }
    }
);
// =====================================
// PART 4
// COLLECTION
// =====================================

function showCollection()
{
    const grid =
    document.getElementById(
        "collection-grid"
    );

    if(!grid)
    {
        return;
    }

    grid.innerHTML = "";

    const counts = {};

    for(const name of gameData.collection)
    {
        if(!counts[name])
        {
            counts[name] = 0;
        }

        counts[name]++;
    }

    Object.keys(counts).forEach(

        function(name)
        {
            const creature =
            getCreature(name);

            if(!creature)
            {
                return;
            }

            grid.innerHTML +=
            `
            <div class="collection-card">

                <div class="art">

                    ${creature.name}

                </div>

                <div class="card-info">

                    <h3>${creature.name}</h3>

                    <p>${creature.type}</p>

                    <p>${creature.rarity}</p>

                    <p>x${counts[name]}</p>

                </div>

            </div>
            `;
        }

    );
}

// =====================================
// SAFARI
// =====================================

function enterSafari(zone)
{
    localStorage.setItem(
        "currentZone",
        zone
    );

    window.location.href =
    "battle.html";
}

// =====================================
// XP
// =====================================

function addXP(amount)
{
    gameData.xp += amount;

    while(gameData.xp >= 100)
    {
        gameData.xp -= 100;

        gameData.level++;

        alert(
            "Level Up!\nLevel " +
            gameData.level
        );
    }

    saveGame();
}

// =====================================
// PLAYER INFO
// =====================================

function updatePlayerInfo()
{
    const level =
    document.getElementById(
        "player-level"
    );

    if(level)
    {
        level.textContent =
        gameData.level;
    }

    const xp =
    document.getElementById(
        "player-xp"
    );

    if(xp)
    {
        xp.textContent =
        gameData.xp + "/100";
    }
}

// =====================================
// RANDOM HELPER
// =====================================

function randomChoice(array)
{
    return array[
        Math.floor(
            Math.random() *
            array.length
        )
    ];
}

// =====================================
// STARTUP
// =====================================

window.addEventListener(

    "load",

    function()
    {
        loadGame();

        updateCoins();

        updatePlayerInfo();

        checkStarter();

        showCollection();

        console.log(
            "MythicMon Loaded!"
        );
    }

);
