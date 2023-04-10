import React from "react";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

export default function CodeBlock({ lang, children }) {
  return (
    <SyntaxHighlighter language={lang} style={materialDark}>
      {children}
    </SyntaxHighlighter>
  );
}
