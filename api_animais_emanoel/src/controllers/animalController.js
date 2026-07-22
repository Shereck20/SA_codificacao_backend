import { animalService } from "../services/animalService.js";

export const animalController = {
    async getAll(req, res) {
        try {
            const animals = await animalService.getAllAnimal();
            res.json(animals);
        } catch (error) {
            res.status(500).json({erro: error.message})
        }
    },
    async getById(req, res) {
        try {
            const getAnimalById = await animalService.getAnimal(req.params.id);
            res.status(200).json(getAnimalById);
        } catch (error) {
            const status = error.message === "Animal não encontrado" ? 404 : 400;
            res.status(status).json({ erro: error.message })
        }
    },
    async create(req, res) {
        try {
            const novoAnimal = await animalService.createAnimal(req.body);
            res.status(201).json(novoAnimal);
        } catch (error) {
            res.status(400).json({ erro: error.message })
        }
    },
    async update(req, res) {
        try {
            const updateAnimal = await animalService.updateAnimal(req.params.id, req.body);
            res.status(200).json(updateAnimal);
        } catch (error) {
            const status = error.message === "Animal não encontrado" ? 404 : 400;
            res.status(status).json({ erro: error.message })
        }
    },
    async patch(req, res) {
        try {
            const updateAnimal = await animalService.patchAnimal(req.params.id, req.body);
            res.status(200).json(updateAnimal);
        } catch (error) {
            const status = error.message === "Animal não encontrado" ? 404 : 400;
            res.status(status).json({ erro: error.message })
        }
    },
    async delete(req, res) {
        try {
            const deleteAnimal = await animalService.deleteAnimal(req.params.id);
            res.status(200).json(deleteAnimal);
        } catch (error) {
            const status = error.message === "Animal não encontrado" ? 404 : 400;
            res.status(status).json({ erro: error.message })
        }
    }
}