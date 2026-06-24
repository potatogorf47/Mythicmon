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
    if(gameData.starter)
    {
        return;
    }

    gameData.starter = name;

    if(
        !gameData.collection.includes(
            name
        )
    )
    {
        gameData.collection.push(
            name
        );
    }

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
        creature =>
        creature.zone === zone
    );

    if(available.length === 0)
    {
        alert(
            "No creatures available."
        );
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

    if(
        !gameData.collection.includes(
            pull.name
        )
    )
    {
        gameData.collection.push(
            pull.name
        );
    }

    saveGame();

    showCard(pull);
}

function showCard(card)
{
    const oldOverlay =
    document.getElementById(
        "pack-overlay"
    );

    if(oldOverlay)
    {
        oldOverlay.remove();
    }

    const overlay =
    document.createElement(
        "div"
    );

    overlay.id =
    "pack-overlay";

    overlay.innerHTML =
    `
    <div class="reveal-card ${card.rarity.toLowerCase()}">

        <div class="card-art">
            ART
        </div>

        <h2>
            ${card.name}
        </h2>

        <p>
            ${card.rarity}
        </p>

        <button onclick="closePack()">
            Continue
        </button>

    </div>
    `;

    document.body.appendChild(
        overlay
    );
}
function closePack()
{
    const overlay =
    document.getElementById(
        "pack-overlay"
    );

    if(overlay)
    {
        overlay.remove();
    }
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
// STARTUP
// ======================

loadGame();
updateCoins();

console.log("BOTTOM OF SCRIPT");

function enterSafari(zone)
{
    console.log("ENTER SAFARI");

    localStorage.setItem(
        "currentZone",
        zone
    );

    window.location.href =
    "battle.html";
}

console.log(typeof enterSafari);
);
