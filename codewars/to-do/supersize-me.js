'use strict';

const expect = require('chai').expect;

/*
Write a function that rearranges an integer into its largest possible value.

superSize(123456) //654321
superSize(105) // 510
superSize(12) // 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.
*/

function superSize(num){
}

Test.assertEquals(superSize(69),96)
Test.assertEquals(superSize(513),531)
Test.assertEquals(superSize(2017),7210)
Test.assertEquals(superSize(414),441)
Test.assertEquals(superSize(608719),987610)
Test.assertEquals(superSize(123456789),987654321)
Test.assertEquals(superSize(700000000001),710000000000)
Test.assertEquals(superSize(666666),666666)
Test.assertEquals(superSize(2),2)
