import React, { useRef, useEffect, useState } from "react";
import Split from "react-split";
import { Box, Grid, FormGroup, Button } from "@mui/material";
// codeeditor dependencies
import prettier from "prettier/standalone";
import babelParser from "prettier/parser-babel";

import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import { basicSetup } from "codemirror";
import { lintKeymap } from "@codemirror/lint";

import "../code-editor/style.css";

// pdfmake dependencies
import pdfMake from "pdfmake/build/pdfmake";

pdfMake.fonts = {
  // download default Roboto font from cdnjs.com
  Roboto: {
    normal:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
    bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
    italics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
    bolditalics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
  },
};

let myTheme = EditorView.theme(
  {
    "&": {
      color: "#034",
      backgroundColor: "white",
    },
    ".cm-content": {
      caretColor: "#0e9",
    },
    "&.cm-focused .cm-cursor": {
      borderLeftColor: "#0e9",
    },
    "&.cm-focused .cm-selectionBackground, ::selection": {
      backgroundColor: "#074",
    },
    ".cm-gutters": {
      backgroundColor: "#045",
      color: "#ddd",
      border: "none",
    },
  },
  { dark: true }
);
import { oneDarkTheme } from "@codemirror/theme-one-dark";

const PdfEditor = ({ code, setCode, cmeditor = true, darktheme = false }) => {
  const [err, setErr] = React.useState("");
  const editor = useRef();
  const view = useRef();

  const [inputValue, setInputValue] = useState(code);
  const debouncedInputValue = useDebounce(inputValue, 1000);

  useEffect(() => {
    if (debouncedInputValue) {
      setCode(inputValue);
    }
  }, [debouncedInputValue]);

  const errStyle = {
    color: "red",
    backgroundColor: "blanchedalmond",
    paddingLeft: "2vw",
    height: "fit-content",
  };

  const onUpdate = EditorView.updateListener.of(({ state }) => {
    onChange({ target: { value: state.doc.toString() } });
  });

  const theme = darktheme ? oneDarkTheme : myTheme;

  useEffect(() => {
    const startState = EditorState.create({
      doc: code,
      extensions: [
        basicSetup,
        keymap.of([defaultKeymap, indentWithTab, lintKeymap]),
        onUpdate,
        javascript(),
        theme,
      ],
    });

    view.current = new EditorView({ state: startState, parent: editor.current });

    return () => {
      view.current.destroy();
    };
  }, [darktheme]);

  useEffect(() => {
    if (view.current && view.current.state.doc.toString() !== code) {
      view.current.dispatch({
        changes: { from: 0, to: view.current.state.doc.length, insert: code },
      });
    }
  }, [code]);

  const formatCode = () => {
    const formatted = prettier.format(code, {
      useTabs: false,
      printWidth: 90,
      tabWidth: 2,
      singleQuote: true,
      semi: false,
      parser: "babel",
      plugins: [babelParser],
    });
    setCode(formatted);
  };

  let dd = {};

  const makePdf = () => {
    try {
      const docDefinition = eval(code);
      const pdfDocGenerator = pdfMake.createPdf(docDefinition);
      pdfDocGenerator.getDataUrl((dataUrl) => {
        const targetElement = document.getElementById("pdfView");
        targetElement.src = dataUrl;
        setErr("");
      });
    } catch (e) {
      console.log("error message: ", e);
      setErr(`Error: ${e.message}`);
    }
  };

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    makePdf();
  }, [code]);

  // console.log(code);

  return (
    <>
      <Grid container className="main-area">
        <Box sx={{ height: 1 }} width="100vw">
          <Split sx={{ height: 1 }} className="split">
            <Grid sx={{ height: 1 }} item>
              <Box
                sx={{
                  bgcolor: "#2a313e",
                  height: 1,
                  color: "#ffffff",
                  overflowY: "scroll",
                }}
              >
                {cmeditor && <div ref={editor} onChange={onChange}></div>}
                {false && <div className="cm-editor" />}
                {!cmeditor && (
                  <textarea
                    className="text-editor"
                    id="textarea"
                    name="textarea"
                    data-cy="typeinarea"
                    style={{ width: "100%" }}
                    value={inputValue}
                    onChange={({ target: { value } }) => {
                      setInputValue(value);
                    }}
                  >
                    {code}
                  </textarea>
                )}
                {err && (
                  <div
                    data-cy="error-bar"
                    style={
                      err
                        ? errStyle
                        : {
                            display: "none",
                          }
                    }
                  >
                    {err}
                  </div>
                )}
                <FormGroup>
                  <Button
                    onClick={formatCode}
                    data-cy="format"
                    variant="outlined"
                    style={{ margin: "0px", padding: "0px", height: "20px" }}
                  >
                    Format
                  </Button>
                </FormGroup>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{ bgcolor: "#cccccc", height: "100%", color: "#FFFFFF" }}
                id="iframeContainer"
              >
                <iframe id="pdfView" src="" data-cy="pdfmake"></iframe>
              </Box>
            </Grid>
          </Split>
        </Box>
      </Grid>
    </>
  );
};

export default PdfEditor;

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
