function createIndexedObjectCollection(array, keyToIndex = "id") {
  let indexedObjectCollection = {};
  array.forEach((arrayElement) => {
    const index = arrayElement[keyToIndex];
    let arrayElementWithoutIndex = arrayElement;
    delete arrayElementWithoutIndex.id;
    indexedObjectCollection[index] = arrayElementWithoutIndex;
  });
  return indexedObjectCollection;
}

module.exports = {
  createIndexedObjectCollection
}