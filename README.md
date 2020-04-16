# color-groups
[![Build Status](https://travis-ci.org/MeanBoyCousin/color-groups.svg?branch=master) ](https://travis-ci.org/MeanBoyCousin/color-groups) [![npm version](http://img.shields.io/npm/v/color-groups.svg?style=flat)](https://npmjs.org/package/color-groups "View this project on npm") [![codecov](https://codecov.io/gh/MeanBoyCousin/color-groups/branch/master/graph/badge.svg)](https://codecov.io/gh/MeanBoyCousin/color-groups) [![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FMeanBoyCousin%2Fcolor-groups%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/MeanBoyCousin/color-groups/master)

> Find and display HTML colors by group or find the primary color that any named color belongs to.
>
> Based on [W3C named colors](https://www.w3schools.com/colors/colors_groups.asp).

## Install
```console
$ npm install color-groups
```

## Usage
```js
const colorGroups = require('color-groups')
```

### Find all the named colors that belong to one group.
```js
const oranges = colorGroups.get.orange    // [ 'orange', 'darkorange', 'coral', 'tomato', 'orangered' ]
```

### Find the main group that a named color belongs to.
```js
const primary = colorGroups.find('papayawhip')    // 'yellow'
```

### Find the main groups that many named colors belong to.
```js
const myColors = ['palevioletred', 'lemonchiffon', 'cornsilk']

const primaries = myColors.map(color => colorGroups.find(color))    // [ 'pink', 'yellow', 'brown' ]
```

## Authors
Tim Dunphy

## License
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.
