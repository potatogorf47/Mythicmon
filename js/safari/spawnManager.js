// =====================================================
// MYTHICMON
// SPAWN MANAGER
// =====================================================

const SpawnManager =
{

    //--------------------------------------------------
    // Active Creatures
    //--------------------------------------------------

    activeCreatures: [],

    maxCreatures: 30,

    //--------------------------------------------------
    // Update
    //--------------------------------------------------

    update()
    {

        this.removeExpired();

        if(this.activeCreatures.length < this.maxCreatures)
        {
            this.spawnCreature();
        }

    },

    //--------------------------------------------------
    // Spawn Creature
    //--------------------------------------------------

    spawnCreature()
    {

        const zone =
        Safari.currentZone;

        const species =
        this.chooseSpecies(zone);

        if(!species)
        {
            return;
        }

        const creature =
        this.createCreature(species);

        this.activeCreatures.push(creature);

    },

    //--------------------------------------------------
    // Choose Species
    //--------------------------------------------------

    chooseSpecies(zone)
    {

        const pool =
        getCreaturesInZone(zone);

        if(pool.length === 0)
        {
            return null;
        }

        const totalWeight =
        pool.reduce(

            (sum, creature) =>

            sum + (creature.spawnWeight || 1),

            0

        );

        let roll =
        Math.random() * totalWeight;

        for(const creature of pool)
        {

            roll -=
            creature.spawnWeight || 1;

            if(roll <= 0)
            {
                return creature;
            }

        }

        return pool[0];

    },

    //--------------------------------------------------
    // Create Instance
    //--------------------------------------------------

    createCreature(species)
    {

        return {

            instanceID:
                crypto.randomUUID(),

            speciesID:
                species.id,

            level:
                this.rollLevel(species),

            shiny:
                this.rollShiny(),

            alpha:
                this.rollAlpha(),

            x:
                Math.random() * Safari.width,

            y:
                Math.random() * Safari.height,

            spawnTime:
                Date.now(),

            energy:
                100,

            ai:
            {

                state:"idle",

                timer:180,

                directionX:0,

                directionY:0,

                targetDX:0,

                targetDY:0

            }

        };

    },

    //--------------------------------------------------
    // Level
    //--------------------------------------------------

    rollLevel(species)
    {

        const min =
        species.minLevel ?? 1;

        const max =
        species.maxLevel ?? 5;

        return Math.floor(

            Math.random() *

            (max-min+1)

        ) + min;

    },

    //--------------------------------------------------
    // Shiny
    //--------------------------------------------------

    rollShiny()
    {

        return Math.random() < 0.005;

    },

    //--------------------------------------------------
    // Alpha
    //--------------------------------------------------

    rollAlpha()
    {

        return Math.random() < 0.01;

    },

    //--------------------------------------------------
    // Remove Old Creatures
    //--------------------------------------------------

    removeExpired()
    {

        const now =
        Date.now();

        this.activeCreatures =
        this.activeCreatures.filter(

            creature =>

            now -

            creature.spawnTime

            < 30000

        );

    }

};
