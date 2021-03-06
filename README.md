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
const adtparser = require("adca-template-parser");
```

### We can now execute the adtparser binary:

```javascript
// This method will return every template in the ad. Not recommended.
adtparser.full(function (data) {
  console.log(data);
});
```

```javascript
// This method will return every template in the ad but breaks it down to name and friendly name. This is the recommended function because its output is minified down to two variables.
adtparser.minified(function (data) {
  console.log(data);
});
```

```javascript
// This method will retrieve the template by name. It will output a big json object containing every information about it.
adtparser.run(function (data) {
  console.log(data);
});
```

# Best Practise

I recommend running the `adtpaser.minified` method and store it into a select box for example.  
After the user selects a template call `adtparser.template` with the selected name and crawl the rest.  
Calling `adtparser.full` might lead to an overhead generated by the huge JSON object. It might also lead into JSON parsing errors.

> The last parameter of the function will always be the callback function.

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
