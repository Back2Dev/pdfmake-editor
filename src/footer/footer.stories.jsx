import React from "react";
import Footer from "./footer";
import '../components/code-editor/index.css';

export default {
  title: "pdmake/Footer",
  component: Footer,
  argTypes: {
    bgColor: { control: "color" },
    fColor: { control: "color" },
  },
};

const Template = (args) => <Footer {...args} />;

export const Right = Template.bind({});

Right.args = {
  alignment: "right",
};
export const Left = Template.bind({});

Left.args = {
  alignment: "left",
};

export const Center = Template.bind({});

Center.args = {
  alignment: "center",
};

export const Small = Template.bind({});

Small.args = {
  fSize: "small",
};

export const Medium = Template.bind({});

Medium.args = {
  fSize: "medium",
};

export const Large = Template.bind({});

Large.args = {
  fSize: "large",
};

export const BgGrey = Template.bind({});

BgGrey.args = {
  bgColor: "grey",
};

export const BgBlue = Template.bind({});

BgBlue.args = {
  bgColor: "#1c76d2",
};

export const BgWhite = Template.bind({});

BgWhite.args = {
  fColor: "black",
  bgColor: "white",
};

export const BgBlack = Template.bind({});

BgBlack.args = {
  bgColor: "black",
};
