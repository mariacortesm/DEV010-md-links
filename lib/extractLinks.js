// const path = require('path'); 

const extractFile = (content) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let match;
    
    while ((match = regex.exec(content)) !== null) {
        const text = match[1]; // Texto del enlace
        const url = match[2];  // URL del enlace
        links.push({ text, url });
    }

    return links;
};



module.exports = extractFile;
// const markdownContent = '[Este es un archivo de prueba] (https://www.youtube.com/watch?v=1RJHiHzUnk8)';
// const regexLink = /\[([^\]]+)\]\(([^)]+)\)/;
// const linkMatch = markdownContent.match(regexLink);