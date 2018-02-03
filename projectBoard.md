Project Board for Tic Tac Toe Bot:

Main Components:

The Board:

The Board is an array filled with class objects called Squares. These Squares have their own name and three attributes: teamName, row and col, making these objects fairly minimal. This is in stark contrast to the previous version of the board which was styled similarly to the minesweeper board with keys that were very specific such as "isNaught" or "isMid". This has been one of the largest improvements I have made from the original concept.


Main Functions:

Originally I had a fairly simplistic view of how my turns would be structured. They would simply loop through the board, evaluate it and then make a move. In attempting to make my second and third moves I realized that each turn would actually be doing many things. First they check to see if they can win in one move, pulling in the tools to do this from my attack.js file. If this is not true, it will call upon my defense.js file which will then check to see if the opponent can win in their next move and they stop it. After if this is untrue then they will try to force a win by pinning the opponent or simply picking a random free square and playing for a draw.


The Interface:

The game is a react app with one main component Game. The user will be able to choose between having two bots play eachother, have the player play as either team against a bot or have two users play eachother on a local browser.

As of the end of Week 4, I am not sure how realistic this goal is. A big challenge is going to be splitting the different gameplay options into different components and the entire transition to React from simply having the bots work in node.


Plan:
I present in in the middle of Week 6. I am currently in the weekend before week 5. My main to do's are:

Node App:
Create a working Win Checker,
Create a working attack.js file,
Finish the Bots' 3rd, 4th and 5th
Create working tests for my worker functions.

Converting to a React App:
I'll get to that when I finish the Node App.
