const express = require("express")
const app = express()
const pool = require("./config/database")

app.use(express.json())
app.use(express.urlencoded({extended : false}))

const port = 3030
app.listen(port, () => console.log(`SERVER ON PORT : ${port}`))

//npm install mysql