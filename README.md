# week-4-game

### Overview

    week-4-game is a simple Star Wars RPG. The game code was written in jQuery, and the styling is CSS. 

### Game Play

    1. Characters in the game have skill and stamina. Skill is the same as Attack Damage. Stamina is the same as Health Points. They make more sense in the context of a Jedi duel, since taking damage means you lose an arm.

    2. On the intro screen, click Obi-Wan or Anakin to choose your class. Obi-Wan starts with more stamina, but Anakin starts with more skill.

    3. On the "Arena" screen, click enemies to go to "Battle" screen. In general, if the enemies are farther down the page, and look scarier, then they hurt more. Farm easier enemies to gain Skill.

    4. Press "Attack" to attack. Each time you attack, you gain Skill. If your attack brings the enemy's Stamina to 0 or below, you do not lose any of your own Stamina, since they had no time to counterattack. You get 2 times Skill increment for defeating an enemy. 

    5. Once last enemy is dead, clicking "Continue" will take you to victory page, where you can see your final score and start a new game. 

### Game Code

    1. I used jQuery click events extensively
    2. Click events change the CSS visibility of the current page to hidden and make another page visible. 
    3. The #intro screen listens for a click on an a Jedi avatar. When the user clicks on it, resets the variables, gets the Jedi Skill and Jedi Stamina from the HTML data- attributes, calls the deactivateLink() function to change Jedi image so it is no longer hoverable, and puts that image on the battle and gameWon pages
    4. The #arena screen stores enemy data. It only listens to clicks in the #alive div, not to enemies in the #defeated div. Clicking an enemy in the arena sends user to battle.
    5. Battle screen primarily does game logic. If your character is slain, lets you know here, and makes the "New Game" button visible. If not all enemies have been killed yet, or you won, makes the Continue button visible. Shows current Skill, Stamina, and Enemy Stamina at bottom. 
    6. #next listener, on button click, puts slain enemies in the #defeated div and removes enemy from the battlefield. If all enemies defeated, makes #gameWon screen visible. #gameWon screen plays Star Wars Title theme, shows final stats, and allows you to play new game. Else "continue" button takes you back to #arena
    7. New Game button resets the game. 