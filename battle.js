// =====================================
// MYTHICMON
// battle.js
// PART 1
// =====================================

// ----------------------------
// Battle Variables
// ----------------------------

let playerCreature = null;
let enemyCreature = null;

let playerHP = 0;
let enemyHP = 0;

let battleOver = false;

// ----------------------------
// Type Effectiveness
// ----------------------------

const typeChart =
{
    Fire:
    {
        Nature:2,
        Water:0.5,
        Ice:2
    },

    Water:
    {
        Fire:2,
        Nature:0.5
    },

    Nature:
    {
        Water:2,
        Fire:0.5
    },

    Electric:
    {
        Water:2
    },

    Ice:
    {
        Nature:2
    }
};

// ----------------------------
// Helper
// ----------------------------

function effectiveness(
    attackType,
    defendType
)
{
    if(
        typeChart[attackType] &&
        typeChart[attackType][defendType]
    )
    {
        return typeChart[attackType][defendType];
    }

    return 1;
}

// ----------------------------
// Start Battle
// ----------------------------

function startBattle()
{
    battleOver = false;

    const zone =
    localStorage.getItem(
        "currentZone"
    );

    playerCreature =
    getCreature(
        gameData.starter
    );

    const options =
    creatures.filter(

        creature =>

        creature.zone === zone &&
        creature.rarity !== "Starter"

    );

    enemyCreature =
    options[
        Math.floor(
            Math.random() *
            options.length
        )
    ];

    playerHP =
    playerCreature.hp;

    enemyHP =
    enemyCreature.hp;

    document.getElementById(
        "player-name"
    ).textContent =
    playerCreature.name;

    document.getElementById(
        "enemy-name"
    ).textContent =
    enemyCreature.name;

    updateHPBars();

    battleLog(
        "A wild " +
        enemyCreature.name +
        " appeared!"
    );
}
// =====================================
// PART 2
// BATTLE ENGINE
// =====================================

// ----------------------------
// Update HP Bars
// ----------------------------

function updateHPBars()
{
    const playerPercent =
    Math.max(
        0,
        (playerHP / playerCreature.hp) * 100
    );

    const enemyPercent =
    Math.max(
        0,
        (enemyHP / enemyCreature.hp) * 100
    );

    document.getElementById(
        "player-hp-fill"
    ).style.width =
    playerPercent + "%";

    document.getElementById(
        "enemy-hp-fill"
    ).style.width =
    enemyPercent + "%";

    document.getElementById(
        "player-hp-text"
    ).textContent =
    Math.max(0, Math.floor(playerHP))
    + " / " +
    playerCreature.hp;

    document.getElementById(
        "enemy-hp-text"
    ).textContent =
    Math.max(0, Math.floor(enemyHP))
    + " / " +
    enemyCreature.hp;
}

// ----------------------------
// Battle Log
// ----------------------------

function battleLog(text)
{
    const log =
    document.getElementById(
        "battle-log"
    );

    if(log)
    {
        log.textContent = text;
    }
}

// ----------------------------
// Player Attack
// ----------------------------

function attackEnemy()
{
    if(battleOver)
    {
        return;
    }

    let damage =
        playerCreature.attack +
        Math.floor(
            Math.random() * 6
        );

    let multiplier =
    effectiveness(
        playerCreature.type,
        enemyCreature.type
    );

    let critical = false;

    if(Math.random() < 0.10)
    {
        damage *= 2;
        critical = true;
    }

    damage =
    Math.floor(
        damage * multiplier
    );

    enemyHP -= damage;

    if(enemyHP < 0)
    {
        enemyHP = 0;
    }

    updateHPBars();

    let message =
        playerCreature.name +
        " dealt " +
        damage +
        " damage!";

    if(critical)
    {
        message +=
        " Critical Hit!";
    }

    if(multiplier > 1)
    {
        message +=
        " Super Effective!";
    }

    if(multiplier < 1)
    {
        message +=
        " Not Very Effective...";
    }

    battleLog(message);

    if(enemyHP <= 0)
    {
        winBattle();
        return;
    }

    setTimeout(
        enemyAttack,
        800
    );
}

// ----------------------------
// Enemy Attack
// ----------------------------

function enemyAttack()
{
    if(battleOver)
    {
        return;
    }

    let damage =
        enemyCreature.attack +
        Math.floor(
            Math.random() * 5
        );

    let multiplier =
    effectiveness(
        enemyCreature.type,
        playerCreature.type
    );

    damage =
    Math.floor(
        damage * multiplier
    );

    playerHP -= damage;

    if(playerHP < 0)
    {
        playerHP = 0;
    }

    updateHPBars();

    let message =
        enemyCreature.name +
        " dealt " +
        damage +
        " damage!";

    if(multiplier > 1)
    {
        message +=
        " Super Effective!";
    }

    if(multiplier < 1)
    {
        message +=
        " Not Very Effective...";
    }

    battleLog(message);

    if(playerHP <= 0)
    {
        loseBattle();
    }
}

// ----------------------------
// Victory
// ----------------------------

function winBattle()
{
    battleOver = true;

    battleLog(
        "You defeated " +
        enemyCreature.name +
        "!"
    );

    addCoins(25);

    addXP(25);

    unlockCreature(
        enemyCreature.name
    );

    addCreature(
        enemyCreature.name
    );

    saveGame();

    setTimeout(

        function()
        {
            alert(
                "Victory!\n+25 Coins\n+25 XP\n" +
                enemyCreature.name +
                " joined your collection!"
            );

            window.location.href =
            "safari.html";
        },

        1000

    );
}

// ----------------------------
// Defeat
// ----------------------------

function loseBattle()
{
    battleOver = true;

    battleLog(
        playerCreature.name +
        " fainted..."
    );

    setTimeout(

        function()
        {
            alert(
                "You Lost!"
            );

            startBattle();
        },

        1000

    );
}
// =====================================
// PART 3
// POLISH + TURN SYSTEM
// =====================================

let playerTurn = true;

// -------------------------------------
// Lock / Unlock Attack Button
// -------------------------------------

function setAttackEnabled(enabled)
{
    const button =
    document.getElementById(
        "attack-button"
    );

    if(button)
    {
        button.disabled = !enabled;
    }
}

// -------------------------------------
// Update HP Bar Colors
// -------------------------------------

function updateHPColors()
{
    const playerFill =
    document.getElementById(
        "player-hp-fill"
    );

    const enemyFill =
    document.getElementById(
        "enemy-hp-fill"
    );

    if(playerFill)
    {
        const percent =
        (playerHP / playerCreature.hp) * 100;

        if(percent > 60)
        {
            playerFill.style.background =
            "#32cd32";
        }
        else if(percent > 30)
        {
            playerFill.style.background =
            "#ffd54f";
        }
        else
        {
            playerFill.style.background =
            "#ff4444";
        }
    }

    if(enemyFill)
    {
        const percent =
        (enemyHP / enemyCreature.hp) * 100;

        if(percent > 60)
        {
            enemyFill.style.background =
            "#32cd32";
        }
        else if(percent > 30)
        {
            enemyFill.style.background =
            "#ffd54f";
        }
        else
        {
            enemyFill.style.background =
            "#ff4444";
        }
    }
}

// -------------------------------------
// Replace updateHPBars()
// -------------------------------------

const oldUpdateHPBars = updateHPBars;

updateHPBars = function()
{
    oldUpdateHPBars();

    updateHPColors();
};

// -------------------------------------
// Replace attackEnemy()
// -------------------------------------

const oldAttackEnemy = attackEnemy;

attackEnemy = function()
{
    if(!playerTurn)
    {
        return;
    }

    playerTurn = false;

    setAttackEnabled(false);

    oldAttackEnemy();
};

// -------------------------------------
// Replace enemyAttack()
// -------------------------------------

const oldEnemyAttack = enemyAttack;

enemyAttack = function()
{
    oldEnemyAttack();

    if(!battleOver)
    {
        playerTurn = true;

        setAttackEnabled(true);
    }
};

// -------------------------------------
// Escape Battle
// -------------------------------------

function escapeBattle()
{
    if(
        confirm(
            "Run back to the Safari?"
        )
    )
    {
        window.location.href =
        "safari.html";
    }
}

// -------------------------------------
// Restart Battle
// -------------------------------------

function restartBattle()
{
    battleOver = false;

    playerTurn = true;

    startBattle();

    setAttackEnabled(true);
}

// -------------------------------------
// Initialize
// -------------------------------------

window.addEventListener(

    "load",

    function()
    {
        startBattle();

        updateHPColors();

        setAttackEnabled(true);
    }

);
