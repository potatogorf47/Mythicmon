let playerHP = 100;
let enemyHP = 100;

let currentEnemy = null;

const creatures =
[
    {
        name:"Sparkit",
        zone:"forest",
        hp:40,
        attack:8
    },
    {
        name:"Mosshell",
        zone:"forest",
        hp:45,
        attack:7
    },
    {
        name:"Thunderclaw",
        zone:"ember",
        hp:70,
        attack:14
    },
    {
        name:"Crystalback",
        zone:"reef",
        hp:75,
        attack:12
    }
];

function startBattle()
{
    const zone =
    localStorage.getItem(
        "currentZone"
    );

    const options =
    creatures.filter(
        c => c.zone === zone
    );

    if(options.length === 0)
    {
        return;
    }

    currentEnemy =
    options[
        Math.floor(
            Math.random() *
            options.length
        )
    ];

    playerHP = 100;
    enemyHP = currentEnemy.hp;

    document.getElementById(
        "enemy-name"
    ).textContent =
    currentEnemy.name;

    updateHP();
}

function updateHP()
{
    document.getElementById(
        "enemy-hp-text"
    ).textContent =
    enemyHP;

    document.getElementById(
        "player-hp-text"
    ).textContent =
    playerHP;

    document.getElementById(
        "enemy-hp-fill"
    ).style.width =
    enemyHP + "%";

    document.getElementById(
        "player-hp-fill"
    ).style.width =
    playerHP + "%";
}

function attackEnemy()
{
    const playerDamage =
    Math.floor(
        Math.random() * 12
    ) + 8;

    enemyHP -= playerDamage;

    if(enemyHP <= 0)
    {
        winBattle();
        return;
    }

    const enemyDamage =
    Math.floor(
        Math.random() * 8
    ) + 4;

    playerHP -= enemyDamage;

    updateHP();

    if(playerHP <= 0)
    {
        loseBattle();
    }
}

function winBattle()
{
    alert(
        "You defeated " +
        currentEnemy.name
    );

    window.location.href =
    "safari.html";
}

function loseBattle()
{
    alert(
        "You were defeated!"
    );

    startBattle();
}

window.onload =
function()
{
    startBattle();
};
