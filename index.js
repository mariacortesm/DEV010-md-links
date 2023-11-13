const mdLinks = require("./lib/mdlinks.js");
// mdLinks("./some/example.md")

mdLinks("./linkMarkdown.md", true)
  .then(links => {
    console.log(links);
  })
  .catch(console.error);

  

// module.exports = () => {
//   // ...
// };
