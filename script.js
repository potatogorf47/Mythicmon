let gameData = {

    starter: null,

    coins: 100,

    collection: []


};

console.log("SCRIPT LOADED");

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
function openPack()
{
    if(gameData.starter === null)
    {
        alert(
            "Choose a starter first!"
        );

        return;
    }

    document.getElementById(
        "output"
    ).innerHTML =

    `
    <h2>
        Pack Opened!
    </h2>

    <p>
        More coming soon...
    </p>
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
    let html = "";

    gameData.collection.forEach(
        creature =>
        {
            html +=
            `
            <div class="card">

                ${creature}

            </div>
            `;
        }
    );

    document.getElementById(
        "collection-list"
    ).innerHTML =
    html;
}
loadGame();
updateCoins();

