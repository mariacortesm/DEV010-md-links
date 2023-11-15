const path = require("path"); //importación del paquete path
const fs = require("fs");
const markdownFile = require("./fileMarkdown");
const contentFile = require("./contentmd");
const extractFile = require("./extractLinks");
const validateLinks = require("./validateLinks");

//la función mdLinks analiza los archivos
const mdLinks = (route, validate = false) => {
  return new Promise((resolve, reject) => {
    //porque la función retorna una promesa
    try {
      const absolutePath = path.resolve(route); //llamamos al método del paquete Path
      const pathExist = fs.existsSync(absolutePath);
      if (pathExist) {
        // Se verifica si el archivo es Markdown
        if (markdownFile(absolutePath)) {
          // console.log('Encontré un md', absolutePath);
          contentFile(absolutePath).then((resultado) => {
            if (validate) {
              const linkAb = extractFile(resultado, absolutePath);
              const resultValidate = validateLinks(linkAb);
              const res = Promise.all(resultValidate)
                .then((response) => {
                  console.log(response);
                  return response;
                })
                .catch((error) => {
                  console.log(error);
                });
              return res;
            } else {
              resolve(extractFile(resultado, absolutePath));
            }
          });
        } else {
          reject(new Error("No es un archivo Markdown"));
        }
      } else {
        reject(new Error("La ruta no existe"));
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = mdLinks;
// const resultLinks= extractFile(resultado)
// if(validate) {
//     axios.get(resultLinks)
//     .then(response => {
//         resolve(response(validate))
//     })
//     .catch(error => {
//         console.log(error)
// });
// };
//const contentFile = contentFs(absolutePath)
// const linksFs = markdownLinkExtractor(result)
// console.log(linksFs);
// Aquí hay que llamar a la función de extraer los links
// resolve('Contenido MD', contentFile);
