"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ESMODULES
// const express = require("express") // CommonJS modules
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Convierte el req.body a formato json
const PORT = 3000;
app.get("/ping", (_req, res) => {
    console.log("Someone pinged here!!!!");
    res.send("Pong");
});
app.use("/api/diaries", diaries_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});