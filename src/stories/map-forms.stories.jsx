import React from "react";
import Playground from "../components/code-editor/index";
import { EditorProvider } from "../components/code-editor/provider";
import "../components/code-editor/style.css";
import Q1 from "../sample/map-forms/q1";
import Q2 from "../sample/map-forms/q2";
import Q4 from "../sample/map-forms/q4";
import Q5 from "../sample/map-forms/q5";
import Q8 from "../sample/map-forms/q8";
import Q10 from "../sample/map-forms/q10";
import Q11 from "../sample/map-forms/q11";
import Q12 from "../sample/map-forms/q12";
import Q18 from "../sample/map-forms/q18";

export default {
  title: "MAP-Forms",
  component: Playground,
};
const data = {
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

const Template = (args) => {
  return (
    <EditorProvider {...args}>
      <Playground />
    </EditorProvider>
  );
};

export const Question1 = Template.bind({});

Question1.args = {
  code: data.q1,
};

export const Question2 = Template.bind({});

Question2.args = {
  code: data.q2,
};

export const Question4 = Template.bind({});

Question4.args = {
  code: data.q4,
};
export const Question5 = Template.bind({});

Question5.args = {
  code: data.q5,
};
export const Question8 = Template.bind({});

Question8.args = {
  code: data.q8,
};
export const Question10 = Template.bind({});

Question10.args = {
  code: data.q10,
};
export const Question11 = Template.bind({});

Question11.args = {
  code: data.q11,
};
export const Question12 = Template.bind({});

Question12.args = {
  code: data.q12,
};
export const Question18 = Template.bind({});

Question18.args = {
  code: data.q18,
};
