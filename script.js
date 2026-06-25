// ======================
// SAVE DATA
// ======================

let currentUser = null;

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
    if(!currentUser)
    {
        return;
    }

    const account =
    JSON.parse(
        localStorage.getItem(
            "account_" + currentUser
        )
    );

    account.gameData =
    gameData;

    localStorage.setItem(
        "account_" + currentUser,
        JSON.stringify(account)
    );
}
function saveCurrentUser()
{
    localStorage.setItem(
        "currentUser",
        currentUser
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
    currentUser =
    localStorage.getItem(
        "currentUser"
    );

    if(!currentUser)
    {
        window.location.href =
        "login.html";

        return;
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
        !gameData.collection.includes(name)
    )
    {
        gameData.collection.push(name);
    }

    if(
        !gameData.unlocked.includes(name)
    )
    {
        gameData.unlocked.push(name);
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
            "No creatures found."
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

    gameData.collection.push(
        pull.name
    );

    saveGame();

    showCard(pull);
}

function showCard(card)
{
    closePack();

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

        <h2>${card.name}</h2>

        <p>${card.rarity}</p>

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
    console.log(
        "Entering safari:",
        zone
    );

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
                    ART
                </div>

                <div class="card-info">
                    ${creature}
                </div>

            </div>
            `;
        }
    );

    grid.innerHTML = html;
}
function createAccount()
{
    const username =
    document.getElementById(
        "username"
    ).value;

    const password =
    document.getElementById(
        "password"
    ).value;

    const account =
    {
        password: password,

        gameData:
        {
            starter: null,
            coins: 100,
            collection: [],
            unlocked: []
        }
    };

    localStorage.setItem(
        "account_" + username,
        JSON.stringify(account)
    );

    alert(
        "Account Created!"
    );
}
function login()
{
    const username =
    document.getElementById(
        "username"
    ).value;

    const password =
    document.getElementById(
        "password"
    ).value;

    const account =
    JSON.parse(
        localStorage.getItem(
            "account_" + username
        )
    );

    if(!account)
    {
        alert(
            "Account not found"
        );

        return;
    }

    if(account.password !== password)
    {
        alert(
            "Incorrect password"
        );

        return;
    }

    currentUser =
    username;

    gameData =
    account.gameData;

    saveCurrentUser();

    window.location.href =
    "index.html";
}

// ======================
// STARTUP
// ======================

loadGame();
updateCoins();
showCollection();

console.log(
    "SCRIPT LOADED SUCCESSFULLY"
);
