const express = require("express");
const { getItems, getItem, createItem, updateItem, loginUser} = require("../controllers/users");

const router = express.Router();
const {validatorGetUser, validatorCreateUser, validatorLoginUser} = require("../validators/users")

/**
 * @openapi
 * /users/{id}:
 *      get:
 *          tags:
 *              - Users
 *          summary: "Obtener usuario por id"
 *          parameters:
 *          - name: id
 *            in: path
 *            description: user ID
 *            required: true
 *            schema:
 *              type: string
 *          responses:
 *              '200'
 *                  description: Retorna Objeto Usuario
 */

router.get("/id/:id",validatorGetUser, getItem);

/**
 * @openapi
 * /users/all_users:
 *      get:
 *          tags:
 *              - Users
 *          summary: "Obtener todos los usuarios"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/users"
 *          responses:
 *                  '200':
 *                      description: Usuarios obtenidos satisfactoriamente
 *                  '400':
 *                      description: Error al obtener usuario
 */

router.get("/all_users", getItems )

router.post("/create", createItem )

router.put("/update/:id", validatorGetUser,validatorCreateUser,updateItem)

router.get("/login", validatorLoginUser,loginUser)

module.exports = router