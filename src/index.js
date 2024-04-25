"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (rq, rs) => {
    rs.send("Hola Mundo");
});
app.listen(PORT, () => {
    console.log('Api escuchando puerto ${PORT}');
});
