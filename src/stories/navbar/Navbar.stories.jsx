import React from "react";
import Navbar from "./navbar";
import "./navbar.css";

export default {
  title: "pdmake/Navbar",
  component: Navbar,
  // argTypes: {
  //   color: {control: 'color'},
  //   backgroundColor: { control: 'color' },
  //   fontSize: { control: 'select', options: ['1rem', '1.5rem', '2rem', '2.5rem', '3rem', '3.5rem']},
  // },
};

const Template = (args) => <Navbar {...args} />;

export const NavbarColorAndSize = Template.bind({});
NavbarColorAndSize.args = {
  // text: 'Back2dev',
};

export const NavbarIcon1 = Template.bind({});
NavbarIcon1.args = {
  // text: 'Back2dev',
};
