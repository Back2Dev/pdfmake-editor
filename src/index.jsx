import React from 'react'
import { EditorProvider } from './components/code-editor/provider'
import Playground from './components/code-editor'

export { EditorProvider, Playground }

const PdfPlayground = ({ code, setCode, sampleData, height }) => {
  return (
    <EditorProvider code={code} setCode={setCode} sampleData={sampleData} height={height}>
      <Playground />
    </EditorProvider>
  )
}

export default PdfPlayground
