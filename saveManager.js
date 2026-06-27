// =====================================================
// MYTHICMON
// SAVE MANAGER
// =====================================================

const SaveManager =
{

    //--------------------------------------------------
    // Settings
    //--------------------------------------------------

    SAVE_KEY: "mythicmon_save",

    BACKUP_KEY: "mythicmon_backup",

    VERSION: "0.1.0",

    //--------------------------------------------------
    // Create Save Object
    //--------------------------------------------------

    createSave()
    {

        return {

            version: this.VERSION,

            timestamp: Date.now(),

            player: structuredClone(Player),

            collection: Collection.export(),

            inventory: Inventory.export()

        };

    },

    //--------------------------------------------------
    // Save Game
    //--------------------------------------------------

    save()
    {

        try
        {

            const saveData =
            this.createSave();

            localStorage.setItem(

                this.SAVE_KEY,

                JSON.stringify(saveData)

            );

            console.log(
                "Game Saved"
            );

            return true;

        }

        catch(error)
        {

            console.error(error);

            return false;

        }

    },

    //--------------------------------------------------
    // Backup Save
    //--------------------------------------------------

    backup()
    {

        try
        {

            const saveData =
            this.createSave();

            localStorage.setItem(

                this.BACKUP_KEY,

                JSON.stringify(saveData)

            );

        }

        catch(error)
        {

            console.error(error);

        }

    },

    //--------------------------------------------------
    // Load Game
    //--------------------------------------------------

    load()
    {

        const raw =
        localStorage.getItem(

            this.SAVE_KEY

        );

        if(!raw)
        {
            return false;
        }

        try
        {

            const save =
            JSON.parse(raw);

            this.import(save);

            console.log(
                "Game Loaded"
            );

            return true;

        }

        catch(error)
        {

            console.error(error);

            return false;

        }

    },

    //--------------------------------------------------
    // Import Save
    //--------------------------------------------------

    import(save)
    {

        Object.assign(

            Player,

            save.player

        );

        Collection.import(

            save.collection

        );

        Inventory.import(

            save.inventory

        );

    },

    //--------------------------------------------------
    // Delete Save
    //--------------------------------------------------

    delete()
    {

        localStorage.removeItem(

            this.SAVE_KEY

        );

    },

    //--------------------------------------------------
    // Delete Backup
    //--------------------------------------------------

    deleteBackup()
    {

        localStorage.removeItem(

            this.BACKUP_KEY

        );

    },

    //--------------------------------------------------
    // Restore Backup
    //--------------------------------------------------

    restoreBackup()
    {

        const raw =
        localStorage.getItem(

            this.BACKUP_KEY

        );

        if(!raw)
        {
            return false;
        }

        const save =
        JSON.parse(raw);

        this.import(save);

        this.save();

        return true;

    },

    //--------------------------------------------------
    // Autosave
    //--------------------------------------------------

    startAutosave(interval = 30000)
    {

        setInterval(() =>
        {

            this.save();

        }, interval);

    }

};
