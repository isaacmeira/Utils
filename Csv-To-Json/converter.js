const csvjson = require("csvjson");
const fs = require("fs");

fs.readFile("./test.csv", "utf-8", (err, fileContent) => {
  if (err) throw new Error(err);

  let jsonObj = csvjson.toObject(fileContent);
  jsonObj = JSON.stringify(jsonObj);

  fs.writeFile("test.json", jsonObj, err => {
    if (err) throw err;
    console.log("Convertido !");
  });
});
