const fs = require("fs");
var path;
const AWS = require("aws-sdk");
const dotenv = require("dotenv");

dotenv.config();

const id = process.env.ACCESS_KEY;
const secret = process.env.SECRET_KEY;
const bucketName = process.env.BUCKET_NAME;

const s3 = new AWS.S3({
  accessKeyId: id,
  secretAccessKey: secret
});

const uploadFile = filename => {
  let readFileContent = fs.readFileSync(filename);
  let path = /[ \w-]+\.[ \w-]+/gm.exec(filename);
  console.log(path[0]);

  let uploadParams = {
    Bucket: bucketName,
    Key: path[0],
    Body: readFileContent
  };

  s3.upload(uploadParams, (err, data) => {
    if (err) throw err;

    console.log(`Upload com sucesso em ${data.Location} `);
  });
};

uploadFile("../dump-database-201906302242.sql");
