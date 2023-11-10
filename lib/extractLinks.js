// const path = require('path'); 

const extractFile = (content, route) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let array;
    
    while ((array = regex.exec(content)) !== null) {
        const text = array[1]; // Texto del enlace
        const url = array[2];  // URL del enlace
        links.push({ 
            text,
            href: url,
            file: route,
         });
    }

    return links;
};



module.exports = extractFile;
// const markdownContent = '[Este es un archivo de prueba] (https://www.youtube.com/watch?v=1RJHiHzUnk8)';
// const regexLink = /\[([^\]]+)\]\(([^)]+)\)/;
// const linkMatch = markdownContent.match(regexLink);