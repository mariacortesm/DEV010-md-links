const markdownFile = require('../lib/fileMarkdown');

describe('markdownFile', () => {

    it("should return true for valid Markdown extensions", () => {

        const extensions = [

          ".md",
          ".markdown",
          ".mkd",
          ".mdown",
          ".mdwn",
          ".mdtxt",
          ".mdtext",
          ".text",
        ];

        extensions.forEach((ext) => {
          expect(markdownFile(`file${ext}`)).toBe(true);
        });
      });
      it("should return false for invalid extensions", () => {

        const otherExtensions = [".txt", ".html", ".js"];

        otherExtensions.forEach((ext) => {
          expect(markdownFile(`file${ext}`)).toBe(false);
        });
    });
});    