// =====================================================
// MYTHICMON
// ECOSYSTEM ENGINE
// =====================================================

const Ecosystem =
{

    //--------------------------------------------------
    // Population Data
    //--------------------------------------------------

    populations: {},

    //--------------------------------------------------
    // Register Creature
    //--------------------------------------------------

    register(creature)
    {

        const id = creature.speciesID;

        if(!this.populations[id])
        {
            this.populations[id] =
            {

                alive:0,

                defeated:0,

                spawned:0

            };
        }

        this.populations[id].alive++;
        this.populations[id].spawned++;

    },

    //--------------------------------------------------
    // Creature Defeated
    //--------------------------------------------------

    defeated(creature)
    {

        const pop =
        this.populations[creature.speciesID];

        if(!pop)
        {
            return;
        }

        pop.alive =
        Math.max(0, pop.alive - 1);

        pop.defeated++;

    },

    //--------------------------------------------------
    // Creature Despawned
    //--------------------------------------------------

    despawn(creature)
    {

        const pop =
        this.populations[creature.speciesID];

        if(!pop)
        {
            return;
        }

        pop.alive =
        Math.max(0, pop.alive - 1);

    },

    //--------------------------------------------------
    // Population Count
    //--------------------------------------------------

    getPopulation(speciesID)
    {

        return this.populations[speciesID] ??
        {

            alive:0,

            defeated:0,

            spawned:0

        };

    },

    //--------------------------------------------------
    // Spawn Modifier
    //--------------------------------------------------

    getSpawnModifier(speciesID)
    {

        const pop =
        this.getPopulation(speciesID);

        //--------------------------------------------------
        // Prevent Extinction
        //--------------------------------------------------

        if(pop.alive <= 2)
        {
            return 2.0;
        }

        //--------------------------------------------------
        // Overpopulation
        //--------------------------------------------------

        if(pop.alive >= 25)
        {
            return 0.35;
        }

        return 1.0;

    },

    //--------------------------------------------------
    // Daily Reset
    //--------------------------------------------------

    reset()
    {

        for(const id in this.populations)
        {

            this.populations[id].alive = 0;

        }

    },

    //--------------------------------------------------
    // Update
    //--------------------------------------------------

    update()
    {

        // Placeholder

        // Future systems:
        //
        // Migration
        // Seasons
        // Weather
        // Predators
        // Territory
        // Families

    }

};
