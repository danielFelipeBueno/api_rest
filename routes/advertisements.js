const express = require("express");
const {createAds, getAds, getAd, updateAd} = require("../controllers/advertisements");
const router = express.Router();
const {validatorCreateAd, validatorGetAd, validatorPostAd} = require("../validators/advertisements")

router.post('/create', validatorCreateAd, createAds);

router.get("/all_ads", getAds);

router.get("/id/:user_id", validatorGetAd, getAd);

router.put("/update/:id", validatorPostAd, validatorCreateAd, updateAd);

module.exports = router;