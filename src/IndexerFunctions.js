function makeIndexedCollection(array, keyToIndex = "id") {
  let indexedObjectCollection = {};
  array.forEach((arrayElement) => {
    const index = arrayElement[keyToIndex];

    throwErrorIfRepeated(indexedObjectCollection, index);

    let arrayElementWithoutIndex = arrayElement;
    delete arrayElementWithoutIndex.id;
    indexedObjectCollection[index] = arrayElementWithoutIndex;
  });
  return indexedObjectCollection;
}

function throwErrorIfRepeated(indexedObjectCollection, index) {
  if (indexedCollectionContains(indexedObjectCollection, index)) {
    throw new Error("Repeated keys aren't allowed");
  }
}

function indexedCollectionContains(indexedCollection, key) {
  if (indexedCollection[key]) {
    return true;
  }
  return false;
}

module.exports = {
  makeIndexedCollection,
};
