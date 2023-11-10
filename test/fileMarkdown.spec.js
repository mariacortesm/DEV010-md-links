const markdownFile = require('../lib/fileMarkdown');


describe('markdownFile', () => {

    it("should return true for valid Markdown extensions", () => {
        // Prueba 1: Debe devolver true para extensiones de Markdown válidas.
        const extensions = [
          // Lista de extensiones de archivo válidas para Markdown.
          ".md",
          ".markdown",
          ".mkd",
          ".mdown",
          ".mdwn",
          ".mdtxt",
          ".mdtext",
          ".text",
        ];
        // Itera a través de las extensiones válidas y verifica que la función mdwnExtension devuelva true para cada una de ellas.
        extensions.forEach((ext) => {
          expect(markdownFile(`file${ext}`)).toBe(true);
        });
      });
      it("should return false for invalid extensions", () => {
        // Prueba 2: Debe devolver false para extensiones inválidas.
        const otherExtensions = [".txt", ".html", ".js"]; // Lista de extensiones de archivo inválidas.
        // Itera a través de las extensiones inválidas y verifica que la función mdwnExtension devuelva false para cada una de ellas.
        otherExtensions.forEach((ext) => {
          expect(markdownFile(`file${ext}`)).toBe(false);
        });
    });
});    