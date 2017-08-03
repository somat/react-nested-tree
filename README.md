# react-nested-tree

Nested tree component for React JS.

## Install

```$ npm install --save react-nested-tree```

## Example

```
import NestedTree from 'react-nested-tree'

let data = [
  {data: {name: 'First Node'}, children: [{data: {name: 'First child node'}, children:[]}]},
  {data: {name: 'Second Node'}, children: [{data: {name: 'Second child node'}, children:[]}]},
  {data: {name: 'Third Node'}, children: [{data: {name: 'Third child node'}, children:[{data:{name:'Third sub child'}, children:[]}]}]}
]

<NestedTree
  data={data}/>
```
