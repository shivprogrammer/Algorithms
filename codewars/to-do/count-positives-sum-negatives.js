'use strict';

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array:
*/

function countPositivesSumNegatives(input) {
}

describe("Example tests", function(){
    var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    var actual = countPositivesSumNegatives(testData);
    var expected = [10, -65];

    Test.expect(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");

    testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    actual = countPositivesSumNegatives(testData);
    expected = [8, -50];

    Test.expect(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");
});
