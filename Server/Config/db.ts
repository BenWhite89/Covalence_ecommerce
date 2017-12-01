import * as mysql from 'mysql';

// establish connection to db
// for now I'm using hard coded values that will be removed at launch
export let pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DATABASE_URL || 'localhost',
    user: process.env.DATABASE_USER || 'covalence-user',
    password: process.env.DATABASE_PASSWORD || 'Covalence1234',
    database: process.env.DATABASE_NAME || 'CovalenceOnlineStore'
});

// three functions used depending on the number of expected results
// they all call the queryDB function in the same way, but they manipulate the resultset differently
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

// creates a Promise which runs the desired query with supplied arguments
function queryDB(procedureName: string, args: Array<any>) {
    return new Promise(function(fulfill, reject) {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject(err);
            } else {
                let callString = `CALL ${procedureName} (${placeholder(args)});`;
                console.log(callString);
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

// used to determine the number of ?s when constructing the query call
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