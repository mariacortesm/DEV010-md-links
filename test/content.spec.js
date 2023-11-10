const fs = require("fs");
const contentFile = require("../lib/contentmd");
jest.mock("fs");

describe("contentFile", () => {
  it("Debería leer el archivo Markdown y retornarlo", () => {
    const routeFile = "./linkMarkdown.md";
    contentFile(routeFile).then((content) => {
      expect(content).toBeDefined();
      expect(typeof content).toEqual("string");
    });
  });
  it("Debería retornar un error si el archivo no existe", () => {
    const routeFile = "./archivoinexistente.md";
    contentFile(routeFile)
      .then((result) => {
        expect(result).toBeUndefined();
      })
      .catch((error) => {
        expect(error).toBeDefined();
        expect(error).toHaveProperty("code");
        expect(typeof error).toEqual("object");
      });
  });
  it("Debería retornar un error cuando el archivo no exista", async () => {
    const error = new Error("File not found");
    fs.readFile.mockImplementationOnce((path, encoding, callback) => {
      callback(error, null);
    });

    const markdownLink = "archivoinexistente/file/path/.md";
    await expect(contentFile(markdownLink)).rejects.toThrow(error);
  });
  it("Debería retornar con la data cuando el archivo exista", async () => {
    const data = "Return the content";
    fs.readFile.mockImplementationOnce((path, encoding, callback) => {
      callback(null, data);
    });

    const markdownLink = "archivoexistente/file/path.md";
    await expect(contentFile(markdownLink)).resolves.toEqual(data);
  });

 });