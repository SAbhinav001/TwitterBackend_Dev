const TweetService = require("../services/tweet-service");
const tweetService = new TweetService();

const upload = require("../config/file-upload-S3-config");

//cgane it to for multiple files
const singleUploader = upload.array("image",10);

const createTweet = async (req, res) => {
    try {
        singleUploader(req, res, async function (err, data) {
            if (err) {
                return res.status(500).json({ message: "something went wrong" });
            }
            console.log("img url is", req.files);

            const payload = {...req.body};
          
            //if there is multiple img files 
            if(req.files){
              const imgId =[]
              req.files.forEach(obj => {
                imgId.push(obj.location)
              });
              payload.image = imgId
            }

            const tweet = await tweetService.create(payload);
            return res.status(200).json({
                message: "sucessfully create  tweet",
                succes: true,
                data: tweet,
                error: {},
            });
            });
    } catch (error) {
        return res.status(500).json({
        message: "failed to create  tweet",
        succes: false,
        data: {},
        err: error,
        });
    }
};

const getTweet = async (req, res) => {
  try {
    // console.log(req.body)
    const tweet = await tweetService.get(req.params.id);
    return res.status(200).json({
      message: "sucessfully fetch new tweet",
      succes: true,
      data: tweet,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed to fetch  tweet",
      succes: false,
      data: {},
      err: error,
    });
  }
};

module.exports = {
  createTweet,
  getTweet,
};
