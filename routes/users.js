const express = require("express");
const { getItems, getItem, createItem, updateItem, loginUser} = require("../controllers/users");

const router = express.Router();
const {validatorGetUser, validatorCreateUser, validatorLoginUser} = require("../validators/users")


/**
 * @openapi
 * /api/users/id/{id}:
 *   get:
 *     summary: Obtener un usuario por su ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del usuario a obtener
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/users"
 *       '404':
 *         description: Usuario no encontrado
 *       '500':
 *         description: Error interno del servidor
 *     tags:
 *       - Users
 * 
 */

router.get("/id/:id",validatorGetUser, getItem);

/**
 * @openapi
 * /api/users/all_users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     description: Endpoint para obtener una lista de todos los usuarios registrados en el sistema.
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 *     tags:
 *       - Users
 */

router.get("/all_users", getItems )

/**
 * @swagger
 * /api/users/create:
 *   post:
 *     summary: Crea un nuevo usuario.
 *     description: Crea un nuevo usuario con la información proporcionada en el cuerpo de la solicitud.
 *     tags:
 *       - Users
 *     requestBody:
 *       description: Datos del usuario a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/users"
 *     responses:
 *       '201':
 *         description: Usuario creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/users"
 *       '400':
 *         description: Solicitud inválida o datos del usuario faltantes.
 *       '500':
 *         description: Error interno del servidor.
 */


router.post("/create", createItem )

/**
 * @swagger
 * /api/users/update/{id}:
 *   put:
 *     summary: Actualizar un usuario existente
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del usuario a actualizar
 *         required: true
 *         schema:
 *           type: string
 *       - in: body
 *         name: user
 *         description: Datos del usuario a actualizar
 *         required: true
 *         schema:
 *           $ref: "#/components/schemas/users"
 *     responses:
 *       '200':
 *         description: Usuario actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/users"
 *       '400':
 *         description: La solicitud contiene datos no válidos
 *       '404':
 *         description: Usuario no encontrado
 *       '500':
 *         description: Error interno del servidor
 *     tags:
 *       - Users
 */

router.put("/update/:id", validatorGetUser,validatorCreateUser,updateItem)

router.get("/login", validatorLoginUser,loginUser)

module.exports = router