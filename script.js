// ======================
// SAVE DATA
// ======================

let gameData =
{
    starter: null,

    coins: 100,

    collection: [],

    unlocked: []
};

// ======================
// CREATURE DATABASE
// ======================

const creatures =
[
    {
        name: "Flaretail",
        rarity: "Starter",
        zone: "ember"
    },

    {
        name: "Aquafang",
        rarity: "Starter",
        zone: "reef"
    },

    {
        name: "Leafhorn",
        rarity: "Starter",
        zone: "forest"
    },

    {
        name: "Sparkit",
        rarity: "Common",
        zone: "forest"
    },

    {
        name: "Mosshell",
        rarity: "Common",
        zone: "forest"
    },

    {
        name: "Thunderclaw",
        rarity: "Rare",
        zone: "ember"
    },

    {
        name: "Crystalback",
        rarity: "Rare",
        zone: "reef"
    }
];

// ======================
// SAVE / LOAD
// ======================

function saveGame()
{
    localStorage.setItem(
        "mythicmon",
        JSON.stringify(gameData)
    );
}

function loadGame()
{
    const save =
    localStorage.getItem(
        "mythicmon"
    );

    if(save)
    {
        gameData =
        JSON.parse(save);
    }

    const modal =
    document.getElementById(
        "starter-modal"
    );

    if(
        modal &&
        !gameData.starter
    )
    {
        modal.style.display =
        "flex";
    }
}

// ======================
// COINS
// ======================

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

// ======================
// STARTER
// ======================

function chooseStarter(name)
{
    if(gameData.starter)
    {
        return;
    }

    gameData.starter =
    name;

    gameData.collection.push(
        name
    );

    gameData.unlocked.push(
        name
    );

    saveGame();

    const modal =
    document.getElementById(
        "starter-modal"
    );

    if(modal)
    {
        modal.style.display =
        "none";
    }

    alert(
        "You chose " +
        name +
        "!"
    );
}

// ======================
// PACK OPENING
// ======================

function openPack(zone)
{
    if(!gameData.starter)
    {
        alert(
            "Choose a starter first!"
        );

        return;
    }

    if(gameData.coins < 10)
    {
        alert(
            "Not enough coins!"
        );

        return;
    }

    const available =
    creatures.filter(
        creature =>
        creature.zone === zone
    );

    if(
        available.length === 0
    )
    {
        return;
    }

    gameData.coins -= 10;

    updateCoins();

    const pull =
    available[
        Math.floor(
            Math.random() *
            available.length
        )
    ];

    gameData.collection.push(
        pull.name
    );

    saveGame();

    alert(
        "You pulled " +
        pull.name +
        "!"
    );
}

// ======================
// SAFARI
// ======================

function enterSafari(zone)
{
    localStorage.setItem(
        "currentZone",
        zone
    );

    window.location.href =
    "battle.html";
}

// ======================
// COLLECTION
// ======================

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

    let html = "";

    gameData.collection.forEach(
        creature =>
        {
            html +=
            `
            <div class="collection-card">

                <div class="art">

                    Art

                </div>

                <div class="card-info">

                    ${creature}

                </div>

            </div>
            `;
        }
    );

    grid.innerHTML =
    html;
}

// ======================
// STARTUP
// ======================

loadGame();

updateCoins();

showCollection();

console.log(
    "SCRIPT LOADED"
);
