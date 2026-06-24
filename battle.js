// ======================
// BATTLE DATA
// ======================

let playerCreature;
let enemyCreature;

let playerHP;
let enemyHP;

// ======================
// START BATTLE
// ======================

function startBattle()
{
    loadGame();

    const zone =
    localStorage.getItem(
        "currentZone"
    );

    const enemies =
    creatures.filter(
        c => c.zone === zone
    );

    enemyCreature =
    enemies[
        Math.floor(
            Math.random() *
            enemies.length
        )
    ];

    playerCreature =
    creatures.find(
        c =>
        c.name === gameData.starter
    );

    playerHP =
    playerCreature.hp;

    enemyHP =
    enemyCreature.hp;

    updateBattleScreen();
}

// ======================
// UPDATE SCREEN
// ======================

function updateBattleScreen()
{
    document.getElementById(
        "enemy-name"
    ).textContent =
    enemyCreature.name;

    document.getElementById(
        "player-name"
    ).textContent =
    playerCreature.name;

    document.getElementById(
        "enemy-hp"
    ).style.width =
    (enemyHP /
    enemyCreature.hp) *
    100 + "%";

    document.getElementById(
        "player-hp"
    ).style.width =
    (playerHP /
    playerCreature.hp) *
    100 + "%";

    document.getElementById(
        "battle-log"
    ).innerHTML =
    `
    A wild
    ${enemyCreature.name}
    appeared!
    `;
}

// ======================
// ATTACK
// ======================

function attack()
{
    enemyHP -=
    playerCreature.attack;

    if(enemyHP <= 0)
    {
        winBattle();
        return;
    }

    playerHP -=
    enemyCreature.attack;

    if(playerHP <= 0)
    {
        loseBattle();
        return;
    }

    document.getElementById(
        "battle-log"
    ).innerHTML =
    `
    ${playerCreature.name}
    attacked!

    ${enemyCreature.name}
    fought back!
    `;

    updateBattleScreen();
}

// ======================
// WIN
// ======================

function winBattle()
{
    if(
        !gameData.unlocked.includes(
            enemyCreature.name
        )
    )
    {
        gameData.unlocked.push(
            enemyCreature.name
        );
    }

    gameData.coins += 25;

    saveGame();

    document.getElementById(
        "battle-log"
    ).innerHTML =
    `
    <h2>
        Victory!
    </h2>

    <p>
        ${enemyCreature.name}
        unlocked!
    </p>

    <p>
        +25 Coins
    </p>

    <button
    onclick="
    location.href=
    'safari.html'
    ">
        Back
    </button>
    `;
}

// ======================
// LOSE
// ======================

function loseBattle()
{
    document.getElementById(
        "battle-log"
    ).innerHTML =
    `
    <h2>
        Defeat
    </h2>

    <button
    onclick="
    startBattle()
    ">
        Try Again
    </button>
    `;
}
