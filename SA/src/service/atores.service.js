import { pool } from '../config/db.js';

class AtoresService {
        async create(nome){
            const atores = await read()

            try{
                const newAtor = {
                    id: atores.length > 0 ? atores[atores.length - 1].id + 1 : 1, 
                    nome
                };
                atores.push(newAtor);
                await write (atores);
                return newAtor;
            }
            catch(error){
                console.error(error)
            }
    }
    async getAll(){
        try{
            const atores = await pool.query('SELECT * FROM atores_table');
            return atores.rows;
        }
        catch(error){
            console.error(error);
        }
    }
}

export const atoresService = new AtoresService();