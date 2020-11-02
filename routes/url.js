const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const config = require("config");
const shortid = require("shortid");

const Url = require("../models/Url");

// @route POST /api/url/shorten
// @desc Create Short Url
router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = config.get("baseUrl");

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base url");
  }

  // Create Url code
  const urlCode = shortid.generate();

  //check long url
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        return res.status(200).json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });
        await url.save();
        res.status(200).json(url);
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json("server Error");
    }
  } else {
    return res.status(401).json("Invalid longurl");
  }
});

module.exports = router;
