import * as mysql from 'mysql';

export let pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DATABASE_URL || 'localhost:3000',
    user: process.env.DATABASE_USER || 'covalence-user',
    password: process.env.DATABASE_PASSWORD || 'Covalence1234',
    database: process.env.DATABASE_NAME || 'CovalenceOnlineStore'
});

export function row(procedureName: string, args: Array<any>) {
    return queryDB(procedureName, args)
    .then(function(resultsets: any) {
        return resultsets[0][0];
    });
}

export function rows(procedureName: string, args: Array<any>) {
    return queryDB(procedureName, args)
    .then(function(resultsets: any) {
        return resultsets[0];
    });
}

export function empty(procedureName: string, args: Array<any>) {
    return queryDB(procedureName, args)
    .then(function(resultsets: any) {
        return;
    });
}

function queryDB(procedureName: string, args: Array<any>) {
    return new Promise(function(fulfill, reject) {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject(err);
            } else {
                let callString = `CALL ${procedureName} (${placeholder(args)});`;
                connection.query(callString, args, function(err, resultsets) {
                    if (err) {
                        connection.release();
                        reject(err);
                    } else {
                        connection.release();
                        fulfill(resultsets);
                    }
                })
            }
        })
    })
}

function placeholder(args: Array<any>) {
    let placeholders = '';
    if (args && args.length > 0) {
        for (let i = 0; i < args.length; i++) {
            if (i === args.length - 1) {
                placeholders += '?';
            } else {
                placeholders += '?,';
            }
        }
        return placeholders;
    } else {
        return '';
    }
}