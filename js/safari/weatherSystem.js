// =====================================================
// MYTHICMON
// WEATHER SYSTEM
// =====================================================

const WeatherSystem =
{

    //--------------------------------------------------
    // Current Weather
    //--------------------------------------------------

    current: "clear",

    duration: 600,

    timer: 600,

    //--------------------------------------------------
    // Weather Types
    //--------------------------------------------------

    weather:
    {

        clear:
        {

            spawnModifier: 1,

            visibility: 1,

            movement: 1

        },

        rain:
        {

            spawnModifier: 1.15,

            visibility: 0.9,

            movement: 0.9

        },

        snow:
        {

            spawnModifier: 1.1,

            visibility: 0.8,

            movement: 0.8

        },

        storm:
        {

            spawnModifier: 0.9,

            visibility: 0.7,

            movement: 0.85

        },

        fog:
        {

            spawnModifier: 1,

            visibility: 0.55,

            movement: 1

        }

    },

    //--------------------------------------------------
    // Update
    //--------------------------------------------------

    update()
    {

        this.timer--;

        if(this.timer <= 0)
        {

            this.randomWeather();

        }

    },

    //--------------------------------------------------
    // Change Weather
    //--------------------------------------------------

    set(weatherID)
    {

        if(!this.weather[weatherID])
        {
            return;
        }

        this.current = weatherID;

        this.timer = this.duration;

    },

    //--------------------------------------------------
    // Random Weather
    //--------------------------------------------------

    randomWeather()
    {

        const choices =
        [

            "clear",

            "clear",

            "rain",

            "snow",

            "fog",

            "storm"

        ];

        const index =
        Math.floor(

            Math.random() *

            choices.length

        );

        this.set(

            choices[index]

        );

    },

    //--------------------------------------------------
    // Spawn Modifier
    //--------------------------------------------------

    getSpawnModifier()
    {

        return this.weather
        [

            this.current

        ].spawnModifier;

    },

    //--------------------------------------------------
    // Visibility
    //--------------------------------------------------

    getVisibility()
    {

        return this.weather
        [

            this.current

        ].visibility;

    },

    //--------------------------------------------------
    // Movement Modifier
    //--------------------------------------------------

    getMovementModifier()
    {

        return this.weather
        [

            this.current

        ].movement;

    }

};
