import React from "react";
import { Button, MenuItem } from "@mui/material";
import EditorContext from "../components/code-editor/provider";

const PdfOptions = (props) => {
  const { code } = React.useContext(EditorContext);
  const buttonStyle = {
    color: "inherit",
    fontWeight: "bold",
    fontSize: "0.65rem",
  };
  let dd;
  return (
    <>
      <MenuItem onClick={props.handleClosePdfMenu}>
        <Button
          variant="text"
          onClick={() => pdfMake.createPdf(eval(code)).open()}
          id="open-pdf"
          sx={buttonStyle}
        >
          OPEN
        </Button>
      </MenuItem>
      <MenuItem onClick={props.handleClosePdfMenu}>
        <Button
          variant="text"
          onClick={() => pdfMake.createPdf(eval(code)).print()}
          id="print-pdf"
          sx={buttonStyle}
        >
          PRINT
        </Button>
      </MenuItem>
      <MenuItem onClick={props.handleClosePdfMenu}>
        <Button
          variant="text"
          onClick={() => pdfMake.createPdf(eval(code)).download()}
          id="download-pdf"
          sx={buttonStyle}
        >
          DOWNLOAD
        </Button>
      </MenuItem>
    </>
  );
};

export default PdfOptions;
