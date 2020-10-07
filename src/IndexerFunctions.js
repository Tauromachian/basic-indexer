function makeIndexedCollection(array, keyToIndex = "id", keepIndex = false) {
  let indexedObjectCollection = {};
  array.forEach((arrayElement) => {
    const index = arrayElement[keyToIndex];

    throwErrorIfRepeated(indexedObjectCollection, index);

    if (!keepIndex) {
      arrayElement = deleteIndex(arrayElement, keyToIndex);
    }

    indexedObjectCollection[index] = arrayElement;
  });
  return indexedObjectCollection;
}

function deleteIndex(arrayElement, keyToIndex) {
  let arrayElementWithoutIndex = arrayElement;
  delete arrayElementWithoutIndex[keyToIndex];
  return arrayElementWithoutIndex;
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
