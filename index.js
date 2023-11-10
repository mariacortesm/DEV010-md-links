const mdLinks = require("./lib/mdlinks.js");
const validateLinks = true
// mdLinks("./some/example.md")

mdLinks("./linkMarkdown.md", true)
  .then(links => {
    validateLinks(links);
  })
  .catch(console.error);



// module.exports = () => {
//   // ...
// };
