import { animalRepository } from "../repositories/animalRepository.js";

export const animalService = {
    async getAllAnimal() {
        return await animalRepository.findAll();
    },
    async getAnimal(id) {
        const animalExiste = await animalRepository.findById(id);
        if(!animalExiste){
            throw new Error("Animal não encontrado");
        }
        return animalExiste;
    },
    async createAnimals(reqAnimal) {
        if(reqAnimal.idade < 0){
            throw new Error("A idade do animal não pode ser negativa");
        }
        return await animalRepository.create(reqAnimal);
    },
    async updateAnimal(id, reqAnimal) {
        const animalExiste = await animalRepository.findById(id);
        if(!animalExiste){
            throw new Error("Animal não encontrado");
        }
        return await animalRepository.update(id, reqAnimal);
    },
    async patchAnimal(id, reqAnimal) {
        const animalExiste = await animalRepository.findById(id);
        if(!animalExiste){
            throw new Error("Animal não encontrado");
        }
        return await animalRepository.patch(id, reqAnimal);
    },
    async deleteAnimal(id) {
        const animalDeletado = await animalRepository.delete(id);
        if(!animalDeletado){
            throw new Error("Animal não encontrado");
        }
        return animalDeletado;
    }
}