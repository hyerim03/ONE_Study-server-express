const express = require("express")
const app = express()
const pool = require("./config/database")

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get("/", (req,res) => {
    res.json("hello world")
})

app.post("/",(req,res) => {
    const {name, age} = req.body
    pool((conn) => {
        conn.query("INSERT INTO tbl_user(name, age) values(?, ?)",[name, age], (err, doc) => {
            if(err) console.log(err)
            res.json(true)
        })
        conn.releae()
    })

})
//conn 이 아니여도 됨

const port = 3030
app.listen(port, () => console.log(`SERVER ON PORT : ${port}`))

//npm install mysql