import connection from "../databases/postgres.js";
//import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export async function createUser(req, res) {
    try{
        const { name, email, password } = req.body;
        
        const encryptedPassword = bcrypt.hashSync(password, 10);

        const newUser = await connection.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, encryptedPassword]);
        return res.status(201).send('Usuário criado com sucesso');

    }
    catch(erro) {
        console.log(erro);
        res.sendStatus(500);
    }
}
