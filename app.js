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
class Tamagotree {
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
        console.log("A secret seed has beeb planted and a sprout has born!");
        
        
        //⏰ starting all intervals (that live inside my state object)
        state.growCount = setInterval(() => {
            this.growing()
        }, 10000);

        state.waterCount = setInterval( () => {
            this.watering()
        }, 4000);


        state.sunlightCount = setInterval( () => {
            this.sunlighting()
        }, 5000);


        state.fertilizerCount = setInterval( () => {
            this.fertilizing()
        }, 8000);

        state.pesticideCount = setInterval( () => {
            this.bugging()
        }, 11000);
    }


    // interacting
    addingWater () {
        this.water = this.water + 2; 
    }
}




// click start to start the game
startButton.addEventListener("click", function (){
    const plant = new Tamagotree();
    plant.born();
    plant.addingWater();
})

waterButton.addEventListener("click", function (){
    Tamagotree.addingWater();
})



// waterButton.addEventListener("click", function (){
//     state.waterCount = state.waterCount + 2
// })


// // setInterval for data on the top right
// const growIncreasingTime = (initialValue) => {
    //     let i = initialValue;
    //     document.getElementById("growData").textContent = i;
//     return setInterval(() => {
//         i = i + 1;
//         console.log(i);
//         document.getElementById("growData").textContent = i;
//     }, 10000
//     ) 
// };

// const waterData = document.getElementById("waterData")
// const waterDecreasingTime = (initialValue) => {
//     let i = initialValue;
//     waterData.textContent = i;
//     document.getElementById("waterButton").addEventListener("click", function(){
//         return i = i + 2;
//     });
//     return setInterval(() => {
//         i = i - 1;
//         console.log(i);
//         waterData.textContent = i;
//     }, 5000);
// };


// const sunDecreasingTime = (initialValue) => {
//     let i = initialValue;
//     document.getElementById("sunlightData").textContent = i;
//     return setInterval(() => {
//         i = i - 1;
//         console.log(i);
//         document.getElementById("sunlightData").textContent = i;
//     }, 4000
// )
// };
// const fertilizerDecreasingTime = (initialValue) => {
//     let i = initialValue;
//     document.getElementById("fertilizerData").textContent = i;
//     return setInterval(() => {
//         i = i - 1;
//         console.log(i);
//         document.getElementById("fertilizerData").textContent = i;
//     }, 6000
// )
// };
// const pestIncreasingTime = (initialValue) => {
//     let i = initialValue;
//     document.getElementById("pestData").textContent = i;
//     return setInterval(() => {
//         i = i + 1;
//         console.log(i);
//         document.getElementById("pestData").textContent = i;
//     }, 7000
// )
// };







