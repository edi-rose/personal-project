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

The Bots are then given move functions which use these different tools,
most of the turns are made up of:

Attack,
Defense,
SmartMove,
random move.
