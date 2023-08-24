import React, { useRef, useEffect, useCallback, useState } from 'react'
import EditorContext from './provider'
import { Box, Grid } from '@mui/material'
import Alert from '@mui/material/Alert'
import Fab from '@mui/material/Fab'
// codeeditor dependencies
import prettier from 'prettier/standalone'
import babelParser from 'prettier/parser-babel'
import { EditorState } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { defaultKeymap, indentWithTab } from '@codemirror/commands'
import { javascript } from '@codemirror/lang-javascript'
import { basicSetup } from 'codemirror'
import { lintKeymap } from '@codemirror/lint'

import './style.css'

// pdfmake dependencies
import pdfMake from 'pdfmake/build/pdfmake'
// import * as pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  // download default Roboto font from cdnjs.com
  Roboto: {
    normal:
      'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
    bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
    italics:
      'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
    bolditalics:
      'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf',
  },
}

let myTheme = EditorView.theme(
  {
    '&': {
      color: '#034',
      backgroundColor: 'white',
    },
    '.cm-content': {
      caretColor: '#0e9',
    },
    '&.cm-focused .cm-cursor': {
      borderLeftColor: '#0e9',
    },
    '&.cm-focused .cm-selectionBackground, ::selection': {
      backgroundColor: '#074',
    },
    '.cm-gutters': {
      backgroundColor: '#045',
      color: '#ddd',
      border: 'none',
    },
    '&.cm-editor': {
      height: '100%',
    },
  },
  { dark: true }
)
import { oneDarkTheme } from '@codemirror/theme-one-dark'

const Playground = () => {
  const { cmeditor, err, setErr, code, setCode, darktheme, sampleData, height } =
    React.useContext(EditorContext)
  const editor = useRef()
  const view = useRef()

  const [inputValue, setInputValue] = useState(code)
  const debouncedInputValue = useDebounce(inputValue, 1000)

  useEffect(() => {
    if (debouncedInputValue) {
      setCode(inputValue)
    }
  }, [debouncedInputValue])

  const errStyle = {
    color: 'red',
    backgroundColor: 'blanchedalmond',
    paddingLeft: '2vw',
    height: 'fit-content',
  }

  const onUpdate = EditorView.updateListener.of(({ state }) => {
    onChange({ target: { value: state.doc.toString() } })
  })

  const theme = darktheme ? oneDarkTheme : myTheme

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
    })

    view.current = new EditorView({ state: startState, parent: editor.current })

    return () => {
      view.current.destroy()
    }
  }, [darktheme])

  useEffect(() => {
    if (view.current && view.current.state.doc.toString() !== code) {
      view.current.dispatch({
        changes: { from: 0, to: view.current.state.doc.length, insert: code },
      })
    }
  }, [code])

  const formatCode = () => {
    const formatted = prettier.format(code, {
      useTabs: false,
      printWidth: 90,
      tabWidth: 2,
      singleQuote: true,
      semi: false,
      parser: 'babel',
      plugins: [babelParser],
    })
    setCode(formatted)
  }

  const makePdf = () => {
    try {
      const docDefinition = eval(sampleData ? textMerge(code, sampleData) : code)
      const pdfDocGenerator = pdfMake.createPdf(docDefinition)
      pdfDocGenerator.getDataUrl((dataUrl) => {
        const targetElement = document.getElementById('pdfView')
        targetElement.src = dataUrl
        setErr('')
      })
    } catch (e) {
      console.log('error message: ', e)
      setErr(`Error: ${e.message}`)
    }
  }

  const onChange = (event) => {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    makePdf()
  }, [code, sampleData])

  return (
    <Box width="95vw">
      <Grid container>
        <Grid item xs={6} sx={{ position: 'relative' }}>
          <Fab
            variant="extended"
            onClick={formatCode}
            data-cy="format"
            color="primary"
            size="medium"
            sx={{ position: 'absolute', bottom: 10, right: 20, zIndex: 100 }}
          >
            Format
          </Fab>
          <Box
            sx={{
              bgcolor: '#2a313e',
              color: '#ffffff',
              overflowY: 'scroll',
              height: height || '900px',
            }}
          >
            {cmeditor && <div ref={editor} onChange={onChange}></div>}
            {!cmeditor && (
              <textarea
                className="text-editor"
                id="textarea"
                name="textarea"
                data-cy="typeinarea"
                style={{ width: '100%' }}
                value={inputValue}
                onChange={({ target: { value } }) => {
                  setInputValue(value)
                }}
              >
                {code}
              </textarea>
            )}
            {err && (
              <Alert
                severity="error"
                sx={{ position: 'absolute', bottom: 10, zIndex: 100 }}
              >
                {err}
              </Alert>
            )}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{ bgcolor: '#cccccc', color: '#FFFFFF', height: '100%' }}
            id="iframeContainer"
          >
            <iframe id="pdfView" src="" data-cy="pdfmake"></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Playground

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}

function textMerge(buf, context, limit = 50) {
  let n = 0
  let merged = buf
  done = false
  while (!done) {
    const m = merged.match(/\{\{([a-z0-9_\.]+)\}\}/i)
    if (m) {
      const newValue = accessByPath(context, m[1]) || `Missing: [${m[1]}]`
      // debug(`Found ${m[1]} => ${newValue}`)
      const re = new RegExp(`{{${m[1]}}}`, 'gi')
      if (typeof newValue === 'string') merged = merged.replace(re, newValue)
      else {
        merged = newValue
        done = true
      }
      n = n + 1
      if (n > limit) done = true
    } else done = true
  }
  return merged
}

function accessByPath(obj, path) {
  if (typeof path !== 'string') return ''
  const paths = path.split(/[\.\/]/g)
  return paths.reduce((acc, path) => {
    if (!acc) return ''
    if (acc[path]) return acc[path] || ''
    return ''
  }, obj)
}
