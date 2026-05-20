import express from 'express';
import {atoresRouter} from './routes/atores.routes.js';

const PORT = 3000;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
 return res.status(200).json({
  sucess: true,
  mensage: 'Bem-vindo a API de atores'
 })
});

app.use('/ator', atoresRouter);
app.listen(PORT, () => {
  console.log(`server rodando em http://localhost:${PORT}`);
});