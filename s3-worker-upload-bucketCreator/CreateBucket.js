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

const uploadParams = {
  Bucket: bucketName
};

s3.createBucket(uploadParams, (err, data) => {
  if (err) console.log(err, err.stack);
  else console.log("Bucket Criado com sucesso", data.Location);
});
