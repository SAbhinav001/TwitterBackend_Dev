const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const dotenv = require("dotenv");

dotenv.config();

aws.config.update({
  region: process.env.AWS_REGION,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.ACCESS_KEY_ID,
});

const s3 = new aws.S3();

// upload config
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    metadata: function (req, file, cb) {
     
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
    
      cb(null, Date.now().toString());
    },
  }),
});

module.exports  = upload 
