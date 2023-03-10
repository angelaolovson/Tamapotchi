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
const restartButton = document.getElementById("restartButton");
const replayButton = document.getElementById("replayButton");

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
const butterfly = document.getElementById("butterfly")
const storm = document.getElementById("storm")
const blackLayer = document.getElementById("blackLayer")

//User's name
let userName = prompt("Please enter your name", )
if(userName != null) {
    messages.innerText = "Hi "+userName+"! Ready to plant a seed? Click Start(top right) to start and Instruction(top left). Once click on start, wait on messages poping on HERE, follow them by clicking on the buttons(right) to keep your plant alive!";
    messages.classList.toggle("hidden");
} else {
    messages.innerText = "Hi stranger! Ready to plant a seed? Click Start(top right) to start and Instruction(top left). Once click on start, wait on messages poping on HERE, follow them by clicking on the buttons(right) to keep your plant alive!";
    messages.classList.toggle("hidden");
}

// Starting data & rules
class Tamapotchi {
    constructor () {
    this.grow = 0,
    this.water= 7,
    this.sunlight= 7,
    this.fertilizer= 6,
    this.pesticide= 0
    }

    // Methods
    watering() {
        this.water -= 1;
        waterDataHTML.innerText = this.water;
        if (this.water < 4 && this.water > 0) {
            messages.innerText = "Water meee!"
            messages.classList.toggle("hidden")
            setTimeout("messages.classList.toggle('hidden')", 1500);
        } else if(this.water === 8 && this.water === 9) {
            messages.innerText ="Too much water!!!";
            messages.classList.toggle("hidden")
            setTimeout("messages.classList.toggle('hidden')", 1500);
        }
        if (this.water === 0) {            
            messages.innerText ="Died from thirsty :(";
            messages.classList.toggle("hidden");
            //if the order is oppsite for the 2 functions below - causing not stopping setInvtervals
            clearIntervals();
            deadPlant();
            restart();
        } else if(this.water >= 10) {
            messages.innerText ="Died from rotten roots :(";
            messages.classList.toggle("hidden");
            clearIntervals();
            deadPlant();
            restart();
        }
    };

    sunlighting () {
        this.sunlight -= 1;
        sunlightDataHTML.innerText = this.sunlight;
        if (this.sunlight < 6 && this.sunlight > 0) {
            messages.innerText = "Need a sunbath :)";
            messages.classList.toggle("hidden");
            setTimeout("messages.classList.toggle('hidden')", 1500);
        }
        if (this.sunlight === 0) {
            messages.innerText = "I can't grow without sunshine :(";
            messages.classList.toggle("hidden");
            clearIntervals();
            deadPlant();
            restart();
        }
    };

    fertilizing () {
        this.fertilizer -= 1;
        fertilizerDataHTML.innerText = this.fertilizer;
        if (this.fertilizer < 4 && this.fertilizer > 0) {
            messages.innerText = "Want some plant food!";
            messages.classList.toggle("hidden");
            setTimeout("messages.classList.toggle('hidden')", 1500);
        } else if (this.fertilizer > 7 && this.fertilizer <= 9) {
            messages.innerText = "Too much plant food!";
            messages.classList.toggle("hidden");
            setTimeout("messages.classList.toggle('hidden')", 1500);
        }
        if (this.fertilizer === 0) {
            messages.innerText ="Died from starving :(";
            messages.classList.toggle("hidden");
            clearIntervals();
            deadPlant();
            restart();
        } else if(this.fertilizer > 10) {
            messages.innerText ="Died from over fertilization :(";
            messages.classList.toggle("hidden");
            clearIntervals();
            deadPlant();
            restart();
        }
    };

    bugging () {
        this.pesticide += 1;
        pesticideDataHTML.innerText = this.pesticide;
        if (this.pesticide > 4 && this.pesticide < 10) {
            messages.innerText = "These bugs are killing me!";
            messages.classList.toggle("hidden");
            setTimeout("messages.classList.toggle('hidden')", 1500);
        }
        if (this.pesticide === -2) {
            messages.innerText ="Died from too much chemicals";
            messages.classList.toggle("hidden");
            clearIntervals();
            deadPlant();
            restart();
        } else if(this.pesticide === 10) {
            messages.innerText ="Bugs ate the whole plant :(";
            messages.classList.toggle("hidden");
            clearIntervals();
            deadPlant();
            restart();
        }
    };

    growing () {
        this.grow += 1;
        growDataHTML.innerText = this.grow;
        if (this.grow >= 1 && this.grow <= 5) {
            sproutGif.classList.remove("hidden");
        } else if (this.grow >= 6 && this.grow <= 9) {
            sproutGif.classList.add("hidden");
            leavesGif.classList.remove("hidden");
        } else if (this.grow === 10) {
            flowerGif.classList.toggle("hidden");
            butterfly.classList.toggle("hidden");
            clearIntervals();
            waterButton.classList.toggle("hidden")
            sunlightButton.classList.toggle("hidden")
            fertilizerButton.classList.toggle("hidden")
            pesticideButton.classList.toggle("hidden")
            replay();
        }
        if (this.grow === 1) {
            messages.innerText = ("Here is the sprout!");
            messages.classList.toggle("hidden");
            setTimeout("messages.classList.toggle('hidden')", 3000);
        } else if (this.grow === 6) {
            messages.innerText = ("It is thriving!")
            messages.classList.toggle("hidden");
            setTimeout("messages.classList.toggle('hidden')", 3000);
        } else if (this.grow === 10) {
            messages.innerText = "Great job! Nice blooms! Enjoy it :)"
            messages.classList.toggle("hidden");
        }
    };

    born () {
        messages.innerText = ("A secret seed has been planted and waiting for sprouting!");
        setTimeout("messages.classList.toggle('hidden')", 3000);
                
        //⏰ starting all intervals (that live inside my state object)
        state.growCount = setInterval(() => {
            this.growing()
        }, 15000);

        state.waterCount = setInterval( () => {
            this.watering()
        }, 9000);

        state.sunlightCount = setInterval( () => {
            this.sunlighting()
        }, 12000);

        state.fertilizerCount = setInterval( () => {
            this.fertilizing()
        }, 25000);

        state.pesticideCount = setInterval( () => {
            this.bugging()
        }, 22000);
    }

    // interacting functions
    addingWater () {
        this.water = this.water + 2; 
        waterDataHTML.innerText = this.water;
    }
    addingSunlight () {
        this.sunlight = this.sunlight + 4;
        if(this.sunlight >= 10) {
            this.sunlight = 10;
        }
        sunlightDataHTML.innerText = this.sunlight; 
    }
    addingFertilizer () {
        this.fertilizer = this.fertilizer + 3; 
        fertilizerDataHTML.innerText = this.fertilizer;
    }
    killingBugs () {
        this.pesticide = this.pesticide - 3; 
        pesticideDataHTML.innerText = this.pesticide;
    }
}


const plant = new Tamapotchi();

// user clicks start to start the game and increase/decrease the data
startButton.addEventListener("click", function (){
    plant.born();
    growDataHTML.innerText = plant.grow;
    waterDataHTML.innerText = plant.water;
    sunlightDataHTML.innerText = plant.sunlight;
    fertilizerDataHTML.innerText = plant.fertilizer;
    pesticideDataHTML.innerText = plant.pesticide;  
    startButton.classList.add("hidden")
    waterButton.classList.toggle("hidden")
    sunlightButton.classList.toggle("hidden")
    fertilizerButton.classList.toggle("hidden")
    pesticideButton.classList.toggle("hidden")
})

waterButton.addEventListener("click", function (){
    plant.addingWater();
    wateringCanGif.classList.toggle("hidden");
    setTimeout("wateringCanGif.classList.toggle('hidden')", 1750);
})

sunlightButton.addEventListener("click", function (){
    plant.addingSunlight();
    sunGif.classList.toggle("hidden");
    setTimeout("sunGif.classList.toggle('hidden')", 3000);    
})

fertilizerButton.addEventListener("click", function (){
    plant.addingFertilizer();
    fertilizerGif.classList.toggle("hidden");
    setTimeout("fertilizerGif.classList.toggle('hidden')", 2200);    
})

pesticideButton.addEventListener("click", function (){
    plant.killingBugs();
    pesticideGif.classList.toggle("hidden");
    setTimeout("pesticideGif.classList.toggle('hidden')", 1500);    
})
 

// Stop the game
function clearIntervals () {
    clearInterval(state.growCount)
    clearInterval(state.waterCount)
    clearInterval(state.sunlightCount)
    clearInterval(state.fertilizerCount)
    clearInterval(state.pesticideCount)
} // why born(state.growCount) doesn't work?

function deadPlant () {
    storm.classList.toggle("hidden");
    blackLayer.classList.toggle("hidden");
    waterButton.classList.toggle("hidden")
    sunlightButton.classList.toggle("hidden")
    fertilizerButton.classList.toggle("hidden")
    pesticideButton.classList.toggle("hidden")
    if (plant.grow >= 1 && plant.grow <= 5 ) {
        sproutGif.classList.toggle("hidden");        
        sproutDeadGif.classList.toggle("hidden");        
    } else if (plant.grow >=6 && plant.grow <= 9 ) {
        leavesDeadGif.classList.toggle("hidden");
        leavesGif.classList.add("hidden");
    } 
};

function restart () {
    restartButton.classList.toggle("hidden");
    restartButton.addEventListener("click",function(){
            window.location.reload();
        })
}

function replay () {
    replayButton.classList.toggle("hidden");
    replayButton.addEventListener("click",function(){
            window.location.reload();
        })
}
