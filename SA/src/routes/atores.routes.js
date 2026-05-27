import express from 'express';
import {atoresService} from '../service/atores.service.js';
import { pool } from '../config/db.js';

export const atoresRouter = express.Router();

atoresRouter.get('/', async (req, res) => {
  const ator =  await atoresService.getAll(); 
  res.json(ator);
});

atoresRouter.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
  const ator = await pool.query('SELECT * FROM atores_table WHERE id = $1', [id]);
  res.json(ator.rows);
  
}
 catch (error) {
    res.status(404).json({ error: 'Ator não encontrado' });
  }
});

atoresRouter.post('/', async (req, res) =>{
  try {
    const ator = await pool.query('INSERT INTO atores_table (nome, idade, cidade_natal) VALUES ($1, $2, $3) RETURNING *', [req.body.nome, req.body.quantidade, req.body.cidade_natal]);
    return ator.rows,
    res.json(ator.rows);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar ator' });
  }
})

atoresRouter.patch('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const ator = await pool.query('UPDATE atores_table SET (nome, idade, cidade_natal) = ($1, $2, $3)  WHERE id = ($4) RETURNING *', [req.body.nome, req.body.quantidade, req.body.cidade_natal, id]);
    return ator.rows,
    res.json(ator.rows);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar ator' });
  }
})

atoresRouter.put('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const ator = await pool.query('UPDATE atores_table SET (nome, idade, cidade_natal) = ($1, $2, $3) WHERE id = ($4) RETURNING *', [req.body.nome, req.body.quantidade, req.body.cidade_natal, id]);
    return ator.rows,
    res.json(ator.rows);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar ator' });
  }
})


atoresRouter.delete('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const ator = await pool.query('DELETE FROM atores_table WHERE id = ($1)', [id]);
    console.log(ator);
    return ator.rows
  } catch (error) {
    res.status(400).json({ error: 'Erro ao excluir ator' });
  }
})








