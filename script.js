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

    if(!gameData.collection)
    {
        gameData.collection = [];
    }

    if(!gameData.unlocked)
    {
        gameData.unlocked = [];
    }

    if(
        gameData.starter &&
        !gameData.collection.includes(
            gameData.starter
        )
    )
    {
        gameData.collection.push(
            gameData.starter
        );
    }

    const starterModal =
    document.getElementById(
        "starter-modal"
    );

    if(
        starterModal &&
        !gameData.starter
    )
    {
        starterModal.style.display =
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

    showCollection();
}

// ======================
// PACK OPENING
// ======================

function openPack(zone)
{
    const available =
    creatures.filter(
        creature =>
        creature.zone === zone
    );

    if(available.length === 0)
    {
        alert(
            "No creatures in this pack."
        );
        return;
    }

    if(gameData.coins < 10)
    {
        alert(
            "Not enough coins."
        );
        return;
    }

    gameData.coins -= 10;

    updateCoins();

    let pulls = [];

    for(let i = 0; i < 5; i++)
    {
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

    showPackOpening(
        pulls
    );
}

function showPackOpening(cards)
{
    let current = 0;

    showCard(
        cards[current]
    );

    window.nextCard =
    function()
    {
        current++;

        if(current >= cards.length)
        {
            const overlay =
            document.getElementById(
                "pack-overlay"
            );

            if(overlay)
            {
                overlay.remove();
            }

            return;
        }

        showCard(
            cards[current]
        );
    };
}

function showCard(card)
{
    const old =
    document.getElementById(
        "pack-overlay"
    );

    if(old)
    {
        old.remove();
    }

    document.body.insertAdjacentHTML(
        "beforeend",

`
<div id="pack-overlay">

    <div class="reveal-card ${card.rarity.toLowerCase()}">

        <h2>${card.name}</h2>

        <p>${card.type}</p>

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

    location.href =
    "battle.html";
}

// ======================
// BATTLE
// ======================

let enemyHP = 50;
let playerHP = 60;
let currentEnemy = "";

function startBattle()
{
    const zone =
    localStorage.getItem(
        "currentZone"
    );

    const zoneCreatures =
    creatures.filter(
        creature =>
        creature.zone === zone
    );

    if(zoneCreatures.length === 0)
    {
        return;
    }

    const enemy =
    zoneCreatures[
        Math.floor(
            Math.random() *
            zoneCreatures.length
        )
    ];

    currentEnemy =
    enemy.name;

    enemyHP = enemy.hp;
    playerHP = 80;

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
<h2>Wild ${enemy.name}</h2>

<p>
Enemy HP:
<span id="enemy-hp">${enemyHP}</span>
</p>

<p>
Your HP:
<span id="player-hp">${playerHP}</span>
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
    Math.max(
        enemyHP,
        0
    );

    document.getElementById(
        "player-hp"
    ).textContent =
    Math.max(
        playerHP,
        0
    );

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
    updateCoins();

    document.getElementById(
        "battle-area"
    ).innerHTML =
`
<h2>Victory!</h2>

<p>${currentEnemy} unlocked!</p>

<p>+25 Coins</p>
`;
}

function loseBattle()
{
    document.getElementById(
        "battle-area"
    ).innerHTML =
`
<h2>You Lost!</h2>

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

            if(!creature)
            {
                return;
            }

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

console.log(
    "SCRIPT LOADED"
);

