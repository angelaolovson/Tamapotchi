# Tamapotchi - growing plants

<img width="739" alt="image" src="https://user-images.githubusercontent.com/122236820/221334736-d6b7d347-bc8f-4af2-a472-c92992bc1a25.png">

STEPS:
1. Click Start to start the game (run planting seed gif)
2. Give starting data
3. Starting data
     GROW : 0 (setInterval increasing)
     WATER : 6 (setInterval decreasing)
     SUNLIGHT : 5 (setInterval decreasing)
     FERTILIZER : 5 (setInterval decreasing)
     PESTICIDE : 1 (setInterval increasing)
4. Following plant’s needs from the message and keep it alive until the grow data increases from 0 to 10.

RULES:
4 <= Water <= 8, decreasing
onclick Water +2
Water <= 3, water me
Water >= 9, too much water!
Water <= 0 || Water>=10 => dead  

3<= Fertilizer <= 6, decreasing
onclick Fertilizer +3
Fertilizer <=2, feed me
Fertilizer >= 7, too much fertilizer!
Fertilizer <= 0 || Fertilizer >= 10 => dead

0 <= Pesticide <= 4, increasing
onclick Pesticide -3
Pesticide >=5, kill the bugs!
Pesticide >= 10 => dead
(set if Pesticide < 0 => Pesticide = 0)

5 <= Sunlight <= 10, decreasing
onclick Sunlight +4
Sunlight < 5, give me some sunshine!
Sunlight <= 0 => dead
(set if Sunlight > 10 => Sunlight = 10)

if Grow = 10, run result gif(a flower)
pop up cut bottun
onclick CUT, run cut gif and a vase
