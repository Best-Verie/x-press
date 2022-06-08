const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      description: "API Documentation",
      version: "1.0.0",
      contact: {
        name: "verie",
      },
      servers: "http://localhost:8000",
    },
  },
  apis: ["index.js"],
};

const swaggerDocs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /customer:
 *  get:
 *   summary: Get all customers
 *   description: Get all customers
 *   responses:
 *    200:
 *    description: A list of customers
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        data:
 *         type: array
 *         items:
 *          type: object
 *          properties:
 *           name:
 *            type: string
 *            description: name of the customer
 *            example: "John"
 *
 *  post:
 *   summary: Create a new customer
 *   description: Create a new customer
 *   requestBody:
 *    description: customer object
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        name:
 *         type: string
 *         description: name of the customer
 *         example: "John"
 */
app.get("/customer", (req, res) => {
  // console.log(req);
  res.send({
    data: [
      {
        name: "John",
      },
    ],
  });
});

app.post("/customer", (req, res) => {
  res.send(req.body);
});

app.listen(8000, () => {
  console.log("Server is running on port 3000");
});
