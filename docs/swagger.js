const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "My Shop ApiRest",
        version: "1.0.0",
    },
    servers: [
        {
            url:"http://localhost:8080"
        }
    ],
    components:{
        schemas:{
            users:{
                type:"object",
                required:["first_name", "last_name","email","password"],
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