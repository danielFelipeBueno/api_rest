const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator")

const validatorGetProduct = [
    check("user_id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorSearchProduct = [
  check("name").exists().notEmpty(),
  (req, res, next) => {
      return validateResults(req, res, next)
  }
];

const validatorProduct = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorCreateProduct = [
    check("name").exists().notEmpty(),
    check("description").exists().notEmpty(),
    check("price").exists().notEmpty(),
    check("brand").exists().notEmpty(),
    check("category").exists().notEmpty(),
    check("image").exists().notEmpty(),
    check("status").exists().notEmpty(),
    check("user_id").exists().notEmpty(),
]

module.exports = {validatorGetProduct, validatorCreateProduct, validatorProduct, validatorSearchProduct};