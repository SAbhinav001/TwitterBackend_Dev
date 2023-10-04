const TweetService = require("../services/tweet-service");
const tweetService = new TweetService();

const upload = require("../config/file-upload-S3-config");


const singleUploader = upload.single("image");

const createTweet = async (req, res) => {
    try {
        singleUploader(req, res, async function (err, data) {
            if (err) {
                return res.status(500).json({ message: "something went wrong" });
            }
            console.log("img url is", req.file);
            console.log(req.body)

            const payload = {...req.body};
           console.log(payload)
          payload.image = [req.file.location]
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
