let gameData = {

    starter: null,

    coins: 100,

    collection: [],

    unlocked: []

};

console.log("SCRIPT LOADED");

const creatures = [

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

function chooseStarter(name)
{
    gameData.starter = name;

    gameData.collection.push(name);

    document.getElementById(
        "starter-selection"
    ).style.display = "none";

    document.getElementById(
        "output"
    ).innerHTML =

    `
    <h2>
        You chose ${name}!
    </h2>
    `;

    saveGame();
}
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

        const starterSection =
        document.getElementById(
            "starter-selection"
        );

        if(starterSection)
        {
            starterSection.style.display =
            "none";
        }

        document.getElementById(
            "output"
        ).innerHTML =

        `
        <h2>
            Welcome Back!
        </h2>

        <p>
            Starter:
            ${gameData.starter}
        </p>
        `;
    }
}
function updateCoins()
{
    document.getElementById(
        "coin-display"
    ).textContent =
    gameData.coins;
}
function openPack(zone)
{
    if(gameData.coins < 10)
    {
        alert("Not enough coins!");
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
            "You haven't unlocked any creatures from this zone yet!"
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

    updateCoins();

    saveGame();

    document.getElementById(
        "output"
    ).innerHTML =

    `
    <div class="pull-card">

        <h2>${pull.name}</h2>

        <p>${pull.type}</p>

        <p>${pull.rarity}</p>

    </div>
    `;
}
function startBattle()
{
    const wildCreatures =
    [
        "Sparkit",
        "Mosshell",
        "Pebbite"
    ];

    const wild =
    wildCreatures[
        Math.floor(
            Math.random() *
            wildCreatures.length
        )
    ];

    document.getElementById(
        "battle-area"
    ).innerHTML =

    `
    <h3>
        Wild ${wild} appeared!
    </h3>

    <button onclick="winBattle('${wild}')">
        Attack
    </button>
    `;
}
function winBattle(creature)
{
    if(
        !gameData.unlocked.includes(
            creature
        )
    )
    {
        gameData.unlocked.push(
            creature
        );
    }

    if(
        !gameData.collection.includes(
            creature
        )
    )
    {
        gameData.collection.push(
            creature
        );
    }

    saveGame();

    document.getElementById(
        "battle-area"
    ).innerHTML =

    `
    <h3>
        You defeated ${creature}!
    </h3>

    <p>
        Added to collection.
    </p>
    `;
}

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

                    Lv 1

                    <br>

                    ${creature}

                </div>

            </div>
            `;
        }
    );

    grid.innerHTML = html;
}


function enterSafari(zone)
{
    localStorage.setItem(
        "currentZone",
        zone
    );

    window.location.href =
    "battle.html";
}
loadGame();
updateCoins();
showCollection();

