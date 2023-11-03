const path = require('path'); //importación del paquete path
const fs = require('fs');
const markdownFile = require('./fileMarkdown');
const contentFile = require('./contentmd');
const extractFile = require('./extractLinks');

//la función mdLinks analiza los archivos 
const mdLinks = (route) => {
    return new Promise ((resolve, reject) => { //porque la función retorna una promesa
        try {
            const absolutePath = path.resolve(route); //llamamos al método del paquete Path
            const pathExist =  fs.existsSync(absolutePath);
            if(pathExist) {
                // Se verifica si el archivo es Markdown
                if(markdownFile(absolutePath)) {
                    // console.log('Encontré un md', absolutePath);
                    contentFile(absolutePath)
                    .then((resultado)=> {
                        resolve(extractFile(resultado));
                    })
                    //const contentFile = contentFs(absolutePath)
                    // const linksFs = markdownLinkExtractor(result)
                    // console.log(linksFs);
                    // Aquí hay que llamar a la función de extraer los links
                    // resolve('Contenido MD', contentFile);
                    
                } else {
                    reject(new Error('No es un archivo Markdown'));
                }
            } else {
                reject(new Error('La ruta no existe'));
            }
        } catch (e) {
            reject(e);
        }
    });
};  
   
module.exports = mdLinks;