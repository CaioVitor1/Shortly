import connection from "../databases/postgres.js";

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

export async function loginUser(req, res) {
    try{
        const {token, searchEmail} = res.locals.session;
        
        const newSession = await connection.query('INSERT INTO sessions (token, "userId") VALUES ($1, $2)', [token, searchEmail[0].id]);
        return res.status(200).send(token)
    }catch(erro) {
        console.log(erro);
        res.sendStatus(500);
    }
}