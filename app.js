require("dotenv").config()
const express = require("express")
const cors =require("cors")
const swaggerUI = require("swagger-ui-express")
const openApiConfiguration = require("./docs/swagger")
const dbConnect = require("./config/mongo")
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8080
console.log('PORT')
console.log(port)

app.use('/docs',
    swaggerUI.serve,
    swaggerUI.setup(openApiConfiguration))

app.use("/api",require("./routes"))

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

dbConnect()