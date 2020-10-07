const makeIndexedCollection = require("./IndexerFunctions")
  .makeIndexedCollection;
const toArray = require("./IndexerFunctions").toArray;

class Indexer {
  constructor(array, key = "id", keepIndex = false) {
    this.index = key;
    this.indexedCollection = makeIndexedCollection(array, key, keepIndex);
  }

  getArray() {
    return toArray(this.indexedCollection, true, this.index);
  }

  get(...indexes) {
    return indexes.map((index) => {
      return this.indexedCollection[index];
    });
  }

  set(index, object) {
    this.indexedCollection[index] = object;
  }
}

module.exports = Indexer;
