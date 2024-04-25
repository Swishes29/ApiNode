import express from 'express';

const app = express();
const PORT= 3000;

app.get('/',(rq, rs)=>{
    rs.send("Hola Mundo");
})

app.listen(PORT, () => {
    console.log('Api escuchando puerto ${PORT}');
});