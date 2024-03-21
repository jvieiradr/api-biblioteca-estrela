import mysql from 'mysql2';

const banco = mysql.createConnection({
    host: 'aws-sa-east-1.connect.psdb.cloud',
    user: 's3gyfl4noz6uuoqs45gl',
    password: 'pscale_pw_MR7jSjsydalorLcg12VVxwPCmG2UTpNyJBH73ovKDN8',
    database: 'biblioteca',
    ssl : {
        rejectUnauthorized: false
    }

    /*
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'biblioteca'
    */
});

export default banco;
