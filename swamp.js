// =====================================================
// MYTHICMON
// SWAMP CREATURES
// =====================================================

registerCreatures(
[

// =====================================================
// TOADROP
// =====================================================

{

    id:6001,

    name:"Toadrop",

    rarity:"Common",

    type:"Poison",

    zone:"swamp",

    description:
    "A tiny poisonous frog that hops between lily pads.",

    hp:52,

    attack:12,

    defense:10,

    speed:14,

    movementAbility:"double_jump",

    advancedMovementAbility:"water_walk",

    battleAbility:"poison",

    passiveAbility:"explorer",

    evolution:"Venomtoad",

    artwork:"assets/creatures/toadrop.png",

    icon:"assets/icons/toadrop.png",

    cry:"assets/audio/toadrop.mp3"

},



// =====================================================
// MUDCRAWLER
// =====================================================

{

    id:6002,

    name:"Mudcrawler",

    rarity:"Common",

    type:"Poison",

    zone:"swamp",

    description:
    "A sluggish crawler that blends into muddy terrain.",

    hp:74,

    attack:9,

    defense:18,

    speed:5,

    movementAbility:"push_blocks",

    advancedMovementAbility:"break_rocks",

    battleAbility:"shell_armor",

    passiveAbility:"collector",

    evolution:"Bogcrusher",

    artwork:"assets/creatures/mudcrawler.png",

    icon:"assets/icons/mudcrawler.png",

    cry:"assets/audio/mudcrawler.mp3"

},



// =====================================================
// SHADOWVIPER
// =====================================================

{

    id:6003,

    name:"Shadowviper",

    rarity:"Rare",

    type:"Dark",

    zone:"swamp",

    description:
    "A silent hunter that disappears into the mist.",

    hp:60,

    attack:19,

    defense:11,

    speed:18,

    movementAbility:"see_hidden_paths",

    advancedMovementAbility:"teleport",

    battleAbility:"berserk",

    passiveAbility:"lucky",

    evolution:null,

    artwork:"assets/creatures/shadowviper.png",

    icon:"assets/icons/shadowviper.png",

    cry:"assets/audio/shadowviper.mp3"

},



// =====================================================
// BOGSPIDER
// =====================================================

{

    id:6004,

    name:"Bogspider",

    rarity:"Rare",

    type:"Poison",

    zone:"swamp",

    description:
    "A giant swamp spider that spins toxic webs.",

    hp:70,

    attack:18,

    defense:14,

    speed:15,

    movementAbility:"grapple",

    advancedMovementAbility:"wall_climb",

    battleAbility:"poison",

    passiveAbility:"quick_learner",

    evolution:null,

    artwork:"assets/creatures/bogspider.png",

    icon:"assets/icons/bogspider.png",

    cry:"assets/audio/bogspider.mp3"

},



// =====================================================
// TOXIC HYDRA
// =====================================================

{

    id:6005,

    name:"Toxic Hydra",

    rarity:"Epic",

    type:"Poison",

    zone:"swamp",

    description:
    "Each of its heads produces a different venom.",

    hp:128,

    attack:28,

    defense:24,

    speed:12,

    movementAbility:"water_walk",

    advancedMovementAbility:"teleport",

    battleAbility:"poison",

    passiveAbility:"collector",

    evolution:null,

    artwork:"assets/creatures/toxichydra.png",

    icon:"assets/icons/toxichydra.png",

    cry:"assets/audio/toxichydra.mp3"

},



// =====================================================
// SWAMP KING
// =====================================================

{

    id:6006,

    name:"Swamp King",

    rarity:"Legendary",

    type:"Dark",

    zone:"swamp",

    description:
    "The mysterious ruler of every marsh and bog.",

    hp:145,

    attack:31,

    defense:27,

    speed:19,

    movementAbility:"teleport",

    advancedMovementAbility:"see_hidden_paths",

    battleAbility:"life_steal",

    passiveAbility:"shiny_hunter",

    evolution:null,

    artwork:"assets/creatures/swampking.png",

    icon:"assets/icons/swampking.png",

    cry:"assets/audio/swampking.mp3"

},



// =====================================================
// PLAGUE TITAN
// =====================================================

{

    id:6007,

    name:"Plague Titan",

    rarity:"Mythic",

    type:"Cosmic",

    zone:"swamp",

    description:
    "A forgotten giant that commands poisonous storms.",

    hp:185,

    attack:41,

    defense:36,

    speed:15,

    movementAbility:"teleport",

    advancedMovementAbility:"grapple",

    battleAbility:"poison",

    passiveAbility:"shiny_hunter",

    evolution:null,

    artwork:"assets/creatures/plaguetitan.png",

    icon:"assets/icons/plaguetitan.png",

    cry:"assets/audio/plaguetitan.mp3"

}

]);
