const chai = require("chai");
const expect = chai.expect;
chai.should();

const indexerFunction = require("../src/IndexerFunctions");
const makeIndexedCollection = indexerFunction.makeIndexedCollection;

describe("BasicIndexer.js", function () {
  it("Should exist", function () {
    expect(makeIndexedCollection).to.exist;
  });

  describe("makeIndexedCollection", function () {
    it("Should return an object", function () {
      const array = [
        {
          id: 1,
          name: "someName",
        },
      ];
      expect(makeIndexedCollection(array)).to.be.an("object");
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
      expect(makeIndexedCollection(array)).to.deep.equal({
        1: { name: "someName" },
        3: { name: "someName" },
        2: { name: "someName" },
      });
    });
    it("Should throw: Repeated keys aren't allowed error", function () {
      const array = [
        {
          id: 1,
          name: "someName1",
        },
        {
          id: 1,
          name: "someName2",
        },
        {
          id: 2,
          name: "someName",
        },
      ];
      expect(() => makeIndexedCollection(array)).to.throw("Repeated keys aren't allowed");
    });
    it("Should keep the index in each element", function () {
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
      expect(makeIndexedCollection(array, "id", true)).to.deep.equal({
        1: { id: 1, name: "someName" },
        3: { id: 3, name: "someName" },
        2: { id: 2, name: "someName" },
      });
    });
  });
});
