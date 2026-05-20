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
  const ator = await pool.query('SELECT * FROM emanoel_atores WHERE id = $1', [id]);
  res.json(ator.rows);
  
}
 catch (error) {
    res.status(404).json({ error: 'Ator não encontrado' });
  }
});

atoresRouter.post('/', async (req, res) =>{
  try {
    const ator = await pool.query('INSERT INTO emanoel_atores (nome, idade) VALUES ($1, $2) RETURNING *', [req.body.nome, req.body.quantidade]);
    return ator.rows,
    res.json(ator.rows);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar ator' });
  }
})

atoresRouter.patch('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const ator = await pool.query('UPDATE emanoel_atores SET (nome, idade) = ($1, $2)  WHERE id = ($3) RETURNING *', [req.body.nome, req.body.quantidade, id]);
    return ator.rows,
    res.json(ator.rows);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar ator' });
  }
})

atoresRouter.put('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const ator = await pool.query('UPDATE emanoel_atores SET (nome, idade) = ($1, $2) WHERE id = ($3) RETURNING *', [req.body.nome, req.body.quantidade, id]);
    return ator.rows,
    res.json(ator.rows);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar ator' });
  }
})


atoresRouter.delete('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const ator = await pool.query('DELETE FROM emanoel_atores WHERE id = ($1)', [id]);
    console.log(ator);
    return ator.rows
  } catch (error) {
    res.status(400).json({ error: 'Erro ao excluir ator' });
  }
})








