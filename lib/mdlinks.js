const path = require('path'); //importación del paquete path
const fs = require('fs');
const markdownFile = require('./Markdown');

//la función mdLinks analiza los archivos 
const mdLinks = (route) => {
    return new Promise ((resolve, reject) => { //porque la función retorna una promesa
        const absolutePath = path.resolve(route); //llamamos al método del paquete Path
        const pathExist =  fs.existsSync(absolutePath);
        if(pathExist) {
            // Se verifica si el archivo es Markdown
            if(markdownFile(absolutePath)) {
                resolve(absolutePath);
            } else {
                reject(new Error('No es un archivo Markdown'));
            }
        } else {
            reject(new Error('La ruta no existe'));
        }
    });
};  
   
module.exports = mdLinks;