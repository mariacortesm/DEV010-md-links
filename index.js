const mdLinks = require("./lib/mdlinks.js");
// mdLinks("./some/example.md")

mdLinks("./linkMarkdown.md")
  .then(links => {
    console.log('Resultado de MDLinks', links);
  })
  .catch(console.error);

  

// module.exports = () => {
//   // ...
// };
