const fs = require('fs');

const contentFile = (fileMd) => {
    console.log(fileMd);
    return new Promise((resolve, reject) => {
        fs.readFile(fileMd, 'utf-8', (err, data) => {
            if (err) {
                console.log('error en contenido', err);
                reject(err);
            } else {
                // console.log(data);
                resolve(data);
            }
        })
    });
};

module.exports = contentFile;