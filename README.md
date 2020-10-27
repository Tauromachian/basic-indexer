# Basic Indexer

The objective of this module is to create and manage a basic indexed collection

## How to import

CommonJS
```js
const Indexer = require("basic-indexer").Indexer;
```

ES6 module syntax
```js
import { Indexer } from "basic-indexer";
```

Browser import the min.js file.
```js
<script type="text/javascript" src="basic-indexer.min.js"> 
```

## How to use

Methods:

- constructor(array, key = "id", keepIndex = false)
- getArray(url, name)
- getAll()
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
const array = index.getArray()
const allValues = index.getAll()

```
values contains:
[
  { name: "someName1" },
  { name: "someName3" },
]

array contains:
[
  { id: 1, name: 'someName1' },
  { id: 2, name: 'someName2' },
  { id: 3, name: 'someName3' }
]

allValues contains:
{
  '1': { name: 'someName1' },
  '2': { name: 'someName2' },
  '3': { name: 'someName3' }
}

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
const array = index.getArray()
const allValues = index.getAll()

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

array contains:
[
  { id: 1, name: 'someName' },
  { id: 2, name: 'someName' },
  { id: 3, name: 'someName' }
]

allValues contains:
{
  '1': { id: 1, name: 'someName' },
  '2': { id: 2, name: 'someName' },
  '3': { id: 3, name: 'someName' }
}