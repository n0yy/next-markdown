---
title: "Markdown One"
subtitle: "Create an AWS account and set up CLI/SDK access."
date: "2020-12-21"
---

# Adding or modifying rules

## Default renderer rules

Rules on how to translate markdown content to HTML elements are stored in `renderer.rules`:

```javascript
const MarkdownIt = require("markdown-it");
const md = new MarkdownIt();
console.log(Object.keys(md.renderer.rules));
```

Output:

```javascript
[
  "code_inline",
  "code_block",
  "fence",
  "image",
  "hardbreak",
  "softbreak",
  "text",
  "html_block",
  "html_inline",
];
```

These are the default renderer rules. For any element that is not explicitly listed in this array its default rule applies. For example the rule `bullet_list_open` is not defined, so when markdown-it tries to parse a list to HTML it defaults to ua generic renderer called `Renderer.prototype.renderToken`.

## The demo tool

You can use the [demo tool](https://markdown-it.github.io/) to see which specific rule name corresponds to which HTML tag (switch to the debug tab in the output).

Let's use a Hello World example:
[Link to Demo](https://markdown-it.github.io/#md3=%7B%22source%22%3A%22-%20Hello%20World%22%2C%22defaults%22%3A%7B%22html%22%3Afalse%2C%22xhtmlOut%22%3Afalse%2C%22breaks%22%3Afalse%2C%22langPrefix%22%3A%22language-%22%2C%22linkify%22%3Afalse%2C%22typographer%22%3Afalse%2C%22_highlight%22%3Afalse%2C%22_strict%22%3Afalse%2C%22_view%22%3A%22debug%22%7D%7D)
