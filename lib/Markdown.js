const path = require('path');

const extensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];

const markdownFile = (route) => {
    const extensionFile = path.extname(route);
    return extensions.includes(extensionFile);
};
module.exports = markdownFile;