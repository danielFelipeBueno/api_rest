const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator")

const validatorCreateUser = [
    check("first_name").exists().notEmpty(),
    check("last_name").exists().notEmpty(),
    check("age").exists().notEmpty(),
    check("url_profile").exists(),
    check("email").exists().notEmpty(),
    check("password").exists().notEmpty(),
];

const validatorGetUser = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorLoginUser = [
    check("email").exists().notEmpty(),
    check("password").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = {validatorGetUser, validatorCreateUser, validatorLoginUser};