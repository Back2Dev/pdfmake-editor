import React from "react";
import EditorPlayground from "../components/code-editor/editor-playground";
import { EditorProvider } from "../components/code-editor/provider";
import "../components/code-editor/style.css";

export default {
  title: "Editor-style",
  component: EditorPlayground,
};

const Template = (args) => {
  return (
    <EditorProvider {...args}>
      <EditorPlayground />
    </EditorProvider>
  );
};

export const Style = Template.bind({});

Style.args = {
  code: 'dd = {content: "Hello "}',
  cmeditor: true,
  darktheme: false,
};
