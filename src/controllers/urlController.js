import connection from "../databases/postgres.js";
import { nanoid } from 'nanoid';

export async function createShortlyUrl(req, res) {
    try{
        const { url } = req.body
        const userId = res.locals.session;
        let shortUrl = nanoid(10)
        console.log(shortUrl,url,userId )
        const newUrl = await connection.query('INSERT INTO urls ("shortUrl", url, "userId") VALUES ($1, $2, $3)', [shortUrl, url, userId]);

        return res.status(201).send(shortUrl)
    }catch(erro) {
        console.log(erro);
        res.sendStatus(500);
    }
}

export async function getUrl(req, res) {
    try{
        const { id } = req.params;
        console.log(id)
      
        const {rows: searchId} = await connection.query('SELECT * FROM customers WHERE id = $1', [id]);        
        if(searchId.length === 0) {
            return res.sendStatus(404)
        }


        //return res.send(searchId);
        //falta ajeitar a resposta para o formato que o projeto pede
    }catch(erro) {

    }
}