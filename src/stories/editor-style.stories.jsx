import React from "react";
import Playground from "../components/code-editor/index";
import { EditorProvider } from "../components/code-editor/provider";
import "../components/code-editor/style.css";

export default {
  title: "Editor-style",
  component: Playground,
};

const Template = (args) => {
  return (
    <EditorProvider {...args}>
      <Playground />
    </EditorProvider>
  );
};

export const Question1 = Template.bind({});

Question1.args = {
  code: 'dd = {content: "Hello "}',
  cmeditor: true,
  darktheme: false,
};
