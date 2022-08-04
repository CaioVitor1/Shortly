import joi from 'joi';
import jwt from 'jsonwebtoken';
import connection from "../databases/postgres.js";
export async function validateUrlLink(req, res, next) {
    try{
        const urlSchema = joi.object({
            url: joi.string().required()
        });
        const { error } = urlSchema.validate(req.body);
        if (error) {
            res.status(422).send('Campos inválidos');
            return;
        }
        const { authorization } = req.headers;
        const token = authorization?.replace('Bearer ', '');

        const chaveSecreta = process.env.JWT_SECRET;
        const {userId} = jwt.verify(token,chaveSecreta)
            if(!token || !userId) {
                return res.sendStatus(401);
            }
            console.log(userId)
            res.locals.session = userId
        next();
    } catch(erro) {
        console.log(erro);
        res.sendStatus(401);
    }
   
}

export async function validateShortUrl(req, res, nexto) {
    try{
        
        }
        
    catch(erro) {
        console.log(erro);
        res.status(500).send(erro)
    }
}
