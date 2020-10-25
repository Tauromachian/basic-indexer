# Basic Indexer

The objective of this module is to create and manage a basic indexed collection

## How to import

CommonJS
```js
const BasicIndexer = require("basic-indexer");
```

ES6 module syntax
```js
import BasicIndexer from "basic-indexer";
```

Browser import the min.js file.
```js
<script type="text/javascript" src="basic-indexer.min.js"> 
```

## How to use

Methods:

- constructor(array, key = "id", keepIndex = false)
- getArray(url, name)
- get(indexes)
- set(index, object)

### Examples

Regular example

index.js
```js
const Indexer = require("basic-indexer").Indexer;

const index = new Indexer([
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
]);

const values = index.get(1, 3);

```
values contains:
[
  { name: "someName1" },
  { name: "someName3" },
]

Keeping the keys

```js
const Indexer = require("basic-indexer").Indexer;

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

const values = index.get(1, 2, 3);

```
values contains:
[
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
  }
]