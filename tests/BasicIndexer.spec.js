const chai = require("chai");
const expect = chai.expect;
chai.should();

const BasicIndexer = require("../src/BasicIndexer");

describe("BasicIndexer.js", function () {
  it("Should exist", function () {
    expect(BasicIndexer).to.exist;
  });
});
