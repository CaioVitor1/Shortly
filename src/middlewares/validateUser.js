import joi from 'joi';
import connection from "../databases/postgres.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function validateCreateUser (req, res, next) {
    const {email} = req.body;

    const userSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/).required(),
        //senha forte: no minimo 8 digitos: letra maiúscula, minúscula, número e caractere especial
        confirmPassword: joi.valid(joi.ref('password')).required()
    });

    const { error } = userSchema.validate(req.body);
    if (error) {
        res.status(422).send('Campos inválidos');
        return;
    } 

    const {rows: searchEmail} = await connection.query('SELECT * FROM users WHERE email = $1', [email]);        
        if(searchEmail.length !== 0) {
            return res.status(409).send("Email já cadastrado")
        }

    next() 
}


export async function validateLogin (req, res, next) {
   
        const {email, password } = req.body;

        const userSchema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/).required()
        });
    
        const { error} = userSchema.validate(req.body);
    
        if (error) {
            res.status(422).send('Campos inválidos');
            return;
        }
        const {rows: searchEmail} = await connection.query('SELECT * FROM users WHERE email = $1', [email]);        
        
        if(searchEmail.length !== 0 && bcrypt.compareSync(password, searchEmail[0].password) ) {
                                     
            const chave = process.env.JWT_SECRET;
            const configuracoes = { expiresIn: 60*60*24*30 }
            const token = jwt.sign({ userId: searchEmail[0].id }, chave, configuracoes); 

            res.locals.session = {token, searchEmail};
            next();

        } else{
            return res.status(401).send("Usuário/senha não cadastrados!")
        }
        



}
