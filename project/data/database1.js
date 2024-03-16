
const mysql = require('promise-mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'sakila',
    user: 'root',
    password: 'CatDog8921**'
})
const getConnection = async () => await connection;
module.exports = {
    getConnection
}



