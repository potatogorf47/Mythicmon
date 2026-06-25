// ======================================
// MYTHICMON
// SCRIPT.JS
// PART 1
// ======================================

// ======================================
// VERSION
// ======================================

const GAME_VERSION = "2.0";

// ======================================
// PLAYER SAVE
// ======================================

let gameData =
{
    username: "",

    starter: null,

    coins: 100,

    level: 1,

    experience: 0,

    collection: [],

    unlocked: [],

    settings:
    {
        music: true,
        sounds: true
    }
};

// ======================================
// CREATURE DATABASE
// ======================================

const creatures =
[

// ================= STARTERS =================

{
    id:1,
    name:"Flaretail",
    type:"Fire",
    rarity:"Starter",
    zone:"ember",

    hp:55,
    attack:12,
    defense:8,
    speed:10,

    image:"images/flaretail.png",

    description:
    "A playful fire fox."
},

{
    id:2,
    name:"Aquafang",
    type:"Water",
    rarity:"Starter",
    zone:"reef",

    hp:60,
    attack:10,
    defense:11,
    speed:8,

    image:"images/aquafang.png",

    description:
    "A shark pup that controls tides."
},

{
    id:3,
    name:"Leafhorn",
    type:"Nature",
    rarity:"Starter",
    zone:"forest",

    hp:65,
    attack:9,
    defense:12,
    speed:7,

    image:"images/leafhorn.png",

    description:
    "A gentle forest guardian."
},

// ================= COMMON =================

{
    id:4,
    name:"Sparkit",
    type:"Electric",
    rarity:"Common",
    zone:"forest",

    hp:42,
    attack:11,
    defense:6,
    speed:13,

    image:"images/sparkit.png",

    description:
    "Tiny but full of energy."
},

{
    id:5,
    name:"Mosshell",
    type:"Nature",
    rarity:"Common",
    zone:"forest",

    hp:48,
    attack:8,
    defense:13,
    speed:4,

    image:"images/mosshell.png",

    description:
    "Its shell grows living moss."
},

{
    id:6,
    name:"Pebblit",
    type:"Rock",
    rarity:"Common",
    zone:"cavern",

    hp:50,
    attack:9,
    defense:12,
    speed:5,

    image:"images/pebblit.png",

    description:
    "A tiny living boulder."
},

{
    id:7,
    name:"Bubblefin",
    type:"Water",
    rarity:"Common",
    zone:"reef",

    hp:44,
    attack:8,
    defense:7,
    speed:12,

    image:"images/bubblefin.png",

    description:
    "Creates bubbles to escape danger."
},

{
    id:8,
    name:"Ashcub",
    type:"Fire",
    rarity:"Common",
    zone:"ember",

    hp:46,
    attack:10,
    defense:8,
    speed:9,

    image:"images/ashcub.png",

    description:
    "Leaves warm footprints."
},

// ================= RARE =================

{
    id:9,
    name:"Thunderclaw",
    type:"Electric",
    rarity:"Rare",
    zone:"ember",

    hp:70,
    attack:16,
    defense:11,
    speed:15,

    image:"images/thunderclaw.png",

    description:
    "Its claws spark during battle."
},

{
    id:10,
    name:"Crystalback",
    type:"Water",
    rarity:"Rare",
    zone:"reef",

    hp:74,
    attack:13,
    defense:15,
    speed:8,

    image:"images/crystalback.png",

    description:
    "Crystal armor protects it."
},

{
    id:11,
    name:"Stonejaw",
    type:"Rock",
    rarity:"Rare",
    zone:"cavern",

    hp:80,
    attack:15,
    defense:17,
    speed:5,

    image:"images/stonejaw.png",

    description:
    "Can crush granite."
},

{
    id:12,
    name:"Blizzardon",
    type:"Ice",
    rarity:"Rare",
    zone:"tundra",

    hp:78,
    attack:15,
    defense:14,
    speed:11,

    image:"images/blizzardon.png",

    description:
    "Its breath freezes lakes."
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
    speed:18,

    image:"images/shadowfang.png",

    description:"A predator that hunts silently."
},

{
    id:14,
    name:"Venomwing",
    type:"Poison",
    rarity:"Epic",
    zone:"swamp",

    hp:88,
    attack:21,
    defense:13,
    speed:20,

    image:"images/venomwing.png",

    description:"Its wings leave poisonous spores."
},

{
    id:15,
    name:"Voltiger",
    type:"Electric",
    rarity:"Epic",
    zone:"factory",

    hp:92,
    attack:24,
    defense:16,
    speed:19,

    image:"images/voltiger.png",

    description:"Runs faster than lightning."
},

{
    id:16,
    name:"Magmabear",
    type:"Fire",
    rarity:"Epic",
    zone:"volcano",

    hp:104,
    attack:25,
    defense:18,
    speed:11,

    image:"images/magmabear.png",

    description:"Its roar shakes volcanoes."
},

{
    id:17,
    name:"Moonfang",
    type:"Dark",
    rarity:"Epic",
    zone:"temple",

    hp:95,
    attack:22,
    defense:16,
    speed:17,

    image:"images/moonfang.png",

    description:"Only appears beneath a full moon."
},

// ================= LEGENDARY =================

{
    id:18,
    name:"Solarion",
    type:"Light",
    rarity:"Legendary",
    zone:"temple",

    hp:130,
    attack:30,
    defense:22,
    speed:22,

    image:"images/solarion.png",

    description:"Guardian of the ancient sun."
},

{
    id:19,
    name:"Skyserpent",
    type:"Air",
    rarity:"Legendary",
    zone:"sky",

    hp:124,
    attack:31,
    defense:18,
    speed:30,

    image:"images/skyserpent.png",

    description:"Rules the skies."
},

{
    id:20,
    name:"Titanoak",
    type:"Nature",
    rarity:"Legendary",
    zone:"forest",

    hp:145,
    attack:26,
    defense:28,
    speed:9,

    image:"images/titanoak.png",

    description:"Ancient protector of forests."
}

];
// ======================================
// RARITY ODDS
// ======================================

const rarityWeights =
{
    Common:65,

    Rare:25,

    Epic:8,

    Legendary:2
};
function rollRarity()
{
    const roll =
    Math.random() * 100;

    if(roll < 65)
    {
        return "Common";
    }

    if(roll < 90)
    {
        return "Rare";
    }

    if(roll < 98)
    {
        return "Epic";
    }

    return "Legendary";
}
function getRandomCreature(zone, rarity)
{
    const possible =
    creatures.filter(
        creature =>
        creature.zone === zone &&
        creature.rarity === rarity
    );

    if(possible.length === 0)
    {
        return null;
    }

    return possible[
        Math.floor(
            Math.random() *
            possible.length
        )
    ];
}
// ==============================
// PULL A SINGLE CARD
// ==============================

function pullCard(zone, guaranteedRare = false)
{
    let rarity;

    if(guaranteedRare)
    {
        const roll = Math.random() * 100;

        if(roll < 70)
        {
            rarity = "Rare";
        }
        else if(roll < 95)
        {
            rarity = "Epic";
        }
        else
        {
            rarity = "Legendary";
        }
    }
    else
    {
        rarity = rollRarity();
    }

    let card = getRandomCreature(
        zone,
        rarity
    );

    // If no creature exists of that rarity
    // fall back to a Common.

    if(card == null)
    {
        card = getRandomCreature(
            zone,
            "Common"
        );
    }

    return card;
}
// ==============================
// OPEN PACK
// ==============================

function openPack(zone)
{
    if(gameData.coins < 10)
    {
        alert(
            "You need 10 coins."
        );

        return;
    }

    gameData.coins -= 10;

    updateCoins();

    const pack = [];

    // First four cards

    for(let i = 0; i < 4; i++)
    {
        pack.push(
            pullCard(zone)
        );
    }

    // Fifth card guaranteed Rare+

    pack.push(
        pullCard(
            zone,
            true
        )
    );

    // Save cards

    pack.forEach(card =>
    {
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
    });

    saveGame();

    startPackReveal(pack);
}
// ==============================
// PACK REVEAL
// ==============================

let currentPack = [];

let revealIndex = 0;

function startPackReveal(cards)
{
    currentPack = cards;

    revealIndex = 0;

    showCard(
        currentPack[
            revealIndex
        ]
    );
}
function nextCard()
{
    revealIndex++;

    if(
        revealIndex >=
        currentPack.length
    )
    {
        closePack();

        showCollection();

        return;
    }

    showCard(
        currentPack[
            revealIndex
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
        overlay.remove();
    }
}
// ==============================
// SHOW CARD
// ==============================

function showCard(card)
{
    closePack();

    const overlay =
    document.createElement("div");

    overlay.id = "pack-overlay";

    overlay.innerHTML =

    `
    <div class="flash"></div>

    <div class="reveal-card ${card.rarity.toLowerCase()} fade-in">
    ...
    `;
    <div class="pack-opening">

        <div id="booster-pack"
        class="booster-pack">

            <div class="pack-front">

                MythicMon

            </div>

        </div>

    </div>
    `;

    document.body.appendChild(
        overlay
    );

    const pack =
    document.getElementById(
        "booster-pack"
    );

    setTimeout(function()
    {
        pack.classList.add(
            "open"
        );

    },800);

    setTimeout(function()
    {
        overlay.innerHTML =

        `
        <div class="reveal-card ${card.rarity.toLowerCase()} fade-in">

            <div class="card-glow"></div>

            <div class="card-art">

                <img
                src="${card.image}"
                onerror="this.style.display='none'">

            </div>

            <h2>

                ${card.name}

            </h2>

            <h3>

                ${card.type}

            </h3>

            <p>

                ${card.rarity}

            </p>

            <button onclick="nextCard()">

                Continue

            </button>

        </div>
        `;

    },1800);
enableCardTilt();
}

// ======================================
// SAVE GAME
// ======================================

function saveGame()
{
    localStorage.setItem(
        "mythicmon_save",
        JSON.stringify(gameData)
    );
}

// ======================================
// LOAD GAME
// ======================================

function loadGame()
{
    const save =
    localStorage.getItem(
        "mythicmon_save"
    );

    if(save)
    {
        gameData =
        JSON.parse(save);
    }
}

// ======================================
// ACCOUNT
// ======================================

function createAccount(username)
{
    gameData.username = username;

    saveGame();
}

function hasAccount()
{
    return gameData.username !== "";
}

// ======================================
// COINS
// ======================================

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

// ======================================
// FIND CREATURE
// ======================================

function getCreature(name)
{
    return creatures.find(
        creature =>
        creature.name === name
    );
}

// ======================================
// COLLECTION
// ======================================

function addToCollection(name)
{
    gameData.collection.push(name);

    if(
        !gameData.unlocked.includes(name)
    )
    {
        gameData.unlocked.push(name);
    }

    saveGame();
}

// ======================================
// STARTER
// ======================================

function chooseStarter(name)
{
    if(gameData.starter)
    {
        return;
    }

    gameData.starter = name;

    addToCollection(name);

    saveGame();

    const modal =
    document.getElementById(
        "starter-modal"
    );

    if(modal)
    {
        modal.style.display = "none";
    }

    console.log(
        "Starter chosen:",
        name
    );
}

// ======================================
// SHOW STARTER MODAL
// ======================================

function checkStarter()
{
    const modal =
    document.getElementById(
        "starter-modal"
    );

    if(
        modal &&
        gameData.starter === null
    )
    {
        modal.style.display = "flex";
    }
}
function enableCardTilt()
{
    const card =
    document.querySelector(
        ".reveal-card"
    );

    if(!card)
    {
        return;
    }

    card.addEventListener(
        "mousemove",

        function(event)
        {
            const rect =
            card.getBoundingClientRect();

            const x =
            event.clientX -
            rect.left;

            const y =
            event.clientY -
            rect.top;

            const rotateY =
            ((x / rect.width) - .5) * 18;

            const rotateX =
            ((y / rect.height) - .5) * -18;

            card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
            `;
        }
    );

    card.addEventListener(
        "mouseleave",

        function()
        {
            card.style.transform =
            "";
        }
    );
}

// ======================================
// PAGE STARTUP
// ======================================

loadGame();

updateCoins();

checkStarter();

console.log(
    "Script Part 1 Loaded"
);
