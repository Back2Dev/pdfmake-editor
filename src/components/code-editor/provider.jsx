import React from 'react'

const EditorContext = React.createContext('editor')
export default EditorContext

// Reducer Function
function editorReducer(state, action) {
  const { type, payload } = action
  switch (type) {
    // case "setCode":
    //   return {
    //     ...state,
    //     code: payload,
    //   };
    case 'setFilename':
      return {
        ...state,
        filename: payload,
      }
    case 'setDarkTheme':
      return {
        ...state,
        darktheme: payload,
      }
    case 'setCmeditor':
      return {
        ...state,
        cmeditor: payload,
      }
    case 'setErr':
      return {
        ...state,
        err: payload,
      }
    default:
      return state
  }
}

// Provider
export const EditorProvider = ({ children, code, setCode, sampleData, height }) => {
  const [state, dispatch] = React.useReducer(editorReducer, {
    // code: source || 'dd = {content: "Hello "}',
    filename: 'New File',
    darktheme: false,
    cmeditor: true,
    err: '',
  })
  // const setCode = (data) => {
  //   dispatch({ type: "setCode", payload: data });
  // };
  const setFilename = (data) => {
    dispatch({ type: 'setFilename', payload: data })
  }
  const setDarkTheme = (data) => {
    dispatch({ type: 'setDarkTheme', payload: data })
  }
  const setCmeditor = (data) => {
    dispatch({ type: 'setCmeditor', payload: data })
  }
  const setErr = (data) => {
    dispatch({ type: 'setErr', payload: data })
  }

  return (
    <EditorContext.Provider
      value={{
        ...state,
        code,
        setCode,
        setFilename,
        setCmeditor,
        setDarkTheme,
        setErr,
        sampleData,
        height,
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}
