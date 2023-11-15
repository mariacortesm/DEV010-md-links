const extractFile = require('../lib/extractLinks');
// const route = "/path/to/file.md";

describe("extractFile", () => {

  it("Debería retornar los links del archivo Markdown", () => {

    const file = "Esto es [un link](https://archivo.com) de ejemplo."; 
    const links = [

      { text: "un link", href: "https://archivo.com", file: undefined },
    ];

    expect(extractFile(file)).toEqual(links);
  });


  it("Debería retornar multiples links del archivo", () => {

    const files =
      "Dos enlaces [archivo](https://archivo.com) y [Google](https://google.com).";
    const linksFile = [

      { text: "archivo", href: "https://archivo.com", file: undefined },
      { text: "Google", href: "https://google.com", file: undefined },
    ];

    expect(extractFile(files)).toEqual(linksFile);
  });
});