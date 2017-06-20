'use strict';

const expect = require('chai').expect;

/*
Image Files Only

7kyu

Build a function that will take an array of filenames (as string) and return an array of array. Each array will provide 3 informations about the image file: the full filename, its name and the extension. (See the example below)

Detect the image files based on the end of the filename which is their format (extension).
Image files are defined as jpg, gif, png, tiff, svg and bmp. So "puppies.jpg" is a image file while "puppies.html" is not.

For example:
Input: ["imgName.extension", "notAnImg"]
Output: [["imgName.extension", "imgName", "extension"], null]

So:
imageFilter(["index.html", "favicon.gif"])
return [null, ["favicon.gif", "favicon", "gif"]]

!Non Case Sensitive, so a file with the extension .jpg or .JPG is still an image.
*/

function imageFilter(arr) {

}

describe('Image Files Only | Code Wars | 7kyu', function() {
  describe('with input ["favicon.gif", "img.tiff"]', done => {
    it('should return [["favicon.gif", "favicon", "gif"], ["img.tiff", "img", "tiff"]]', done => {
      expect(imageFilter(["favicon.gif", "img.tiff"]).to.deep.equal([["favicon.gif", "favicon", "gif"], ["img.tiff", "img", "tiff"]]);
      done();
    })
  })

  describe('with input ["index.html", "seattle.jpg"]', done => {
    it('should return [null, ["seattle.jpg", "seattle", "jpg"]]', done => {
      expect(imageFilter(["index.html", "seattle.jpg"]).to.deep.equal([null, ["seattle.jpg", "seattle", "jpg"]]);
      done();
    })
  })

  describe('with input [".bash_profile", "workspace.doc", "img0912.jpg"]', done => {
    it('should return [null, null, ["img0912.jpg", "img0912", "jpg"]]', done => {
      expect(imageFilter([".bash_profile", "workspace.doc", "img0912.jpg"]).to.deep.equal([null, null, ["img0912.jpg", "img0912", "jpg"]]);
      done();
    })
  })
})
