import React from 'react'
import Header from "./header/header";
import Footer from "./footer/footer";
import { EditorProvider } from "./components/code-editor/provider";
import Playground from "./components/code-editor";
import './components/code-editor/index.css';

const PdPlayground = () => {
  return (
    <>
      <EditorProvider>
        <Header />
        <Playground />
      </EditorProvider>
      <Footer />
    </>
  );
};

export default PdPlayground;

 

export { EditorProvider, Playground };