# pd-playground

### Install

```
npm i pdmake-editor
```

### Useage

```javascript
import React from "react";
import PdfEditor from "pdfmake-editor

const App = () => {
  // initial code
  const initialCode = 'dd = {content: "Hello "}';

  // code state
  const [code, setCode] = React.useState(initialCode);

  return (
    <PdfEditor code={code} setCode={setCode} />
  );
};

export default App;
```

### Version

### Local development

pull the repository to local
cd to 'pd-playground' folder

```
npm link
```

Then go to Test folder

```
npm link pdfmake-editor
```

When you finish test remember to unlink by use

```
npm unlink pd-playground
```
