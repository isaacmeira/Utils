const csvjson = require("csvjson");
const fs = require("fs");

fs.readFile("test-data.json", "utf-8", (err, fileContent) => {
  if (err) throw new Error(err);

  let csvData = csvjson.toCSV(fileContent, {
    headers: "key"
  });

  fs.writeFile("./test-data.csv", csvData, err => {
    if (err) throw new Error(err);

    console.log("Convertido !");
  });
});
