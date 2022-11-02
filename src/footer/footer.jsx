import React from "react";
import PropTypes from "prop-types";

export const Footer = ({
  text,
  bgColor,
  fColor,
  alignment,
  fSize,
}) => {
  return (
    <div
      className={["footer", `footer-${alignment}`, `footer-${fSize}`].join(" ")}
      style={{ backgroundColor: `${bgColor}`, color: `${fColor}` }}
    >
      {text}
    </div>
  );
};

Footer.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  fColor: PropTypes.string,
  alignment: PropTypes.oneOf(["left", "right", "center"]),
  fSize: PropTypes.oneOf(["small", "medium", "large"]),
};

Footer.defaultProps = {
  bgColor: "#1c76d2",
  fColor: "white",
  alignment: "center",
  fSize: "medium",
  text: "Copyright © : Back2dev ",
};
export default Footer;
