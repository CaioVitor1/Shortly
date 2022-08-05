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
      
        const {rows: searchId} = await connection.query('SELECT * FROM urls WHERE id = $1', [id]);  
        console.log(searchId)      
        if(searchId.length === 0) {
            return res.sendStatus(404)
        }
        const {userId, shortUrl, url} = searchId[0]
        console.log(userId, shortUrl, url)
        const body = {
            "id": userId,
            "shortUrl": shortUrl,
            "url": url
        }
    return res.status(200).send(body)
        
    }catch(erro) {
        console.log(erro);
        res.sendStatus(404);
    }
}

export async function visitUrl(req, res) {
    try{
        const { shortUrl } = req.params;
        console.log(shortUrl)
      
        const {rows: searchUrl} = await connection.query('SELECT * FROM urls WHERE "shortUrl" = $1', [shortUrl]);  
        console.log(searchUrl)      
        if(searchUrl.length === 0) {
            return res.sendStatus(404)
        }
        const { visits, id } = searchUrl[0];
        console.log(visits)
        const addVisit = visits + 1;
        console.log(addVisit)

        const updateVisit = await connection.query(`UPDATE urls SET visits=${addVisit} WHERE id = $1;`, [id]);

        return res.redirect(url)
        
       
    }catch(erro) {
        console.log(erro)
        res.sendStatus(500)
    }
}

export async function deleteUrl( req, res) {
    try{
        console.log("chegou aqui")
        const userId = res.locals.session;
        
        const { id } = req.params;
        console.log(id)
      
        const {rows: searchIdUrl} = await connection.query('SELECT * FROM urls WHERE id = $1', [id]);  
        
        console.log(searchIdUrl)      
        if(searchIdUrl.length === 0) {
            return res.sendStatus(404)
        }

        if(searchIdUrl[0].userId !== userId) {
            res.status(401).send("A url não pertence a esse usuário")
        }
        if(searchIdUrl[0].userId === userId) {
           
            const deletingUrl = await connection.query('DELETE FROM urls WHERE id = $1', [id]);
            res.status(204).send("url deletada")
        }
        
        res.send(searchIdUrl)
    }
    catch(erro){
        console.log(erro);
        res.sendStatus(500);
    }
}