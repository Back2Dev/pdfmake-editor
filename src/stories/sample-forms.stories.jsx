import React from "react";
import Playground from "../components/code-editor/index";
import { EditorProvider } from "../components/code-editor/provider";
import "../components/code-editor/style.css";

import basics from "../sample/sample-files/basics";
import styles1 from "../sample/sample-files/styles1";
import styles2 from "../sample/sample-files/styles2";
import styles3 from "../sample/sample-files/styles3";
import columns from "../sample/sample-files/columns";
import tables from "../sample/sample-files/tables";
import lists from "../sample/sample-files/lists";
import margin from "../sample/sample-files/margin";

export default {
  title: "Sample-Forms",
  component: Playground,
};
const samples = {
  BASICS: basics,
  STYLE1: styles1,
  STYLE2: styles2,
  STYLE3: styles3,
  COLUMNS: columns,
  TABLES: tables,
  LISTS: lists,
  MARGIN: margin,
};

const Template = (args) => {
  return (
    <EditorProvider {...args}>
      <Playground />
    </EditorProvider>
  );
};

export const BASICS = Template.bind({});

BASICS.args = {
  code: samples.BASICS,
};

export const STYLE1 = Template.bind({});
STYLE1.args = {
  code: samples.STYLE1,
};

export const STYLE2 = Template.bind({});
STYLE2.args = {
  code: samples.STYLE2,
};

export const STYLE3 = Template.bind({});
STYLE3.args = {
  code: samples.STYLE3,
};

export const COLUMNS = Template.bind({});
COLUMNS.args = {
  code: samples.COLUMNS,
};

export const TABLES = Template.bind({});
TABLES.args = {
  code: samples.TABLES,
};

export const LISTS = Template.bind({});
LISTS.args = {
  code: samples.LISTS,
};

export const MARGIN = Template.bind({});
MARGIN.args = {
  code: samples.MARGIN,
};
