function makeIndexedCollection(array, key = "id", keepIndex = false) {
  let indexedCollection = {};
  array.forEach((element) => {
    const index = element[key];

    throwErrorIfRepeated(indexedCollection, index);

    if (!keepIndex) {
      element = deleteIndex(element, key);
    }

    indexedCollection[index] = element;
  });
  return indexedCollection;
}

function deleteIndex(element, index) {
  let elementWithoutIndex = element;
  delete elementWithoutIndex[index];
  return elementWithoutIndex;
}

function throwErrorIfRepeated(indexedCollection, index) {
  if (indexedCollectionContains(indexedCollection, index)) {
    throw new Error("Repeated keys aren't allowed");
  }
}

function indexedCollectionContains(indexedCollection, key) {
  if (indexedCollection[key]) {
    return true;
  }
  return false;
}

function toArray(indexedCollection, addKey = false, keyToAdd = "id") {
  const keys = Object.keys(indexedCollection);
  return keys.map((key) => {
    let object = {};

    if (addKey) {
      object[keyToAdd] = key;
    }

    object = Object.assign(indexedCollection[key]);
    return object;
  });
}

module.exports = {
  makeIndexedCollection,
  toArray
};
