const express = require("express");
const {createAds, getAds, getAd, updateAd} = require("../controllers/advertisements");
const router = express.Router();
const {validatorCreateAd, validatorGetAd, validatorPostAd} = require("../validators/advertisements")

/**
 * @swagger
 * /api/advertisements/create:
 *   post:
 *     summary: Crea un nuevo producto.
 *     description: Crea un nuevo producto con la información proporcionada en el cuerpo de la solicitud.
 *     tags:
 *       - ADS
 *     requestBody:
 *       description: Datos del producto a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/adsvertisements"
 *     responses:
 *       '201':
 *         description: Producto creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/adsvertisements"
 *       '400':
 *         description: Solicitud inválida o datos del productofaltantes.
 *       '500':
 *         description: Error interno del servidor.
 */

router.post('/create', validatorCreateAd, createAds);

/**
 * @openapi
 * /api/advertisements/all_ads:
 *   get:
 *     summary: Obtiene todos los productos
 *     description: Endpoint para obtener una lista de todos los productos registrados en el sistema.
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 *     tags:
 *       - ADS
 */

router.get("/all_ads", getAds);

/**
 * @openapi
 * /api/advertisements/id/{user_id}:
 *   get:
 *     summary: Obtener los productos de un usuario por id
 *     parameters:
 *       - name: user_id
 *         in: path
 *         description: User ID de los productos
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Usuario encontrado con sus productos
 *       '404':
 *         description: Usuario no encontrado
 *       '500':
 *         description: Error interno del servidor
 *     tags:
 *       - ADS
 */


router.get("/id/:user_id", validatorGetAd, getAd);

router.put("/update/:id", validatorPostAd, validatorCreateAd, updateAd);

module.exports = router;