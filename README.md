Hello and welcome to my Naughts and Crosses bot, the code is 100% mine and while
I don't consider it finished, I have achieved the main goal of having an
unbeatable bot.

Interesting Bot Stuff:

The Bots have 4 types of functions which they use to asses the board and make a
move.

1. Attack: The ability to see if they can win in their next move.

2. Defense: The ability to see if they are about to lose.

3. Defend Double Pin: This is the most specific function set and defends against a pin,
which is unique and unaccounted for in the other functions.

4. SmartMove: These smart moves can see whether they can create or defend against,
a pin. This is the most complicated part of my bot functionality, but it is
derived from simple understanding of what creates a pin. There are many bots online
which fail to implement pin defense such as this one http://naughts-and-crosses.herokuapp.com/
go top left, then bottom right, then top right against their highest difficulty bot.

The Bots are then given move functions which use these different tools,
most of the turns are made up of:

Attack,
Defense,
SmartMove,
random move.

These move functions are called depending on how far through the game they are.

Testing the bots:

I have written tests that check each of these functions move sets to see if they have the
correct response in a given situation. I have not tested to make sure they have the correct,
response in every situation. I would like to link into how I can do this without writing ridiculous
amounts of code to account for the change in the board every time.

User Experience:

I wanted my app to be a single page app, with a clean sleek look in which a user can play against the bots,
change teams, restart the game and track their score. I broke down the app into three main components,
the bulk of the page is held in the board component which has two children: Buttons and ScoreBoard. Buttons hold
the try again and change team buttons which run functions from the Board and ScoreBoard presents the score
variables which are also passed from the board.

The static title and github link are held in the index.html
