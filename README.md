<div align="center">
  <br>
  <br>
  <img src="logo.png" alt="The SPARQL Logo: Three circle nodes connected by edges, forming a triangle" width="256" height="256">

  <br>
</div>

# SPARQL.js Visualizer

> Visualization of the SPARQL JavaScript representation created by [SPARQL.js](https://npmjs.com/package/sparqljs)

This is the source code repository of the SPARQL.js Visualizer. You can find the app at [loilo.github.io/sparqljs-visualizer](https://loilo.github.io/sparqljs-visualizer/).

## Technologies

The core technologies this project uses are:

<!-- prettier-ignore -->
Technology | Purpose
-|-
**[Codemirror](https://codemirror.net/)** | A text/code editor, used for the editing area itself.
**[Nuxt](https://nuxt.com/)** | An application framework for Vue.js, used for prerendering, PWA support and overall application structure.
**[`SPARQL.js`](https://github.com/RubenVerborgh/SPARQL.js)** | SPARQL parser and code generator written in JavaScript.
**[`sparql-formatter`](https://github.com/sparqling/sparql-formatter)** | A SPARQL beautifier, used for formatting the SPARQL query.
**[GitHub Pages](https://pages.github.com/)** | This app does (purposefully) not generate any income. Therefore, free, scalable hosting is essential to keep it running.

## Setup

Clone this repository and install its dependencies using [npm](https://npmjs.com/).

```bash
npm ci
```

## Local Development

Start a local dev server with hot reloading:

```bash
npm run dev
```

## Generate Production Site

Create a production-ready site in the `dist` folder:

```
npm run generate
```

Set the `BASE_URL` environment variable to create a build that can be hosted in a subfolder of a domain, e.g.:

```
BASE_URL=/sparqljs-visualizer/ npm run generate
```
