const con = require('../connect/banco').con;

const create = (req, res) => {
    let numero = req.body.numero;
    let id_cliente = req.body.id_cliente;
    let idforn = req.body.idforn;

    let query = 'INSERT INTO telefone (numero, id_cliente, idforn) VALUES'
    query += `('${numero}','${id_cliente}','${idforn}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    let numero = req.body.numero;
    let id_cliente = req.body.id_cliente;
    let idforn = req.body.idforn;

    let query = `UPDATE telefones SET numero = '${numero}', id_cliente = '${id_cliente}', idforn ='${idforn}' `
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}


const deletar = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM telefone WHERE idtelefone = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}




module.exports = {
    create,
    read,
    deletar,
    update
}