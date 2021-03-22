- [ ] npm : Node Package Manager
- [ ] npx : Node Package Executor
- [ ] nvm : Node Version Manager


#### To create react-app
##### Option 1
- [ ] `npx create-react-app [app-name]`
  - [ ] If it fails, first try: `npm -g uninstall create-react-app [app-name]`, then execute above command.

##### Option 2
- [ ] `npm init react-app [app-name]`

##### Option 3
- [ ] `npm init react-app [app-name]`

- [ ] Add `node_modules/` to .gitignore.
  - [ ] Or just copy the .gitignore file from the project created by .gitignore in the project one.

#### Importing modules in react
- [ ] If in documentation, its written,
  - [ ] var package = require('package') => import package from 'package'
  - [ ] var {package} = require('package') => import {package} from 'package'

### List of Useful Libraries
- [ ] numeral : To display large numbers in human readable format.
  - [ ] npm install numeral
  - [ ] import numeral from numeral
  - [ ] numeral(large_number).format('0.0a') // refer to doc for formats.
- [ ] highlight : To display codes of different languages with better syntax highlighting.
  - [ ] npm install highlight.js
  - [ ] Go to official page for custom download and usage.
- [ ] reactstrap : Bootstrap in react.

### 'global' object

# USEFUL GLOBAL MODULES
- [ ] console
- [ ] buffer
- [ ] fs
- [ ] http
- [ ] os
- [ ] path : Utility function sto work with path.
- [ ] ps : Information about process.
- [ ] querystring
- [ ] stream