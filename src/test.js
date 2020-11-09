const x = require(".\\index.js");

x.template("Administrator", function (data) {
  console.log(JSON.parse(data.processOutput));
  // console.log(data);
});
