const chai = require("chai");
const expect = chai.expect;
chai.should();

const indexerFunction = require("../src/IndexerFunctions");
const createIndexedObjectCollection = indexerFunction.createIndexedObjectCollection;

describe("BasicIndexer.js", function () {
  it("Should exist", function () {
    expect(createIndexedObjectCollection).to.exist;
  });

  
});
