import express from "express" // ESMODULES
// const express = require("express") // CommonJS modules

import diaryRouter from "./routes/diaries"

const app = express()
app.use(express.json()) // Convierte el req.body a formato json

const PORT = 3000

app.get("/ping", (_req, res) => {
    console.log("Someone pinged here!!!!")
    res.send("Pong")
})

app.use("/api/diaries", diaryRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

