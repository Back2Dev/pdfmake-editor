import React from "react";
import { EditorProvider } from "./components/code-editor/provider";
import Playground from "./components/code-editor";

export { EditorProvider, Playground };

const PdfPlayground = ({ code, setCode, cmeditor = true, darktheme = false }) => {
  cmeditor = cmeditor;
  darktheme = darktheme;
  return (
    <>
      <EditorProvider
        code={code}
        setCode={setCode}
        darktheme={darktheme}
        cmeditor={cmeditor}
      >
        <Playground />
      </EditorProvider>
    </>
  );
};

export default PdfPlayground;
