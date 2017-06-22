'use strict';

/*
Highest Scoring Word

6kyu

Given a string of words (x), you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet. a=1, z=26 and everything inbetween.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lower case and all inputs will be valid.
*/

function high(x){

}

Test.assertEquals(high('man I need a taxi up to ubud'), 'taxi');
Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano');
Test.assertEquals(high('take me to semynak'), 'semynak');
