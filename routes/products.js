const express = require("express");
const {createProduct, getProducts, getProduct, updateProduct, searchProducts, getHome} = require("../controllers/products");
const router = express.Router();
const {validatorGetProduct, validatorCreateProduct, validatorProduct, validatorSearchProduct} = require("../validators/products")

/**
 * @swagger
 * /api/products/create:
 *   post:
 *     summary: Crea un nuevo producto.
 *     description: Crea un nuevo producto con la información proporcionada en el cuerpo de la solicitud.
 *     tags:
 *       - Products
 *     requestBody:
 *       description: Datos del producto a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/products"
 *     responses:
 *       '201':
 *         description: Producto creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/products"
 *       '400':
 *         description: Solicitud inválida o datos del productofaltantes.
 *       '500':
 *         description: Error interno del servidor.
 */

router.post('/create', createProduct);

/**
 * @openapi
 * /api/products/all_products:
 *   get:
 *     summary: Obtiene todos los productos
 *     description: Endpoint para obtener una lista de todos los productos registrados en el sistema.
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 *     tags:
 *       - Products
 */


router.get("/all_products", getProducts);

/**
 * @openapi
 * /api/products/id/{user_id}:
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
 *       - Products
 */

router.get("/id/:user_id", validatorGetProduct, getProduct);

/**
 * @openapi
 * /api/products/search_products/{name}:
 *   get:
 *     tags:
 *       - Home
 *     summary: Buscar productos por nombre
 *     description: Busca productos que coincidan con el nombre especificado
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Nombre del producto a buscar
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/products'
 *       '500':
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *   components:
 *     schemas:
 *       Product:
 *         type: object
 *         properties:
 *           id:
 *             type: string
 *           name:
 *             type: string
 *           description:
 *             type: string
 *           price:
 *             type: number
 */

router.get("/search_products/:name", searchProducts, validatorSearchProduct);

router.put("/update/:id", validatorProduct, validatorCreateProduct, updateProduct);

/**
 * @openapi
 * /api/products/home:
 *   get:
 *     tags:
 *       - Home
 *     summary: Obtener anuncios y productos
 *     description: Obtiene una lista de todos los anuncios y productos disponibles
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ads:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Advertisement'
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *       '500':
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *   components:
 *     schemas:
 *       Advertisement:
 *         type: object
 *         properties:
 *           id:
 *             type: string
 *           title:
 *             type: string
 *           description:
 *             type: string
 *           price:
 *             type: number
 *       Product:
 *         type: object
 *         properties:
 *           id:
 *             type: string
 *           name:
 *             type: string
 *           description:
 *             type: string
 *           price:
 *             type: number
 */

router.get("/home",getHome)

module.exports = router;