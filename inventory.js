// =====================================================
// MYTHICMON
// INVENTORY ENGINE
// =====================================================

const Inventory =
{

    //--------------------------------------------------
    // Item Storage
    //--------------------------------------------------

    categories:
    {

        berries: {},

        evolutionItems: {},

        keys: {},

        crafting: {},

        quest: {},

        cosmetics: {},

        consumables: {},

        materials: {},

        event: {}

    },

    //--------------------------------------------------
    // Add Item
    //--------------------------------------------------

    add(category, itemID, amount = 1)
    {

        if(!this.categories[category])
        {
            console.warn("Unknown category:", category);
            return;
        }

        if(!this.categories[category][itemID])
        {
            this.categories[category][itemID] = 0;
        }

        this.categories[category][itemID] += amount;

    },

    //--------------------------------------------------
    // Remove Item
    //--------------------------------------------------

    remove(category, itemID, amount = 1)
    {

        if(!this.has(category, itemID, amount))
        {
            return false;
        }

        this.categories[category][itemID] -= amount;

        if(this.categories[category][itemID] <= 0)
        {
            delete this.categories[category][itemID];
        }

        return true;

    },

    //--------------------------------------------------
    // Check Item
    //--------------------------------------------------

    has(category, itemID, amount = 1)
    {

        if(!this.categories[category])
        {
            return false;
        }

        return (
            this.categories[category][itemID] || 0
        ) >= amount;

    },

    //--------------------------------------------------
    // Get Quantity
    //--------------------------------------------------

    get(category, itemID)
    {

        if(!this.categories[category])
        {
            return 0;
        }

        return this.categories[category][itemID] || 0;

    },

    //--------------------------------------------------
    // Clear Category
    //--------------------------------------------------

    clearCategory(category)
    {

        if(this.categories[category])
        {
            this.categories[category] = {};
        }

    },

    //--------------------------------------------------
    // Clear Inventory
    //--------------------------------------------------

    clear()
    {

        for(const category in this.categories)
        {
            this.categories[category] = {};
        }

    },

    //--------------------------------------------------
    // Count All Items
    //--------------------------------------------------

    totalItems()
    {

        let total = 0;

        for(const category in this.categories)
        {

            const items =
            this.categories[category];

            for(const id in items)
            {
                total += items[id];
            }

        }

        return total;

    },

    //--------------------------------------------------
    // Export
    //--------------------------------------------------

    export()
    {

        return JSON.parse(
            JSON.stringify(this.categories)
        );

    },

    //--------------------------------------------------
    // Import
    //--------------------------------------------------

    import(data)
    {

        if(!data)
        {
            return;
        }

        this.categories = data;

    }

};
