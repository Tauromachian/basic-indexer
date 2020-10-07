const chai = require("chai");
const expect = chai.expect;
chai.should();

const Indexer = require("../src/Indexer");

describe("BasicIndexer.js", function () {
  it("Should exist", function () {
    expect(Indexer).to.exist;
  });

  it("Should return the correct object", function () {
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

  it("Should return the correct object and keep the indexes", function () {
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
});
