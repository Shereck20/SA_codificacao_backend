import express from 'express'
import {atoresBRService} from '../services/AtoresBRSevice.js'

const router = express.Router()

router.get('/', (req, res) =>{
    res.json(atoresBRService.getAll())
})
router.get('/:id', (req, res) =>{
    
})