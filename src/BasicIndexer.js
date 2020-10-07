const makeIndexedCollection = require("./IndexerFunctions")
  .makeIndexedCollection;
const toArray = require("./IndexerFunctions").toArray;

class BasicIndexer {
  constructor(array, key = "id") {
    this.index = key;
    this.indexedCollection = makeIndexedCollection(array, key);
  }

  getArray() {
    return toArray(this.indexedCollection, true, this.index);
  }
}

module.exports = BasicIndexer;
