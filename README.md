# Tamapotchi - growing plants
Grow a flower from a pot. Keep it growing until level 10 to bloom by watering properly, making sure it has enough sunlight, keeping bugs away, and feeding it plant food sometimes. Any overdo will keep the plant.


## Wireframe
![readme-wireframe](https://user-images.githubusercontent.com/122236820/221720575-6fee663e-ac76-4c84-a4ba-d77ee366c942.png)


## Steps
1. Click Start to start the game and give starting data
   - Starting data
     - GROW : 0 
     - WATER : 6 
     - SUNLIGHT : 5 
     - FERTILIZER : 5 
     - PESTICIDE : 1 
2. Following the plant’s needs from the message and keep it alive until the grow data increases from 0 to 10.

## Rules
4 <= Water <= 8, decreasing over the time
- onclick Water +2
- Water <= 3, water me
- Water >= 9, too much water!
- Water <= 0 || Water>=10 => dead: lose the game 

3<= Fertilizer <= 6, decreasing over the time
- onclick Fertilizer +3
- Fertilizer <=2, feed me
- Fertilizer >= 7, too much fertilizer!
- Fertilizer <= 0 || Fertilizer >= 10 => dead: lose the game

0 <= Pesticide <= 4, increasing over the time
- onclick Pesticide -3
- Pesticide >=5, kill the bugs!
- Pesticide >= 10 => dead: lose the game (set if Pesticide < 0 => Pesticide = 0)

5 <= Sunlight <= 10, decreasing over the time
- onclick Sunlight +4
- Sunlight < 5, give me some sunshine!
- Sunlight <= 0 => dead: lose the game (set if Sunlight > 10 => Sunlight = 10)

If Grow = 10, win the game!


## MVP GOALS
* As a player, I want to input my name.
* As a player, I want to click "start" to start the game.
* As a player, I want to see the data from the plant and the instruction.
* As a player, I want to see messages from the plant when it needs to be taken care.
* As a player, I want to click buttons to increase/decease the data to meet the plant's needs.
* As a player, I want to play gifs every time when I click the buttons. 
* As a player, I will kill the plant(lose the game) by not following plant's needs and over-clicking the buttons.
* As a player, I can see my flower bloomed when I win the game.

## Stretch GOALS
* As a player, I would like to click the start button then the rest of the buttons pop up.
* As a player, I would like to play a plant-seeds gif after I click the start button and before the staring data pops up.
* As a player, I would like to play a blooming gif when the grow data is 10.
* As a player, I would like to have the function buttons removed after the blooming gif is played.
* As a player, I would like to the cut button showing and enable to click on it.
* As a player, I would like to have a cut-flower gif playing after I click on the cut button.
* As a player, I would like to have a restart button after the above and after I lose the game.
* As a player, I would like to have the random selection for the blooming flower (3 random options).
![image](https://user-images.githubusercontent.com/122236820/222004634-c0f9023b-9512-43ee-8945-16a47628fe40.png)
