# pd-playground

### Install

```
npm i pd-playground
```

### Local testing

pull the repository to local
cd to 'pd-playground' folder

```
sudo npm link
sudo npm link  'test react folder'/node_modules/react
```

Then go to Test folder

```
npm link pd-Playground
```

When you finish test remember to unlink by use

```
npm unlink pd-playground
```

### Useage

```javascript
import React from "react";
import { EditorProvider, Playground } from "pd-playground";

const App = () => {
  const [code, setCode] = React.useState('dd = {content: "Hello "}');

  return (
    <EditorProvider code={code} setCode={setCode}>
      <Playground />
    </EditorProvider>
  );
};

export default App;
```

### Version

- 1.0.6 change export
- 1.0.5 fix some display bug, and try to build but fail.
- 1.0.4 fix the css style
- 1.0.3 fix the pdf can not display problem
- 1.0.2 fix the React not defined problem
- 1.0.1 fix the package.json problem
- 1.0.0 Test without build
