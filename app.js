//state: keeps tracking our timer
const state = {
    growCount: null,
    waterCount: null,
    sunlightCount: null,
    fertilizerCount: null,
    pesticideCount: null
}


// Visual Data
const growDataHTML = document.getElementById("growData")
const waterDataHTML = document.getElementById("waterData")
const sunlightDataHTML = document.getElementById("sunlightData")
const fertilizerDataHTML = document.getElementById("fertilizerData")
const pesticideDataHTML = document.getElementById("pestData")

// Buttons eventListeners
const startButton = document.getElementById("startButton");
const waterButton = document.getElementById("waterButton");
const sunlightButton = document.getElementById("sunlightButton");
const fertilizerButton = document.getElementById("fertilizerButton");
const pesticideButton = document.getElementById("pesticideButton");

// Starting data & rules
class Tamagotchi {
    constructor () {
    this.grow = 0,
    this.water= 4,
    this.sunlight= 5,
    this.fertilizer= 5,
    this.pesticide= 0
    }

    // Methods
    watering() {
        this.water -= 1;
        waterDataHTML.innerText = this.water;
        if (this.water <= 3) {
            console.log("Water meee!")
        } else if(this.water >= 8) {
            console.log("Too much water!!!")
        }
    };
    

    sunlighting () {
        this.sunlight -= 1;
        sunlightDataHTML.innerText = this.sunlight;
        if (this.sunlight < 5) {
            console.log("Need a sunbath :)")
        } else if (this.sunlight >= 10) {
            this.sunlight = 10;
        }
    };


    fertilizing () {
        this.fertilizer -= 1;
        fertilizerDataHTML.innerText = this.fertilizer;
        if (this.fertilizer < 3) {
            console.log("Want some plant food!")
        } else if (this.fertilizer > 6) {
            console.log("Too much plant food!")
        }
    };


    bugging () {
        this.pesticide += 1;
        pesticideDataHTML.innerText = this.pesticide;
        if (this.pesticide > 4) {
            console.log("These bugs are killing me!")
        }
    };
    
    growing () {
        this.grow += 1;
        growDataHTML.innerText = this.grow;
    };


    born () {
        console.log("A secret seed has been planted and a sprout has born!");
        
        
        //⏰ starting all intervals (that live inside my state object)
        state.growCount = setInterval(() => {
            this.growing()
        }, 15000);

        state.waterCount = setInterval( () => {
            this.watering()
        }, 6000);


        state.sunlightCount = setInterval( () => {
            this.sunlighting()
        }, 7000);


        state.fertilizerCount = setInterval( () => {
            this.fertilizing()
        }, 10000);

        state.pesticideCount = setInterval( () => {
            this.bugging()
        }, 15000);
    }


    // interacting functions
    addingWater () {
        this.water = this.water + 2; 
    }

    addingSunlight () {
        this.sunlight = this.sunlight + 4; 
    }

    addingFertilizer () {
        this.fertilizer = this.fertilizer + 3; 
    }

    killingBugs () {
        this.pesticide = this.pesticide - 3; 
    }
}


const plant = new Tamagotchi();

// click start to start the game
startButton.addEventListener("click", function (){
    plant.born();
    growDataHTML.innerText = 0;
    waterDataHTML.innerText = 4;
    sunlightDataHTML.innerText = 5;
    fertilizerDataHTML.innerText = 5;
    pesticideDataHTML.innerText = 0;
})


// user clicks on buttons to increase/decrease the data
waterButton.addEventListener("click", function (){
    plant.addingWater();
})

sunlightButton.addEventListener("click", function (){
    plant.addingSunlight();    
})

fertilizerButton.addEventListener("click", function (){
    plant.addingFertilizer();    
})

pesticideButton.addEventListener("click", function (){
    plant.killingBugs();    
})


//while loop for the plant 0 = pot, 1~4 sprout, 5~9 leaves, 10 flower, css show and hide imgs






