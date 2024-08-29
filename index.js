const express = require("express")
const server = express()
const json = require("./Tabela_NCM_Vigente_20240820.json")

server.get("/NCM", (req, res) => {
    return res.json(json)
})

server.listen(3800, () => {
    console.log("servidor no ar")
})