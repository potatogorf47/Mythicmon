// =====================================
// MYTHICMON
// script.js
// PART 1
// =====================================

// =====================================
// PLAYER DATA
// =====================================

let gameData =
{
    username: "",

    starter: null,

    coins: 100,

    level: 1,

    xp: 0,

    collection: [],

    unlocked: [],

    settings:
    {
        music: true,
        sfx: true
    }
};

// =====================================
// CREATURE DATABASE
// =====================================

const creatures =
[

// ================= STARTERS =================

{
    id:1,
    name:"Flaretail",
    type:"Fire",
    rarity:"Starter",
    zone:"ember",
    hp:60,
    attack:13,
    defense:9,
    speed:11,
    evolution:"Blazetail",
    image:"images/flaretail.png",
    moves:["Scratch","Ember"]
},

{
    id:2,
    name:"Aquafang",
    type:"Water",
    rarity:"Starter",
    zone:"reef",
    hp:64,
    attack:11,
    defense:11,
    speed:9,
    evolution:"Tsunamaw",
    image:"images/aquafang.png",
    moves:["Splash Bite","Water Gun"]
},

{
    id:3,
    name:"Leafhorn",
    type:"Nature",
    rarity:"Starter",
    zone:"forest",
    hp:68,
    attack:10,
    defense:12,
    speed:8,
    evolution:"Forestitan",
    image:"images/leafhorn.png",
    moves:["Vine Whip","Tackle"]
},

// ================= COMMON =================

{
    id:4,
    name:"Sparkit",
    type:"Electric",
    rarity:"Common",
    zone:"forest",
    hp:42,
    attack:8,
    defense:5,
    speed:15,
    image:"images/sparkit.png",
    moves:["Spark","Scratch"]
},

{
    id:5,
    name:"Mosshell",
    type:"Nature",
    rarity:"Common",
    zone:"forest",
    hp:50,
    attack:7,
    defense:12,
    speed:4,
    image:"images/mosshell.png",
    moves:["Tackle","Leaf Shot"]
},

{
    id:6,
    name:"Pebblit",
    type:"Rock",
    rarity:"Common",
    zone:"cavern",
    hp:58,
    attack:8,
    defense:13,
    speed:3,
    image:"images/pebblit.png",
    moves:["Rock Toss","Tackle"]
},

{
    id:7,
    name:"Bubbloon",
    type:"Water",
    rarity:"Common",
    zone:"reef",
    hp:44,
    attack:8,
    defense:7,
    speed:12,
    image:"images/bubbloon.png",
    moves:["Bubble","Splash"]
},

{
    id:8,
    name:"Snowcub",
    type:"Ice",
    rarity:"Common",
    zone:"tundra",
    hp:48,
    attack:9,
    defense:8,
    speed:10,
    image:"images/snowcub.png",
    moves:["Ice Shard","Scratch"]
},

// ================= RARE =================

{
    id:9,
    name:"Thunderclaw",
    type:"Electric",
    rarity:"Rare",
    zone:"ember",
    hp:75,
    attack:16,
    defense:11,
    speed:16,
    image:"images/thunderclaw.png",
    moves:["Thunder Fang","Scratch"]
},

{
    id:10,
    name:"Crystalback",
    type:"Water",
    rarity:"Rare",
    zone:"reef",
    hp:78,
    attack:15,
    defense:15,
    speed:8,
    image:"images/crystalback.png",
    moves:["Aqua Tail","Bubble Beam"]
},

{
    id:11,
    name:"Stonejaw",
    type:"Rock",
    rarity:"Rare",
    zone:"cavern",
    hp:82,
    attack:17,
    defense:18,
    speed:5,
    image:"images/stonejaw.png",
    moves:["Rock Slide","Bash"]
},

{
    id:12,
    name:"Cloudrake",
    type:"Air",
    rarity:"Rare",
    zone:"sky",
    hp:70,
    attack:16,
    defense:9,
    speed:20,
    image:"images/cloudrake.png",
    moves:["Gust","Sky Dive"]
},

// ================= EPIC =================

{
    id:13,
    name:"Shadowfang",
    type:"Dark",
    rarity:"Epic",
    zone:"cavern",
    hp:96,
    attack:22,
    defense:15,
    speed:20,
    image:"images/shadowfang.png",
    moves:["Shadow Claw","Night Slash"]
},

{
    id:14,
    name:"Magmabear",
    type:"Fire",
    rarity:"Epic",
    zone:"volcano",
    hp:108,
    attack:24,
    defense:18,
    speed:10,
    image:"images/magmabear.png",
    moves:["Fire Punch","Lava Burst"]
},

{
    id:15,
    name:"Venomwing",
    type:"Poison",
    rarity:"Epic",
    zone:"swamp",
    hp:94,
    attack:20,
    defense:14,
    speed:22,
    image:"images/venomwing.png",
    moves:["Poison Sting","Toxic Slash"]
},

{
    id:16,
    name:"Voltiger",
    type:"Electric",
    rarity:"Epic",
    zone:"factory",
    hp:100,
    attack:23,
    defense:16,
    speed:18,
    image:"images/voltiger.png",
    moves:["Thunder Crash","Spark"]
},

// ================= LEGENDARY =================

{
    id:17,
    name:"Skyserpent",
    type:"Air",
    rarity:"Legendary",
    zone:"sky",
    hp:140,
    attack:32,
    defense:22,
    speed:26,
    image:"images/skyserpent.png",
    moves:["Hurricane","Dragon Wind"]
},

{
    id:18,
    name:"Solarion",
    type:"Light",
    rarity:"Legendary",
    zone:"temple",
    hp:145,
    attack:34,
    defense:24,
    speed:21,
    image:"images/solarion.png",
    moves:["Solar Beam","Light Burst"]
},

{
    id:19,
    name:"Lunaclaw",
    type:"Dark",
    rarity:"Legendary",
    zone:"temple",
    hp:142,
    attack:33,
    defense:22,
    speed:23,
    image:"images/lunaclaw.png",
    moves:["Moon Slash","Dark Pulse"]
},

{
    id:20,
    name:"Frost Titan",
    type:"Ice",
    rarity:"Legendary",
    zone:"tundra",
    hp:155,
    attack:30,
    defense:28,
    speed:12,
    image:"images/frosttitan.png",
    moves:["Blizzard","Ice Hammer"]
}

];

// =====================================
// RARITY WEIGHTS
// =====================================

const rarityWeights =
{
    Common:60,
    Rare:25,
    Epic:10,
    Legendary:4,
    Starter:1
};

// =====================================
// SAVE / LOAD
// =====================================

function saveGame()
{
    localStorage.setItem(
        "mythicmonSave",
        JSON.stringify(gameData)
    );
}

function loadGame()
{
    const save =
    localStorage.getItem(
        "mythicmonSave"
    );

    if(save)
    {
        gameData =
        JSON.parse(save);
    }
}

// =====================================
// HELPER FUNCTIONS
// =====================================

function getCreature(name)
{
    return creatures.find(
        c => c.name === name
    );
}

function randomNumber(min,max)
{
    return Math.floor(
        Math.random() *
        (max-min+1)
    ) + min;
}

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

console.log("Script Part 1 Loaded");
// =====================================
// PART 2
// STARTERS, PACKS & COLLECTION
// =====================================

// =====================================
// STARTER SELECTION
// =====================================

function chooseStarter(name)
{
    if(gameData.starter !== null)
    {
        return;
    }

    const starter =
    getCreature(name);

    if(!starter)
    {
        return;
    }

    gameData.starter = name;

    gameData.collection.push(name);

    gameData.unlocked.push(name);

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

    alert(
        "You chose " + name + "!"
    );
}

function checkStarter()
{
    const modal =
    document.getElementById(
        "starter-modal"
    );

    if(!modal)
    {
        return;
    }

    if(gameData.starter === null)
    {
        modal.style.display =
        "flex";
    }
    else
    {
        modal.style.display =
        "none";
    }
}

// =====================================
// WEIGHTED RARITY ROLL
// =====================================

function rollRarity()
{
    const roll =
    Math.random() * 100;

    if(roll < 60)
    {
        return "Common";
    }

    if(roll < 85)
    {
        return "Rare";
    }

    if(roll < 95)
    {
        return "Epic";
    }

    if(roll < 99)
    {
        return "Legendary";
    }

    return "Starter";
}

// =====================================
// RANDOM CREATURE
// =====================================

function getRandomCreature(zone)
{
    let rarity =
    rollRarity();

    let pool =
    creatures.filter(
        creature =>
        creature.zone === zone &&
        creature.rarity === rarity
    );

    if(pool.length === 0)
    {
        pool =
        creatures.filter(
            creature =>
            creature.zone === zone
        );
    }

    return pool[
        randomNumber(
            0,
            pool.length - 1
        )
    ];
}

// =====================================
// OPEN PACK
// =====================================

function openPack(zone)
{
    if(gameData.coins < 10)
    {
        alert(
            "You don't have enough coins."
        );

        return;
    }

    gameData.coins -= 10;

    updateCoins();

    let pulls = [];

    for(let i = 0; i < 5; i++)
    {
        const card =
        getRandomCreature(zone);

        pulls.push(card);

        gameData.collection.push(
            card.name
        );

        if(
            !gameData.unlocked.includes(
                card.name
            )
        )
        {
            gameData.unlocked.push(
                card.name
            );
        }
    }

    saveGame();

    revealCards(pulls);
}

// =====================================
// CARD REVEAL
// =====================================

let currentPack = [];

let currentReveal = 0;

function revealCards(cards)
{
    currentPack = cards;

    currentReveal = 0;

    showCard(
        currentPack[0]
    );
}

function showCard(card)
{
    let overlay =
    document.getElementById(
        "pack-overlay"
    );

    if(!overlay)
    {
        overlay =
        document.createElement(
            "div"
        );

        overlay.id =
        "pack-overlay";

        document.body.appendChild(
            overlay
        );
    }

    overlay.style.display =
    "flex";

    overlay.innerHTML =
    `
    <div class="reveal-card ${card.rarity.toLowerCase()}">

        <div class="card-art">

            <img
            src="${card.image}"
            onerror="this.style.display='none'">

        </div>

        <h2>
            ${card.name}
        </h2>

        <p>
            ${card.type}
        </p>

        <h3>
            ${card.rarity}
        </h3>

        <button onclick="nextReveal()">

            Next Card

        </button>

    </div>
    `;
}

function nextReveal()
{
    currentReveal++;

    if(
        currentReveal >=
        currentPack.length
    )
    {
        closePack();

        return;
    }

    showCard(
        currentPack[
            currentReveal
        ]
    );
}

function closePack()
{
    const overlay =
    document.getElementById(
        "pack-overlay"
    );

    if(overlay)
    {
        overlay.style.display =
        "none";
    }
}

// =====================================
// COLLECTION
// =====================================

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
        name =>
        {
            const creature =
            getCreature(name);

            if(!creature)
            {
                return;
            }

            grid.innerHTML +=
            `
            <div class="collection-card">

                <div class="art">

                    <img
                    src="${creature.image}"
                    onerror="this.style.display='none'">

                </div>

                <div class="card-info">

                    <h2>
                        ${creature.name}
                    </h2>

                    <p>
                        ${creature.type}
                    </p>

                    <p>
                        ${creature.rarity}
                    </p>

                </div>

            </div>
            `;
        }
    );
}

console.log("Script Part 2 Loaded");
// =====================================
// PART 3
// SAFARI & GAME PROGRESSION
// =====================================

// =====================================
// ENTER SAFARI
// =====================================

function enterSafari(zone)
{
    if(gameData.starter === null)
    {
        alert(
            "Choose a starter first!"
        );

        return;
    }

    localStorage.setItem(
        "currentZone",
        zone
    );

    window.location.href =
    "battle.html";
}

// =====================================
// WIN BATTLE
// =====================================

function battleReward(creatureName)
{
    const creature =
    getCreature(creatureName);

    if(!creature)
    {
        return;
    }

    gameData.coins += 25;

    if(
        !gameData.unlocked.includes(
            creature.name
        )
    )
    {
        gameData.unlocked.push(
            creature.name
        );
    }

    if(
        !gameData.collection.includes(
            creature.name
        )
    )
    {
        gameData.collection.push(
            creature.name
        );
    }

    saveGame();

    updateCoins();

    showCollection();
}

// =====================================
// PLAYER INFO
// =====================================

function getStarter()
{
    if(
        gameData.starter === null
    )
    {
        return null;
    }

    return getCreature(
        gameData.starter
    );
}

// =====================================
// RESET SAVE
// =====================================

function resetGame()
{
    if(
        !confirm(
            "Delete your save?"
        )
    )
    {
        return;
    }

    localStorage.removeItem(
        SAVE_KEY
    );

    location.reload();
}

// =====================================
// DEBUG
// =====================================

function giveCoins(amount)
{
    gameData.coins += amount;

    saveGame();

    updateCoins();
}

function unlockEverything()
{
    creatures.forEach(
        creature =>
        {
            if(
                !gameData.unlocked.includes(
                    creature.name
                )
            )
            {
                gameData.unlocked.push(
                    creature.name
                );
            }
        }
    );

    saveGame();
}

// =====================================
// STARTUP
// =====================================

window.addEventListener(
    "DOMContentLoaded",

    function()
    {
        loadGame();

        updateCoins();

        checkStarter();

        showCollection();

        console.log(
            "MythicMon Loaded Successfully"
        );
    }
);

console.log(
    "Script Part 3 Loaded"
);
