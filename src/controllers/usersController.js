import connection from "../databases/postgres.js";

export async function usersData(req, res) {
    try{
            const userId = res.locals.session;
            const {rows: visits} = await connection.query('SELECT urls.id, urls."shortUrl", urls.url, urls.visits AS visitCount FROM urls  WHERE "userId" = $1', [userId])
            //console.log(visits)
           if(visits.length === 0) {
            return res.status(401).send("Usuário não cadastrado")
           }
            const sumall = visits.map(item => item.visitcount).reduce((prev, curr) => prev + curr, 0);
            console.log("A soma é: " + sumall);

            const {rows: data} = await connection.query(` SELECT users.id, users.name, ${sumall} AS visitCount
                                                        FROM users WHERE id = $1`, [userId])
            const teste = {
                "id": data[0].id,
                "name": data[0].name,
                "visitcount": sumall,
                "shortenedUrls": visits
            }
            return res.send(teste);


    }catch(erro) {
        console.log(erro);
        return res.sendStatus(500);
    }
}