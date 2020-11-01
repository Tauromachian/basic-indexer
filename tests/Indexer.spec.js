const chai = require("chai");
const expect = chai.expect;
chai.should();

const Indexer = require("../src/Indexer");

describe("BasicIndexer.js", function () {
  it("Should exist", function () {
    expect(Indexer).to.exist;
  });

  describe("get", function () {
    it("Should return the array object", function () {
      const index = new Indexer([
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
      ]);

      expect(index.get(1, 2, 3)).to.deep.equal([
        { name: "someName" },
        { name: "someName" },
        { name: "someName" },
      ]);
    });

    it("Should return the correct array and keep the indexes", function () {
      const index = new Indexer(
        [
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
        ],
        "id",
        true
      );

      expect(index.get(1, 2, 3)).to.deep.equal([
        {
          id: 1,
          name: "someName",
        },
        {
          id: 2,
          name: "someName",
        },
        {
          id: 3,
          name: "someName",
        },
      ]);
    });

    it("Should return the array in the correct order", function () {
      const index = new Indexer(
        [
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
        ],
        "id",
        true
      );

      expect(index.get(1, 3, 2)).to.deep.equal([
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
      ]);
    });
  });

  describe("getArray", function () {
    it("Should return the correct array", function () {
      const index = new Indexer(
        [
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
        ],
        "id",
        true
      );

      expect(index.getArray()).to.be.deep.equal([
        {
          id: 1,
          name: "someName",
        },
        {
          id: 2,
          name: "someName",
        },
        {
          id: 3,
          name: "someName",
        },
      ]);
    });
  });

  describe("getAll", function () {
    it("Should return te complete indexed collection", function () {
      const index = new Indexer(
        [
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
        ],
        "id",
        true
      );

      expect(index.getAll()).to.deep.equal({
        1: {
          id: 1,
          name: "someName",
        },
        3: {
          id: 3,
          name: "someName",
        },
        2: {
          id: 2,
          name: "someName",
        },
      });
    });
  });

  describe("getOne", function () {
    it("Should return the object wich index matches the argument", function () {
      const index = new Indexer(
        [
          {
            id: 1,
            name: "someName1",
          },
          {
            id: 3,
            name: "someName3",
          },
          {
            id: 2,
            name: "someName2",
          },
        ],
        "id",
        true
      );

      expect(index.getOne(2)).to.deep.equal({
        id: 2,
        name: "someName2",
      });
    });
    it("Should return 0 if no matches are found to the argumet", function () {
      const index = new Indexer(
        [
          {
            id: 1,
            name: "someName1",
          },
        ],
        "id",
        true
      );

      expect(index.getOne(2)).to.equal(0);
    });
  });
});
