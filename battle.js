console.log("BATTLE JS START");
let playerHP = 100;
let enemyHP = 100;

let currentEnemy = null;


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
console.log("BATTLE JS END");

window.onload =
function()
{
    startBattle();
};
window.attackEnemy = attackEnemy;
window.startBattle = startBattle;
