const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')

const connection = mysql.createConnection(config)
app.get('/', (req, res) => {
    const connection = mysql.createConnection(config);
    connection.connect(err => {
        if (err) throw err;
        randomName="usuario-fixo"
        connection.query("INSERT INTO people(name) VALUES (?)", randomName, (err, result) => {
            if (err) throw err;
            connection.query("SELECT * FROM people", (err, result, fields) => {
                if (err) throw err;
                if(result.length) {
                    let data = `
                        <h1>Full Cycle Rocks!</h1>
                        <ul>
                    `;
                    result.forEach(res => data += `<li>${res.name}</li>`);
                    data += `</ul>`;
                    res.send(data);
                } else {
                    res.send('<h1>Full Cycle Rocks!</h1>');
                }
            });
        });
    });
});

//connection.end()
app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})