const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator")

const validatorGetAd = [
    check("user_id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];
const validatorPostAd = [
  check("id").exists().notEmpty(),
  (req, res, next) => {
      return validateResults(req, res, next)
  }
];

const validatorCreateAd = [
    check("name").exists().notEmpty(),
    check("description").exists().notEmpty(),
    check("discount").exists().notEmpty(),
    check("brand").exists().notEmpty(),
    check("category").exists().notEmpty(),
    check("image").exists().notEmpty(),
    check("status").exists().notEmpty(),
    check("user_id").exists().notEmpty(),
]

module.exports = {validatorCreateAd, validatorGetAd, validatorPostAd};