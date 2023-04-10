---
title: "Markdown Two"
subtitle: "Create an AWS account and set up CLI/SDK access."
date: "2020-08-27"
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
