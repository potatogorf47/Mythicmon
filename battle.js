let playerHP = 100;
let playerMaxHP = 100;

let enemyHP = 100;
let enemyMaxHP = 100;
let currentEnemy = null;
let starterCreature = null;


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
    const save =
    JSON.parse(
        localStorage.getItem("mythicmon")
    );

    starterCreature =
    creatures.find(
        c => c.name === save.starter
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
    enemyMaxHP = currentEnemy.hp;
    enemyHP = enemyMaxHP;

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
    enemyHP + "/" + enemyMaxHP;

    document.getElementById(
        "player-hp-text"
    ).textContent =
    playerHP + "/" + playerMaxHP;

    const enemyPercent =
    (enemyHP / enemyMaxHP) * 100;

    const playerPercent =
    (playerHP / playerMaxHP) * 100;

    document.getElementById(
        "enemy-hp-fill"
    ).style.width =
    enemyPercent + "%";

    document.getElementById(
        "player-hp-fill"
    ).style.width =
    playerPercent + "%";
}

function attackEnemy()
{
    const playerDamage =
    Math.floor(
        Math.random() * 5
    ) +
    starterCreature.attack;

    enemyHP -= playerDamage;

    if(enemyHP <= 0)
    {
        winBattle();
        return;
    }

    const enemyDamage =
    Math.floor(
        Math.random() * 4
    ) +
    currentEnemy.attack;

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
