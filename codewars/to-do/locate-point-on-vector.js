'use strict';

const expect = require('chai').expect;

/*
[Geometry A-1] Locate point - to the right, to the left or on the vector?

5kyu

Your task is to determine the relationship between the given point and the vector. Direction of the vector is important! To determine if the point is to the left or to the right, you should imagine yourself standing at the beginning of the vector and looking at the end of the vector.
Arguments

You are given coordinates of a point and coordinates of a vector on 2D plane:

point = [x, y]
vector = [[x, y], [x, y]] (two points, direction is from first to second)
Vectors always have non-zero length, so you don't have to check for that at this point.

Your function must return:
-1 if the point is to the left of the vector,
0 if the point is on the same line as vector,
1 if the point is to the right of the vector.
*/

function pointVsVector(point, vector) {
  var pointSlope
}

describe('Locate Point in Relation to Vector', function() {
  describe('with point [0,1] and vector [[0, 0], [1, 1]]', done => {
    it('should return -1', done => {
      expect(pointVsVector([0,1], [[0, 0], [1, 1]])).to.equal(-1);
      done();
    })
  })

  describe('with point [2,2] and vector [[0, 0], [1, 1]]', done => {
    it('should return -1', done => {
      expect(pointVsVector([2,2], [[0, 0], [1, 1]])).to.equal(0);
      done();
    })
  })

  describe('with point [2,0] and vector [[0, 0], [1, 1]]', done => {
    it('should return -1', done => {
      expect(pointVsVector([2,0], [[0, 0], [1, 1]])).to.equal(1);
      done();
    })
  })
})
