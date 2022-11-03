import React from "react";
import { EditorProvider } from "./components/code-editor/provider";
import Playground from "./components/code-editor";
import Header from "./header/header";
import Footer from "./footer/footer";

export { EditorProvider, Playground };

const PdfPlayground = () => {
  // initial code
  const initialCode = 'dd = {content: "Hello "}';

  // code state
  const [code, setCode] = React.useState(initialCode);

  return (
    <>
      <EditorProvider code={code} setCode={setCode}>
        <Header />
        <Playground />
      </EditorProvider>
      <Footer />
    </>
  );
};

export default PdfPlayground;
