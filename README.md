# Node.JS Active Directory Certificate Template Parser

This package provides an easy way to parse all templates from ADCA service.
It's packed with a binary for calling `certutil -v -template` which then puts everything in a JSON array object.

The library retrieves every single option of the certificate template.

> Caution! Even if the binary is optimized for speed, it might still need some time to process large active directory template stores!

# Installation & Usage

```bash
foo@bar: npm install adca-template-parser --save
```

### Import openssl module:

```javascript
const adtparser = require("adtparser");
```

### We can now execute the adtparser binary:

```javascript
adtparser.run(function (data) {
  // the data object will contain every process output
  console.log(data);
});
```

> The parameter of the function `run` will always be the callback function.

The Library will call this function with all return values of the process:

> Important: "processError" is not directly a sign of an error, consider hasError as the primary detection. Check [this Article](https://unix.stackexchange.com/questions/131394/why-does-openssl-print-to-stderr-for-a-successful-command) for more information about how openssl for example handles `stderr`.

```js
[
  (processError: ""),
  (processOutput: "[{...}, {...}]"),
  (processExitCode: 0), // <- That's the important one!
  (hasError: false),
];
```

---

That's all that you need to start using it.  
For any information, improvements or bug fixes please contact me.
