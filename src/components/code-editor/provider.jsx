import React from "react";

const EditorContext = React.createContext("editor");
export default EditorContext;

// Reducer Function
function editorReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "setCode":
      return { ...state, code: payload };
    case "setFilename":
      return { ...state, filename: payload };
    case "setDarkTheme":
      return { ...state, darktheme: payload };
    case "setCmeditor":
      return { ...state, cmeditor: payload };
    case "setErr":
      return { ...state, err: payload };
    default:
      return state;
  }
}

// Provider
export const EditorProvider = ({
  children,
  code,
  setCode,
  darktheme = false,
  cmeditor = true,
}) => {
  const [state, dispatch] = React.useReducer(editorReducer, {
    filename: "New File",
    err: "",
    darktheme: darktheme,
    cmeditor: cmeditor,
  });

  setCode = setCode
    ? setCode
    : (data) => {
        dispatch({ type: "setCode", payload: data });
      };
  const setFilename = (data) => {
    dispatch({ type: "setFilename", payload: data });
  };
  const setDarkTheme = (data) => {
    dispatch({ type: "setDarkTheme", payload: data });
  };
  const setCmeditor = (data) => {
    dispatch({ type: "setCmeditor", payload: data });
  };
  const setErr = (data) => {
    dispatch({ type: "setErr", payload: data });
  };

  return (
    <EditorContext.Provider
      value={{
        ...state,
        code,
        setCode,
        darktheme,
        cmeditor,
        setFilename,
        setCmeditor,
        setDarkTheme,
        setErr,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
