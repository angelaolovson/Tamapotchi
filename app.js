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
const messages = document.getElementById("messages")

// Buttons
const startButton = document.getElementById("startButton");
const waterButton = document.getElementById("waterButton");
const sunlightButton = document.getElementById("sunlightButton");
const fertilizerButton = document.getElementById("fertilizerButton");
const pesticideButton = document.getElementById("pesticideButton");

// Gifs
const sproutGif = document.getElementById("sproutGif")
const sproutDeadGif= document.getElementById("sproutDeadGif")
const leavesGif= document.getElementById("leavesGif")
const leavesDeadGif= document.getElementById("leavesDeadGif")
const flowerGif= document.getElementById("flowerGif")
const wateringCanGif= document.getElementById("wateringCanGif")
const sunGif= document.getElementById("sunGif")
const fertilizerGif= document.getElementById("fertilizerGif")
const pesticideGif= document.getElementById("pesticideGif")



// Starting data & rules
class Tamapotchi {
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
        if (this.grow >= 1 && this.grow <= 5) {
            sproutGif.style.display = "block";
        } else if (this.grow >= 6 && this.grow <= 9) {
            leavesGif.style.display = "block";
        } else if (this.grow = 10) {
            flowerGif.style.display = "block"
        }
    };


    born () {
        messages.innerText = ("A secret seed has been planted and waiting for sprouting!");
                
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


const plant = new Tamapotchi();

// user clicks start to start the game and ncrease/decrease the data
startButton.addEventListener("click", function (){
    plant.born();
    growDataHTML.innerText = plant.grow;
    waterDataHTML.innerText = plant.water;
    sunlightDataHTML.innerText = plant.sunlight;
    fertilizerDataHTML.innerText = plant.fertilizer;
    pesticideDataHTML.innerText = plant.pesticide;
})

waterButton.addEventListener("click", function (){
    plant.addingWater();
    wateringCanGif.style.display = "block";
    setTimeout("wateringCanGif.style.display='none';", 1750);
})

sunlightButton.addEventListener("click", function (){
    plant.addingSunlight();
    sunGif.style.display = "block";
    setTimeout("sunGif.style.display='none';", 3000);    
})

fertilizerButton.addEventListener("click", function (){
    plant.addingFertilizer();
    fertilizerGif.style.display = "block";
    setTimeout("fertilizerGif.style.display='none';", 2200);    
})

pesticideButton.addEventListener("click", function (){
    plant.killingBugs();
    pesticideGif.style.display = "block";
    setTimeout("pesticideGif.style.display='none';", 1500);    
})






//while loop for the plant 0 = pot, 1~4 sprout, 5~9 leaves, 10 flower, css show and hide imgs






