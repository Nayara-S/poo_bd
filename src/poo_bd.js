const {Pool}= require("pg");
async function B() {
    const Tropicana = new Pool ({
         connectionString:'postgres://tfqpxwlfhyrhyr:23f6b170567315e1ba58675ff08f7a548c678ff62d26c9f4bd243c5486e2d177@ec2-52-203-27-62.compute-1.amazonaws.com:5432/d4o7dbg7ogcomf',
         ssl: {
            rejectUnauthorized: false
        }
});
    let con = await pool.connect();
    let res = await con.query(` create table Pessoa(
        id serial primary key, 
        nome_completo varchar,
        endereco varchar
        )`

        );

        await con.query("insert into Pessoa (nome_completo, endereco) values ($1), ($2), ($3), ($4)",
   ["Juliete da Costa", "Camila Dluca", "Sarah de Azevedo ", "Gilberto de Souza"], 
   ["Rua Baixa Verde ", "Rua Bela Vista","Rua Conego Rui vieira ", " Rua Florida "]);

   await con.query("update Pessoa set nome_completo = $1 where id = $2", ["Lumena dos Santos", 3]);
   await con.query("update Pessoa set endereco = $1 where id = $2", ["Rua Bento Vitorio", 1]);
   await con.query("delete from Pessoa where upper(nome_completo) like 'Lumena dos Santos'");
   await con.query("delete from Pessoa where upper(endereco) like 'Rua Florida'");

   let res = await con.query("select * from Pessoa");
    let tuplas = res.rows;
    for(let tupla of tuplas) {
        console.log(tupla);
    console.log(res);
    con.release();
    }

    B();
}