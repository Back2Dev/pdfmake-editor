import React from "react";
import { EditorProvider } from "./components/code-editor/provider.jsx";
import EditorPlayground from "./components/code-editor/editor-playground.jsx";
import PdfEditor from "./components/code-editor-state/pdf-editor.jsx";

import basics from "./sample/sample-files/basics";
import styles1 from "./sample/sample-files/styles1";
import styles2 from "./sample/sample-files/styles2";
import styles3 from "./sample/sample-files/styles3";
import columns from "./sample/sample-files/columns";
import tables from "./sample/sample-files/tables";
import lists from "./sample/sample-files/lists";
import margin from "./sample/sample-files/margin";

import Q1 from "./sample/map-forms/q1";
import Q2 from "./sample/map-forms/q2";
import Q4 from "./sample/map-forms/q4";
import Q5 from "./sample/map-forms/q5";
import Q8 from "./sample/map-forms/q8";
import Q10 from "./sample/map-forms/q10";
import Q11 from "./sample/map-forms/q11";
import Q12 from "./sample/map-forms/q12";
import Q18 from "./sample/map-forms/q18";

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

const mapForms = {
  q1: Q1,
  q2: Q2,
  q4: Q4,
  q5: Q5,
  q8: Q8,
  q10: Q10,
  q11: Q11,
  q12: Q12,
  q18: Q18,
};

export { EditorProvider, EditorPlayground, mapForms, samples };

export default PdfEditor;
