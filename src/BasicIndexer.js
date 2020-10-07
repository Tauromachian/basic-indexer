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

  get(...indexes) {
    indexes.map((index) => {
      return this.indexedCollection[index];
    });
  }

  set(index, object) {
    this.indexedCollection[index] = object;
  }
}

module.exports = BasicIndexer;
