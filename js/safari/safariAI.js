// =====================================================
// MYTHICMON
// SAFARI AI ENGINE
// =====================================================

const SafariAI =
{

    //--------------------------------------------------
    // Update Creature
    //--------------------------------------------------

    update(creature, deltaTime)
    {

        if(!creature.ai)
        {
            return;
        }

        switch(creature.ai.state)
        {

            case "idle":
                this.idle(creature);
                break;

            case "wander":
                this.wander(creature);
                break;

            case "flee":
                this.flee(creature);
                break;

            case "chase":
                this.chase(creature);
                break;

            case "sleep":
                this.sleep(creature);
                break;

            case "eat":
                this.eat(creature);
                break;

        }

        this.updateTimer(creature);

    },

    //--------------------------------------------------
    // Idle
    //--------------------------------------------------

    idle(creature)
    {

        if(Math.random() < 0.02)
        {
            creature.ai.state = "wander";
        }

    },

    //--------------------------------------------------
    // Wander
    //--------------------------------------------------

    wander(creature)
    {

        creature.x += creature.ai.directionX;
        creature.y += creature.ai.directionY;

        if(Math.random() < 0.03)
        {

            creature.ai.directionX =
                Math.floor(Math.random()*3)-1;

            creature.ai.directionY =
                Math.floor(Math.random()*3)-1;

        }

    },

    //--------------------------------------------------
    // Flee
    //--------------------------------------------------

    flee(creature)
    {

        creature.x -= creature.ai.targetDX;
        creature.y -= creature.ai.targetDY;

    },

    //--------------------------------------------------
    // Chase
    //--------------------------------------------------

    chase(creature)
    {

        creature.x += creature.ai.targetDX;
        creature.y += creature.ai.targetDY;

    },

    //--------------------------------------------------
    // Eat
    //--------------------------------------------------

    eat(creature)
    {

        if(creature.energy < 100)
        {
            creature.energy++;
        }

    },

    //--------------------------------------------------
    // Sleep
    //--------------------------------------------------

    sleep(creature)
    {

        creature.energy =
        Math.min(
            100,
            creature.energy + 2
        );

    },

    //--------------------------------------------------
    // Timer
    //--------------------------------------------------

    updateTimer(creature)
    {

        creature.ai.timer--;

        if(creature.ai.timer <= 0)
        {

            creature.ai.timer =
                120 +
                Math.floor(Math.random()*240);

            this.chooseNewState(creature);

        }

    },

    //--------------------------------------------------
    // Choose New State
    //--------------------------------------------------

    chooseNewState(creature)
    {

        const states =
        [

            "idle",

            "wander",

            "wander",

            "eat",

            "idle"

        ];

        creature.ai.state =
            states[
                Math.floor(
                    Math.random() *
                    states.length
                )
            ];

    },

    //--------------------------------------------------
    // Player Spotted
    //--------------------------------------------------

    playerDetected(creature, player)
    {

        switch(creature.personality)
        {

            case "timid":

                creature.ai.state = "flee";

                break;

            case "aggressive":

                creature.ai.state = "chase";

                break;

            case "curious":

                creature.ai.state = "wander";

                break;

            default:

                creature.ai.state = "idle";

        }

    }

};
