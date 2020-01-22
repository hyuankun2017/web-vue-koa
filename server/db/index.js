
const mysql = require('mysql');

const dbConfig = require('./dbconfig');

/**
 * 建立连接池
 */

let pool = mysql.createPool(dbConfig);

/**
 * 连接数据库
 */

let allSqlAction = (sql, value) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if(err){
                console.log('sql link err', err);
                reject(err);
            }else{
                console.log('sql is link success');
                connection.query(sql, value, (err, row) => {
                    if(err) reject(err)
                    else resolve(row)
                    connection.release();
                })
            }
        })
    })
}

module.exports = {
    allSqlAction
}