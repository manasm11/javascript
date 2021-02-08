- [ ] Two types of export elements
  - [ ] default export
  ```js
    // file1.js
    // Exporting classes as default
    // method 1
    export default class Test{}
    //method 2
    class Test2{}
    export default Test2
    ```
    ```js
    // file2.js
    // Exporting functions as default
    // method 1
    export default function test(){}
    // method 2
    function test2(){}
    export default test2
    ```
    ```js
    // file3.js
    // Exporting objects as default
    // method 1
    export default const var1 = "var1"
    // method 2
    const var2 = {'var': 2}
    export default var2
    ```
    - [ ] Has to be unique
    - [ ] Can be renamed while importing just by defining new_name.
    ```js
    import test from './file1.js'
    import test_renamed from './file1.js'
    ```
    import 
    
  - [ ] export
  ```js
  // fyle1.js
  export class Hello{}
  ```
    - [ ] Can be multiple
    - [ ] Need to be imported inside {}
    - [ ] Can be renamed by using as keyword
    ```js
    import {Hello} from './fyle1'
    import {Hello as h} from './fyle1'
    ```

- [ ] To club many react components into one module,
  - [ ] Inside a directory, create index.js
    - [ ] index.js imports all components from other js files in the directory and exports them in a {}.
  - [ ] To import module from other js files, just import the directory module.