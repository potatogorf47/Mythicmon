// =====================================================
// MYTHICMON
// COLLECTION ENGINE
// =====================================================

const Collection =
{

    //--------------------------------------------------
    // Creature Instances
    //--------------------------------------------------

    creatures: [],

    //--------------------------------------------------
    // Add Creature
    //--------------------------------------------------

    add(creature)
    {
        this.creatures.push(creature);

        return creature;
    },

    //--------------------------------------------------
    // Remove Creature
    //--------------------------------------------------

    remove(instanceID)
    {
        this.creatures =
        this.creatures.filter(
            creature =>
            creature.instanceID !== instanceID
        );
    },

    //--------------------------------------------------
    // Get Creature
    //--------------------------------------------------

    get(instanceID)
    {
        return this.creatures.find(
            creature =>
            creature.instanceID === instanceID
        );
    },

    //--------------------------------------------------
    // Get All
    //--------------------------------------------------

    getAll()
    {
        return this.creatures;
    },

    //--------------------------------------------------
    // Creature Count
    //--------------------------------------------------

    count()
    {
        return this.creatures.length;
    },

    //--------------------------------------------------
    // Favorites
    //--------------------------------------------------

    getFavorites()
    {
        return this.creatures.filter(
            creature =>
            creature.favorite
        );
    },

    //--------------------------------------------------
    // Search By Species
    //--------------------------------------------------

    bySpecies(speciesID)
    {
        return this.creatures.filter(
            creature =>
            creature.speciesID === speciesID
        );
    },

    //--------------------------------------------------
    // Search By Rarity
    //--------------------------------------------------

    byRarity(rarity)
    {
        return this.creatures.filter(
            creature =>
            creature.rarity === rarity
        );
    },

    //--------------------------------------------------
    // Search By Form
    //--------------------------------------------------

    byForm(form)
    {
        return this.creatures.filter(
            creature =>
            creature.form === form
        );
    },

    //--------------------------------------------------
    // Search By Zone
    //--------------------------------------------------

    byZone(zone)
    {
        return this.creatures.filter(
            creature =>
            creature.zone === zone
        );
    },

    //--------------------------------------------------
    // Highest Level
    //--------------------------------------------------

    highestLevel()
    {
        return [...this.creatures].sort(
            (a,b)=>
            b.level-a.level
        );
    },

    //--------------------------------------------------
    // Highest Mastery
    //--------------------------------------------------

    highestMastery()
    {
        return [...this.creatures].sort(
            (a,b)=>
            b.mastery-a.mastery
        );
    },

    //--------------------------------------------------
    // Sort Alphabetically
    //--------------------------------------------------

    alphabetical()
    {
        return [...this.creatures].sort(
            (a,b)=>
            a.name.localeCompare(b.name)
        );
    },

    //--------------------------------------------------
    // Sort By Capture Date
    //--------------------------------------------------

    newest()
    {
        return [...this.creatures].sort(
            (a,b)=>
            b.caughtDate-a.caughtDate
        );
    },

    //--------------------------------------------------
    // Oldest
    //--------------------------------------------------

    oldest()
    {
        return [...this.creatures].sort(
            (a,b)=>
            a.caughtDate-b.caughtDate
        );
    }

};
