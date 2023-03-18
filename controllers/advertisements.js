const { advertisementsModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const mongoose = require('mongoose');

// const ObjectId = mongoose.ObjectId;
/**
 * si
 * @param {*} req
 * @param {*} res
 */


const getAds = async (req, res) => {
  try {
    const data = await advertisementsModel.find({});
    res.send({ data });
    // console.log("getAds working (DATA): ", data);
  } catch (error) {
    // console.log("getAds error: ", error);
    handleHttpError(req, "ERROR_LIST_GET_ADS");
  }
};

const getAd = async (req, res) => {
  try {
    const {user_id} = matchedData(req);
    const data = await advertisementsModel.find({ "user_id": user_id });
    // console.log("getAd working (DATA): ", data);
    res.send({ data });
  } catch (error) {
    // console.log("getAd error: ", error);
    handleHttpError(req, "ERROR_LIST_GET_ONE_AD");
  }
};

const createAds = async (req, res) => {
  try {
    const { body } = req;
    // console.log(body);
    const data = await advertisementsModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (error) {
    // console.log("createAds error: ", error);
    handleHttpError(req, "ERROR_LIST_POST_ONE_PRODUCT");
  }
  
};

const updateAd = async (req, res) => {
  try {
    const {id,...body} = matchedData(req);
    // console.log("updateAd working (req): ", req);
    // console.log("updateAd working (id): ", id);
    // console.log("updateAd working (body): ", body);
    const data = await advertisementsModel.findByIdAndUpdate(id, body);
    res.send({ data });
  }catch (error) {
    // console.log("updateAd error: ", error);
    handleHttpError(req, "ERROR_LIST_PUT_ONE_PRODUCT");
    }
};

module.exports = { getAds, getAd, createAds, updateAd };
