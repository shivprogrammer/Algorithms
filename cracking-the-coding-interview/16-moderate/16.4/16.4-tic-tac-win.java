/*
Tic Tac Win

Design an Algorithm to figure out if someone has won a game of tic-tac-toe

At first glance, this problem seems really straightforward. We're just checking a tic-tac-toe board; how hard could it be? It turns out that the problem is a bit more complex, and there is no single "perfect" answer. The optimal solution depends on your preferences.

There are a few major design decisions to consider:

1) Will hasWon be called just once or many times (for instance, as part of a tic-tac-toe website)? If the latter is the case, we may want to add pre-processing time to optimize the runtime of hasWon.

2) Do we know the last move that was made?

3) Tic-tac-toe is usually on a 3x3 board. Do we want to design for that? or do we want to implement it as an NxN solution?

4) In general, how much do we prioritize compactness of code versus speed of execution vs. clarity of code? Remember: The most efficient code may not always be the best. Your ability to understand and maintain the code matters, too
*/
