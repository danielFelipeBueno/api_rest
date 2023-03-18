const { productsModel,advertisementsModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const mongoose = require("mongoose");

// const ObjectId = mongoose.ObjectId;
/**
 * @param {*} req
 * @param {*} res
 */

const getProducts = async (req, res) => {
  try {
    const data = await productsModel.find({});
    res.send({ data });
    console.log("GetProducts working (DATA): ", data);
  } catch (error) {
    console.log("GetProducts error: ", error);
    handleHttpError(req, "ERROR_LIST_PRODUCTS");
  }
};

const getProduct = async (req, res) => {
  try {
    const { user_id } = matchedData(req);
    const data = await productsModel.find({ user_id: user_id });
    console.log("GetProduct working (DATA): ", data);
    res.send({ data });
  } catch (error) {
    console.log("GetProduct error: ", error);
    handleHttpError(req, "ERROR_LIST_ONE_PRODUCT");
  }
};

const createProduct = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await productsModel.create(body);
  res.status(201);
  res.send({ data });
};

const updateProduct = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await productsModel.findByIdAndUpdate(id, body);
    res.send({ data });
  } catch (e) {
    console.log(e);
  }
};

const searchProducts = async (req, res) => {
  try {
    console.log("searchProducts working (req.params): ", req.params);
    const { name } = req.params;
    console.log("searchProducts working (name): ", name);
    const regexValue = new RegExp("^" + name, "i");
    console.log("searchProducts working (regexValue): ", regexValue);
    const data = await productsModel.find({
      name: { $regex: regexValue },
    });
    res.send({ data });
    console.log("searchProducts working (DATA): ", data);
  } catch (error) {
    console.log("searchProducts error: ", error);
    handleHttpError(req, "ERROR_LIST_SEARCH_PRODUCTS");
  }
};



const getHome = async (req, res) => {
  try{
      const ads = await advertisementsModel.find({});
      const products = await productsModel.find({});
      res.send({
        'ads':ads,
        'products':products
      })
  } catch(e){ console.log('Error:'+e) }
}

module.exports = { getProducts, createProduct, getProduct, updateProduct, searchProducts, getHome };
