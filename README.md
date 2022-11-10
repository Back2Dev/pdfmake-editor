# pdfmake-editor

### Install

```
npm i pdfmake-editor
```

### Use PdfEditor only

```javascript
import React from "react";
import PdfEditor from "pdfmake-editor";

const App = () => {
  // initial code
  const initialCode = 'dd = {content: "Hello "}';

  // code state
  const [code, setCode] = React.useState(initialCode);

  // code and setCode is necessary
  // cmeditor is available default value is true. True mean use Codermirror.
  // darktheme is available default value is false. Change the theme for Codermirror.
  return (
    <PdfEditor code={code} setCode={setCode} />
    // <PdfEditor code={code} setCode={setCode} cmeditor={true} darktheme={false} />
  );
};

export default App;
```

### Use provider

```javascript
import React from "react";
import { EditorProvider, EditorPlayground } from "pdfmake-editor";

const App = () => {
  // initial code
  const initialCode = 'dd = {content: "Hello "}';

  // code state
  const [code, setCode] = React.useState(initialCode);

  // code and setCode is necessary
  // cmeditor default value is true.
  // darktheme default value is false.
  return (
    <EditorProvider code={code} setCode={setCode}>
      <EditorPlayground />
    </EditorProvider>
    // <EditorProvider code={code} setCode={setCode} cmeditor={true} darktheme={true}>
    //   <EditorPlayground />
    // </EditorProvider>
  );
};

export default App;
```

#### Samples

Use sample by import `mapForms` and `samples` javascript object.

```javascript
import React from "react";
import { mapForms, samples } from "pdfmake-editor";
import PdfEditor from "pdfmake-editor";

const App = () => {
  const [code, setCode] = React.useState(mapForms[Object.keys(mapForms)[0]]);
  return <PdfEditor code={code} setCode={setCode} />;
};

export default App;
```

### Local development

Pull the repository to local
cd to 'pdfmake-editor' folder

```
npm i
npm link
npm link  'test react folder'/node_modules/react
```

Then go to Test folder

```
npm link pdfmake-editor
```

When you finish test remember to unlink by use

```
npm unlink pdfmake-editor
```
