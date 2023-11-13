const extractFile = require('../lib/extractLinks');
const route = "/path/to/file.md";

describe("extractFile", () => {
  // Comienza la descripción de las pruebas para la función extractMarkdownLinks.
  it("Debería retornar los links del archivo Markdown", () => {
    // Prueba 1: Debe extraer enlaces Markdown del contenido.
    const file = "Esto es [un link](https://archivo.com) de ejemplo."; // Contenido de ejemplo que contiene un enlace Markdown.
    const links = [
      // Lista de enlaces Markdown esperados en el contenido.
      { text: "un link", href: "https://archivo.com", file: undefined },
    ];
    
    // Verifica que la función extractMarkdownLinks devuelva los enlaces Markdown esperados.
    expect(extractFile(file)).toEqual(links);
  });


  it("Debería retornar multiples links del archivo", () => {
    // Prueba 2: Debe manejar varios enlaces en el contenido.
    const files =
      "Dos enlaces [archivo](https://archivo.com) y [Google](https://google.com)."; // Contenido de ejemplo que contiene dos enlaces Markdown.
    const linksFile = [
      // Lista de enlaces Markdown esperados en el contenido.
      { text: "archivo", href: "https://archivo.com", file: undefined },
      { text: "Google", href: "https://google.com", file: undefined },
    ];
    // Verifica que la función extractMarkdownLinks devuelva los enlaces Markdown esperados en el contenido con múltiples enlaces.
    expect(extractFile(files)).toEqual(linksFile);
  });
});