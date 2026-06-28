// =====================================================
// MYTHICMON
// TERRITORY MANAGER
// =====================================================

const TerritoryManager =
{

    //--------------------------------------------------
    // Active Territories
    //--------------------------------------------------

    territories: [],

    //--------------------------------------------------
    // Create Territory
    //--------------------------------------------------

    create(data)
    {

        const territory =
        {

            id:
                crypto.randomUUID(),

            speciesID:
                data.speciesID,

            zone:
                data.zone,

            x:
                data.x,

            y:
                data.y,

            radius:
                data.radius ?? 300,

            strength:
                data.strength ?? 100,

            nest:
                data.nest ?? false,

            alpha:
                data.alpha ?? false,

            population:
                data.population ?? 10,

            discovered:
                false

        };

        this.territories.push(territory);

        return territory;

    },

    //--------------------------------------------------
    // Get Territory
    //--------------------------------------------------

    get(id)
    {

        return this.territories.find(

            territory =>

            territory.id === id

        );

    },

    //--------------------------------------------------
    // Territory At Position
    //--------------------------------------------------

    getAt(x, y)
    {

        return this.territories.find(

            territory =>

                Math.hypot(

                    x - territory.x,

                    y - territory.y

                )

                <=

                territory.radius

        );

    },

    //--------------------------------------------------
    // Discover Territory
    //--------------------------------------------------

    discover(id)
    {

        const territory =
        this.get(id);

        if(territory)
        {
            territory.discovered = true;
        }

    },

    //--------------------------------------------------
    // Expand Territory
    //--------------------------------------------------

    expand(id, amount = 5)
    {

        const territory =
        this.get(id);

        if(!territory)
        {
            return;
        }

        territory.radius += amount;

    },

    //--------------------------------------------------
    // Shrink Territory
    //--------------------------------------------------

    shrink(id, amount = 5)
    {

        const territory =
        this.get(id);

        if(!territory)
        {
            return;
        }

        territory.radius =
        Math.max(

            50,

            territory.radius - amount

        );

    },

    //--------------------------------------------------
    // Remove Territory
    //--------------------------------------------------

    remove(id)
    {

        this.territories =
        this.territories.filter(

            territory =>

            territory.id !== id

        );

    }

};
