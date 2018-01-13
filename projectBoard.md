Project Board for Tic Tac Toe Bot:

Main Components:

The Board:

The Board will be configured similarly to the minesweeper board. It's an Object with an array of Cell Objects.

The keys of the cells will be: isUsed, isNaught, isCross,
isCorner, isMiddle.


Main Functions:

The functions will be made up of turns e.g
turnOne(), turnTwo() and they will loop the board evaluating the state and then make a move. Ideally much of that code can be put into individual functions which I can then re-use.

Rules:
The Game will randomly select who starts first. Bot is always Crosses user is always Naughts.

The bot and the user then take turns declaring each cell either a Naught or a Cross, if either can get three of their class in a row they win the game, if all the cells are claimed without the win condition being met the game ends in a draw.

 
