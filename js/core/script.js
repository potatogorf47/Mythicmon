/*
========================================
MYTHICMON GAME MANAGER
script.js
========================================
*/

class GameManager {

    static async initialize() {

        console.log("=== MythicMon Starting ===");

        this.cacheElements();

        this.showLoading();

        await this.simulateLoading();

        this.loadSave();

        this.initializeButtons();

        this.showTitle();

        console.log("=== Startup Complete ===");

    }

    static cacheElements() {

        this.loadingScreen =
            document.getElementById("loadingScreen");

        this.titleScreen =
            document.getElementById("titleScreen");

        this.profileScreen =
            document.getElementById("profileScreen");

        this.hubScreen =
            document.getElementById("hubScreen");

        this.loadingBar =
            document.getElementById("loadingProgress");

    }

    static showLoading() {

        this.loadingScreen?.classList.remove("hidden");

        this.titleScreen?.classList.add("hidden");

    }

    static async simulateLoading() {

        if (!this.loadingBar)
            return;

        for (let i = 0; i <= 100; i++) {

            this.loadingBar.style.width = i + "%";

            await new Promise(resolve =>
                setTimeout(resolve, 12));

        }

    }

    static showTitle() {

        this.loadingScreen?.classList.add("hidden");

        this.titleScreen?.classList.remove("hidden");

    }

    static loadSave() {

        try {

            if (typeof SaveManager !== "undefined") {

                SaveManager.load();

            }

        }

        catch (error) {

            console.warn("No save found.");

        }

    }

    static initializeButtons() {

        document.getElementById("continueBtn")
            ?.addEventListener("click", () => {

                this.continueGame();

            });

        document.getElementById("newGameBtn")
            ?.addEventListener("click", () => {

                this.newGame();

            });

        document.getElementById("collectionBtn")
            ?.addEventListener("click", () => {

                window.location.href =
                    "collection.html";

            });

        document.getElementById("settingsBtn")
            ?.addEventListener("click", () => {

                alert("Settings coming soon.");

            });

        document.getElementById("creditsBtn")
            ?.addEventListener("click", () => {

                alert("MythicMon\nCreated by Potato Gorf");

            });

    }

    static continueGame() {

        window.location.href =
            "home.html";

    }

    static newGame() {

        this.titleScreen.classList.add("hidden");

        this.profileScreen.classList.remove("hidden");

    }

}

window.addEventListener("DOMContentLoaded", () => {

    GameManager.initialize();

});
