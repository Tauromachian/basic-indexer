const chai = require("chai");
const expect = chai.expect;
chai.should();

const Indexer = require("../src/Indexer");

describe("BasicIndexer.js", function () {
  it("Should exist", function () {
    expect(BasicIndexer).to.exist;
  });
});
