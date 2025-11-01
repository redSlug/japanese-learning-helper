import React from "react";
import "./TextLine.css";

type TextLineProps = {
  children: React.ReactNode;
  kind?: "hiragana" | "romanji" | "english";
};

export function TextLine({ children, kind = "english" }: TextLineProps) {
  return <div className={`card-text card-text--${kind}`}>{children}</div>;
}

export default TextLine;
