import React from "react";
import { Button, MenuItem } from "@mui/material";
import EditorContext from "../components/code-editor/provider";

// import sample files
import basics from "./sample-files/basics";
import styles1 from "./sample-files/styles1";
import styles2 from "./sample-files/styles2";
import styles3 from "./sample-files/styles3";
import columns from "./sample-files/columns";
import tables from "./sample-files/tables";
import lists from "./sample-files/lists";
import margin from "./sample-files/margin";
import images from "./sample-files/images";

const SampleFiles = (props) => {
  const samples = {
    BASICS: basics,
    STYLE1: styles1,
    STYLE2: styles2,
    STYLE3: styles3,
    COLUMNS: columns,
    TABLES: tables,
    LISTS: lists,
    MARGIN: margin,
    IMAGES: images,
  };
  const { setCode, setFilename } = React.useContext(EditorContext);
  const [loadingstate, setLoadingState] = React.useState(false);
  const loading = () => {
    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
    }, 0);
  };
  const openDoc = (e) => {
    console.log(`Loading ${e.target.value}`);
    setFilename(e.target.value);
    setCode(samples[e.target.value]);
    loading();
  };
  return (
    <>
      {Object.keys(samples).map((sample) => {
        return (
          <MenuItem
            key={sample}
            onClick={props.handleCloseNavMenu}
            style={{ minHeight: "48px", maxHeight: "48px" }}
          >
            <Button
              key={sample}
              value={sample}
              variant="text"
              onClick={openDoc}
              sx={{
                my: 2,
                color: "inherit",
                fontWeight: "bold",
                fontSize: "0.65rem",
              }}
              data-cy={sample}
              disabled={loadingstate}
            >
              {sample}
            </Button>
          </MenuItem>
        );
      })}
    </>
  );
};

export default SampleFiles;
