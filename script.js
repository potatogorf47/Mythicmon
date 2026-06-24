// ======================
// GAME DATA
// ======================

let gameData =
{
    starter: null,

    coins: 100,

    collection: [],

    unlocked: [],

    level: 1
};

// ======================
// CREATURES
// ======================

const creatures =
[
    {
        name: "Flaretail",
        type: "Fire",
        rarity: "Starter",
        zone: "ember",
        hp: 55,
        attack: 12
    },

    {
        name: "Aquafang",
        type: "Water",
        rarity: "Starter",
        zone: "reef",
        hp: 60,
        attack: 10
    },

    {
        name: "Leafhorn",
        type: "Nature",
        rarity: "Starter",
        zone: "forest",
        hp: 65,
        attack: 9
    },

    {
        name: "Sparkit",
        type: "Electric",
        rarity: "Common",
        zone: "forest",
        hp: 40,
        attack: 8
    },

    {
        name: "Mosshell",
        type: "Nature",
        rarity: "Common",
        zone: "forest",
        hp: 45,
        attack: 7
    },

    {
        name: "Thunderclaw",
        type: "Electric",
        rarity: "Rare",
        zone: "ember",
        hp: 70,
        attack: 14
    },

    {
        name: "Crystalback",
        type: "Water",
        rarity: "Rare",
        zone: "reef",
        hp: 75,
        attack: 12
    },

    {
        name: "Shadowfang",
        type: "Dark",
        rarity: "Epic",
        zone: "cavern",
        hp: 90,
        attack: 18
    },

    {
        name: "Stonejaw",
        type: "Rock",
        rarity: "Common",
        zone: "cavern",
        hp: 65,
        attack: 9
    },

    {
        name: "Magmabear",
        type: "Fire",
        rarity: "Epic",
        zone: "volcano",
        hp: 95,
        attack: 20
    },

    {
        name: "Blizzardon",
        type: "Ice",
        rarity: "Rare",
        zone: "tundra",
        hp: 80,
        attack: 15
    },

    {
        name: "Frosthorn",
        type: "Ice",
        rarity: "Common",
        zone: "tundra",
        hp: 60,
        attack: 10
    },

    {
        name: "Venomwing",
        type: "Poison",
        rarity: "Epic",
        zone: "swamp",
        hp: 85,
        attack: 17
    },

    {
        name: "Bogtoad",
        type: "Poison",
        rarity: "Common",
        zone: "swamp",
        hp: 55,
        attack: 8
    },

    {
        name: "Skyserpent",
        type: "Air",
        rarity: "Legendary",
        zone: "sky",
        hp: 120,
        attack: 28
    },

    {
        name: "Cloudrake",
        type: "Air",
        rarity: "Rare",
        zone: "sky",
        hp: 75,
        attack: 14
    },

    {
        name: "Solarion",
        type: "Light",
        rarity: "Legendary",
        zone: "temple",
        hp: 130,
        attack: 30
    },

    {
        name: "Moonfang",
        type: "Dark",
        rarity: "Epic",
        zone: "temple",
        hp: 95,
        attack: 19
    },

    {
        name: "Ironhide",
        type: "Steel",
        rarity: "Rare",
        zone: "factory",
        hp: 90,
        attack: 13
    },

    {
        name: "Voltiger",
        type: "Electric",
        rarity: "Epic",
        zone: "factory",
        hp: 100,
        attack: 22
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
    if(!gameData.starter)
{
    document.getElementById(
        "starter-modal"
    ).style.display =
    "flex";
}
    const save =
    localStorage.getItem(
        "mythicmon"
    );

    if(save)
    {
        gameData =
        JSON.parse(save);

        if(!gameData.unlocked)
        {
            gameData.unlocked = [];
        }
    }
}

// ======================
// COINS
// ======================

function updateCoins()
{
    const coinDisplay =
    document.getElementById(
        "coin-display"
    );

    if(coinDisplay)
    {
        coinDisplay.textContent =
        gameData.coins;
    }
}

// ======================
// STARTER SELECTION
// ======================

function chooseStarter(name)
{
    if(gameData.starter)
    {
        return;
    }

    gameData.starter = name;

    gameData.collection.push(name);

    gameData.unlocked.push(name);

    saveGame();

    document.getElementById(
        "starter-modal"
    ).style.display = "none";
}

// ======================
// PACK OPENING
// ======================

function openPack(zone)
{
    if(gameData.coins < 10)
    {
        alert("Not enough coins");
        return;
    }

    gameData.coins -= 10;

    let pulls = [];

    for(let i = 0; i < 5; i++)
    {
        const available =
        creatures.filter(
            c =>
            c.zone === zone &&
            gameData.unlocked.includes(
                c.name
            )
        );

        const pull =
        available[
            Math.floor(
                Math.random() *
                available.length
            )
        ];

        pulls.push(pull);

        gameData.collection.push(
            pull.name
        );
    }

    saveGame();

    showPackOpening(pulls);
}

function showPackOpening(cards)
{
    let current = 0;

    showCard(cards[current]);

    window.nextCard =
    function()
    {
        current++;

        if(current >= cards.length)
        {
            location.reload();
            return;
        }

        showCard(cards[current]);
    };
}
function showCard(card)
{
    document.body.insertAdjacentHTML(
        "beforeend",

`
<div id="pack-overlay">

<div class="reveal-card ${card.rarity.toLowerCase()}">

<h2>${card.name}</h2>

<p>${card.rarity}</p>

<button onclick="nextCard()">
Next
</button>

</div>

</div>
`
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
// BATTLE SYSTEM
// ======================

let enemyHP = 50;
let playerHP = 60;
let currentEnemy = "";

function startBattle()
{
    enemyHP = 50;
    playerHP = 60;

    const zone =
    localStorage.getItem(
        "currentZone"
    );

    const zoneCreatures =
    creatures.filter(
        creature =>
        creature.zone === zone
    );

    const randomCreature =
    zoneCreatures[
        Math.floor(
            Math.random() *
            zoneCreatures.length
        )
    ];

    currentEnemy =
    randomCreature.name;

    const battleArea =
    document.getElementById(
        "battle-area"
    );

    if(!battleArea)
    {
        return;
    }

    battleArea.innerHTML =
    `
    <h2>
        Wild ${currentEnemy}
    </h2>

    <p>
        Enemy HP:
        <span id="enemy-hp">
            ${enemyHP}
        </span>
    </p>

    <p>
        Your HP:
        <span id="player-hp">
            ${playerHP}
        </span>
    </p>

    <button onclick="attackEnemy()">
        Attack
    </button>
    `;
}

function attackEnemy()
{
    enemyHP -= 15;

    playerHP -= 8;

    document.getElementById(
        "enemy-hp"
    ).textContent =
    enemyHP;

    document.getElementById(
        "player-hp"
    ).textContent =
    playerHP;

    if(enemyHP <= 0)
    {
        winBattle();
        return;
    }

    if(playerHP <= 0)
    {
        loseBattle();
    }
}

function winBattle()
{
    gameData.coins += 25;

    if(
        !gameData.unlocked.includes(
            currentEnemy
        )
    )
    {
        gameData.unlocked.push(
            currentEnemy
        );
    }

    if(
        !gameData.collection.includes(
            currentEnemy
        )
    )
    {
        gameData.collection.push(
            currentEnemy
        );
    }

    saveGame();

    document.getElementById(
        "battle-area"
    ).innerHTML =
    `
    <h2>
        Victory!
    </h2>

    <p>
        ${currentEnemy}
        unlocked!
    </p>

    <p>
        +25 Coins
    </p>
    `;
}

function loseBattle()
{
    document.getElementById(
        "battle-area"
    ).innerHTML =
    `
    <h2>
        You Lost!
    </h2>

    <button onclick="startBattle()">
        Try Again
    </button>
    `;
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

    grid.innerHTML = "";

    gameData.collection.forEach(
        creatureName =>
        {
            const creature =
            creatures.find(
                c =>
                c.name === creatureName
            );

            grid.innerHTML +=
            `
            <div class="collection-card">

                <div class="art">
                    Art
                </div>

                <div>
                    ${creature.name}
                </div>

                <div>
                    ${creature.rarity}
                </div>

            </div>
            `;
        }
    );
}

// ======================
// STARTUP
// ======================

loadGame();
updateCoins();
showCollection();
console.log("END OF FILE REACHED");

