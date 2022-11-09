# pd-playground

### Install

```
npm i pd-playground
```

### Use PdfPlayground

```javascript
import React from "react";
import PdfPlayground from "pd-playground";

const App = () => {
  // initial code
  const initialCode = 'dd = {content: "Hello "}';

  // code state
  const [code, setCode] = React.useState(initialCode);

  // code and setCode is necessary
  // cmeditor is available default value is true. True mean use Codermirror.
  // darktheme is available default value is false. Change the theme for Codermirror.
  return (
    <PdfPlayground code={code} setCode={setCode} />
    // <PdfPlayground code={code} setCode={setCode} cmeditor={true} darktheme={false} />
  );
};

export default App;
```

### Use provider

```javascript
import React from "react";
import { EditorProvider, Playground } from "pd-playground";

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
      <Playground />
    </EditorProvider>
    // <EditorProvider code={code} setCode={setCode} cmeditor={true} darktheme={true}>
    //   <Playground />
    // </EditorProvider>
  );
};

export default App;
```

#### Samples

Use sample by import `mapForms` and `samples` javascript object.

```javascript
import { mapForms, samples } from "pd-playground";

...

return <PdfPlayground code={mapForms[Object.keys(mapForms)[0]]} />

```

### Local development

Pull the repository to local
cd to 'pd-playground' folder

```
npm i
npm link
npm link  'test react folder'/node_modules/react
```

Then go to Test folder

```
npm link pd-Playground
```

When you finish test remember to unlink by use

```
npm unlink pd-playground
```
