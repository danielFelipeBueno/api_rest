const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "My Shop ApiRest",
        version: "1.0.0",
    },
    servers: [
        {
            url:"https://apimyshop.fly.dev/api"
        }
    ],
    components:{
        schemas:{
            users:{
                type:"object",
                required:["first_name", "last_name","email"],
                properties:{
                    first_name:{
                        type:"string"
                    },
                    last_name:{
                        type:"string"
                    },
                    age:{
                        type:"integer"
                    },
                    url_profile:{
                        type:"string"
                    },
                    email:{
                        type:"string",
                    },
                    password:{
                        type:"string"
                    }
                }
            },
            products:{
                type:"object",
                required:["name", "price", "description"],
                properties:{
                    name:{
                        type:"string"
                    },
                    description:{
                        type:"string"
                    },
                    price:{
                        type:"number"
                    },
                    brand:{
                        type:"string"
                    },
                    category:{
                        type:"string"
                    },
                    image:{
                        type:"string"
                    },
                    status:{
                        type:"boolean"
                    },
                    user_id:{
                        type:"string"
                    }
                }
            },
            adsvertisements:{
                type:"object",
                required:["name", "description", "brand","category"],
                properties:{
                    name: {
                        type: "string",
                    },
                    description: {
                        type: "string"
                    },
                    discount: {
                        type: "number"
                    },
                    brand: {
                        type: "string"
                    },
                    category: {
                        type: "string"
                    },
                    image: {
                        type: "string"
                    },
                    status: {
                        type: "boolean"
                    },
                    user_id: {
                        type: "string"
                    }
                }
            }
        }
    },
}

const options = {
    swaggerDefinition,
    apis:[
        "./routes/*.js"
    ]
}

const openApiConfiguration = swaggerJsdoc(options)

module.exports = openApiConfiguration