const { usersModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");

/**
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
  const data = await usersModel.find({});
  res.send({ data });
};

const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await usersModel.findById(id);
    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(req, "ERROR_LIST_USERS");
  }
};

const createItem = async (req, res) => {
  const { body } = req;
  const bcrypt = require("bcrypt");
  const saltRounds = 10;
  try {
    bcrypt.hash(body.password, saltRounds, async function (err, hash) {
      body.password = hash;
      const data = await usersModel.create(body);
      res.status(201);
      res.send({ data });
    });
  } catch (e) {
    console.log("Error create User: " + e);
  }
};

const loginUser = async (req, res) => {
  const { email } = matchedData(req);
  const bcrypt = require("bcrypt");
  console.log("email: ", email);
  const { password } = matchedData(req);
  console.log("password: ", password);
  try {
    const data = await usersModel.find({ email: email });
    console.log("data password: ", data.password);
    console.log("Usuario encontrado: ", data);
    const resolvedData = await Promise.resolve(data);
    const result = await bcrypt.compare(password, resolvedData.password);
    if (result === true) {
      console.log("Lo lograste, te acordaste de tu contraseña");
      res.send(true);
    } else {
      console.log("Definitivamente tienes Alzheimer");
      res.send(false);
    }
  } catch (e) {
    console.log("Error login User: " + e);
  }
};

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await usersModel.findOneAndUpdate(id, body);
    res.send({ data });
  } catch (e) {
    console.log("Error:" + e);
  }
};

const deleteItem = (req, res) => {};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
  loginUser,
};
