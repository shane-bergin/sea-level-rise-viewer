# CCC SEA LEVEL RISE VIEWER

> A visualization of sea level, showing flooding extent upon regional critical facilities and roads with related reference layers developed by the Cape Cod Commission of Barnstable County (MA). The application is based upon React Boilerplate and uses esri-leaflet, mobx and other dependencies.

## Local Docker Builds

``` bash
# Navigate to the project directory
cd sea-level-rise-viewer/

# Comment 2 step build blocks at top & uncomment docker start block below in Dockerfile
# & save changes

# Build services, volumes, and networks with docker-compose
docker-compose up --build

# Delete local services, networks, and volumes with docker-compose
docker-compose down -v
```

## GitFlow

> Create local feature branch off `dev`
> Rebase with `dev` once feature branch is complete

```bash

# Once changes are complete, rebase with 'dev' and resolve any conflicts
git rebase -i dev

# Checkout, merge, and push rebased changes into dev
git checkout dev
git merge feature-branch
git push origin dev
```

---

## Resources

### ReactJS Documentation

* [ReactJS](https://reactjs.org/docs/hello-world.html)

### Esri Leaflet Documentation

* [Esri Leaflet](http://esri.github.io/esri-leaflet/api-reference/)

### Examples

* [Demo app using React, Leaflet, and Esri](https://github.com/leogoesger/gis-leaflet)
* [React Leaflet Example](https://codepen.io/PaulLeCam/pen/XVPmmj)
* [Esri-React-Mobx-Webpack](https://github.com/geomarvel/esri-react-mobx-webpack)
* [ArcGIS API for JavaScript React](https://github.com/odoe/esrijs-react-demo)
* [Esri Leaflet Webpack Example](https://github.com/Esri/esri-leaflet-webpack-example)
* [Esri Espania List For Developers](https://esri-es.github.io/awesome-arcgis/)
* [Using React with Leaflet (and Esri Leaflet)](https://github.com/jgravois/developer-support/tree/82eea958b2fa909cdc3e1e13761f222a56795b2a/web-leaflet/react)
* [Testmap-esri-leaflet-react-react-dom-leaflet](https://github.com/forgo/testmap)

## React Boilerplate

[![Build Status](https://travis-ci.org/digiaonline/react-boilerplate.svg?branch=master)](https://travis-ci.org/digiaonline/react-boilerplate)
[![Test Coverage](https://lima.codeclimate.com/github/digiaonline/react-boilerplate/badges/coverage.svg)](https://lima.codeclimate.com/github/digiaonline/react-boilerplate/coverage)
[![Code Climate](https://codeclimate.com/github/digiaonline/react-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/digiaonline/react-boilerplate)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A [Digia](https://github.com/digiaonline/) project.

## Why do I want this?

As you probably know, there are numerous boilerplates available for [React](https://facebook.github.io/react/), so you might be wondering why you would want to use ours. Most of the boilerplate projects come with a lot of code that you rarely need. Our boilerplate was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and provides you with a great starting point for any React project with as few lines of code as possible, especially if you want to use [Flowtype](https://flowtype.org/).

## What do I need to get started?

* [Node](https://nodejs.org/en/download/) (version 6 or later)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## What's in the box?

* [Flowtype](https://flowtype.org/) Type checker
* [React](https://facebook.github.io/react/) User interface components
* [MobX](https://mobx.js.org/) Simple, scalable state management
* [Lodash](https://lodash.com/) Utility library
* [Babel](https://babeljs.io/) JavaScript transpiler
* [ESLint](http://eslint.org/) JavaScript Linter
* [Prettier](https://github.com/prettier/prettier) Code formatter
* [PostCSS](http://postcss.org/) CSS transformer
* [Stylelint](https://stylelint.io/) CSS Linter
* [Webpack](https://webpack.js.org/) Module bundler
* [Jest](https://facebook.github.io/jest/) Testing solution

## How do I use this?

You can find our documentation [here](./docs/README.md).

## Usage

### Create project

Install [create-project](https://www.npmjs.com/package/create-project) and create your project.

```bash
yarn global add create-project
create-project my-project digiaonline/react-boilerplate && cd my-project
```

### Install dependencies

Install the project dependencies using Yarn.

```bash
yarn
```

### Create the environment

Create your environment by copying the example environment.

```bash
cp .env.example .env
```

### Development server

You can start the development server with the `start` script.

```bash
yarn start
```

### Distribution build

You can compile the distribution build with the `build` script.

```bash
yarn build
```
## Test

### Test suite

You can run the test suite with the `test` script.

```bash
yarn test
```

## License

[MIT](LICENSE)
