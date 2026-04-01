import express from 'express'
import {atoresBRService} from '../services/AtoresBRSevice.js'

const router = express.Router()

router.get('/', (req, res) =>{
    res.json(atoresBRService.getAll())
})

router.post('/', (req, res) =>{
    const newAtor = atoresBRService.create(req.body)
    if(!newAtor){
        return res.status(400).json({message: 'Erro ao criar o ator'})
    }
    res.json(newAtor)
})

router.get('/:id', (req, res) =>{
    const atores = atoresBRService.getById(req.params.id)
    if(atores){
        res.json(atores)
    } else {
        res.status(404).json({message: 'Ator não encontrado'})
    }
})