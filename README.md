# pd-playground

### Install

```
npm i pd-playground
```

### Useage

```javascript
import React from "react";
import PdfPlayground from "pd-playground";

const App = () => {
  // initial code
  const initialCode = 'dd = {content: "Hello "}';

  // code state
  const [code, setCode] = React.useState(initialCode);

  return (
    <PdfPlayground code={code} setCode={setCode} />
  );
};

export default App;

### Version

### Local development

pull the repository to local
cd to 'pd-playground' folder

```
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
