const mdLinks = require("./lib/mdlinks.js");
// mdLinks("./some/example.md")

mdLinks("./README.md")
  .then(links => {
    console.log(links);
  })
  .catch(console.error);

  

// module.exports = () => {
//   // ...
// };
