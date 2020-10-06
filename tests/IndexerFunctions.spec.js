const chai = require("chai");
const expect = chai.expect;
chai.should();

const indexerFunction = require("../src/IndexerFunctions");
const createIndexedObjectCollection = indexerFunction.createIndexedObjectCollection;

describe("BasicIndexer.js", function () {
  it("Should exist", function () {
    expect(createIndexedObjectCollection).to.exist;
  });

  describe("createIndexedObjectCollection", function () {
    it("Should return an object", function () {
      const array = [
        {
          id: 1,
          name: "someName",
        },
      ];
      expect(createIndexedObjectCollection(array)).to.be.an("object");
    });
    it("Should return the correct indexed collection", function () {
      const array = [
        {
          id: 1,
          name: "someName",
        },
        {
          id: 3,
          name: "someName",
        },
        {
          id: 2,
          name: "someName",
        },
      ];
      expect(createIndexedObjectCollection(array)).to.deep.equal({
        1: { name: "someName" },
        3: { name: "someName" },
        2: { name: "someName" },
      });
    });
  });
});
