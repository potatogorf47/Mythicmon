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
// CREATURES
// ======================

const creatures =
[
    {
        name: "Flaretail",
        rarity: "Starter",
        zone: "ember",
        hp: 55,
        attack: 12
    },

    {
        name: "Aquafang",
        rarity: "Starter",
        zone: "reef",
        hp: 60,
        attack: 10
    },

    {
        name: "Leafhorn",
        rarity: "Starter",
        zone: "forest",
        hp: 65,
        attack: 9
    },

    {
        name: "Sparkit",
        rarity: "Common",
        zone: "forest",
        hp: 40,
        attack: 8
    },

    {
        name: "Mosshell",
        rarity: "Common",
        zone: "forest",
        hp: 45,
        attack: 7
    },

    {
        name: "Thunderclaw",
        rarity: "Rare",
        zone: "ember",
        hp: 70,
        attack: 14
    },

    {
        name: "Crystalback",
        rarity: "Rare",
        zone: "reef",
        hp: 75,
        attack: 12
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
    gameData.starter = name;

    gameData.collection.push(
        name
    );

    gameData.unlocked.push(
        name
    );

    saveGame();

    document.getElementById(
        "starter-modal"
    ).style.display =
    "none";
}

// ======================
// PACK OPENING
// ======================

function openPack(zone)
{
    if(gameData.coins < 10)
    {
        alert(
            "Not enough coins!"
        );
        return;
    }

    const available =
    creatures.filter(
        c =>
        c.zone === zone
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

    showCard(pull);
}

function showCard(card)
{
    const overlay =
    document.getElementById(
        "pack-overlay"
    );

    const packCard =
    document.getElementById(
        "pack-card"
    );

    overlay.style.display =
    "flex";

    packCard.className =
    "reveal-card " +
    card.rarity.toLowerCase();

    packCard.innerHTML =
    `
    <h2>
        ${card.name}
    </h2>

    <p>
        ${card.rarity}
    </p>

    <button
    onclick="
    closePack()
    ">
        Continue
    </button>
    `;
}

function closePack()
{
    document.getElementById(
        "pack-overlay"
    ).style.display =
    "none";
}

// ======================
// STARTUP
// ======================

loadGame();
updateCoins();

console.log(
    "SCRIPT LOADED"
);
