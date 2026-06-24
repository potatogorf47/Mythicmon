// ======================
// GAME DATA
// ======================

let gameData = {
    starter: null,
    coins: 100,
    collection: [],
    unlocked: []
};

// ======================
// CREATURES
// ======================

const creatures = [

{
    name: "Flaretail",
    type: "Flame",
    rarity: "Starter",
    zone: "ember"
},

{
    name: "Aquafang",
    type: "Tide",
    rarity: "Starter",
    zone: "reef"
},

{
    name: "Leafhorn",
    type: "Grove",
    rarity: "Starter",
    zone: "forest"
},

{
    name: "Sparkit",
    type: "Storm",
    rarity: "Common",
    zone: "forest"
},

{
    name: "Mosshell",
    type: "Grove",
    rarity: "Common",
    zone: "forest"
},

{
    name: "Thunderclaw",
    type: "Storm",
    rarity: "Rare",
    zone: "ember"
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
    gameData.starter = name;

    if(
        !gameData.collection.includes(
            name
        )
    )
    {
        gameData.collection.push(name);
    }

    if(
        !gameData.unlocked.includes(
            name
        )
    )
    {
        gameData.unlocked.push(name);
    }

    saveGame();

    alert(
        "You chose " + name + "!"
    );

    location.reload();
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
        creature.zone === zone &&
        gameData.unlocked.includes(
            creature.name
        )
    );

    if(available.length === 0)
    {
        alert(
            "Defeat creatures in this safari first!"
        );
        return;
    }

    gameData.coins -= 10;

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

    updateCoins();

    const output =
    document.getElementById(
        "output"
    );

    if(output)
    {
        output.innerHTML =
        `
        <div class="pull-card">

            <h2>${pull.name}</h2>

            <p>${pull.type}</p>

            <p>${pull.rarity}</p>

        </div>
        `;
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

    grid.innerHTML = html;
}
console.log("END OF FILE REACHED");

// ======================
// STARTUP
// ======================

loadGame();
updateCoins();
showCollection();
