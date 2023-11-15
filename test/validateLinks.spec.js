const axios = require("axios");
const validateLinks = require("../lib/validateLinks");

jest.mock("axios");

beforeEach(() => {
  jest.resetAllMocks();
});
describe("validateLinks", () => {
  it("should validate links and return their status", (done) => {
    const links = [{ href: "https://example.com", linkText: "Example Link" }];
    const resultData = [
      {
        href: "https://example.com",
        linkText: "Example Link",
        status: 200,
        ok: "ok",
      },
    ];
     axios.get.mockResolvedValue({ status: 200 });
    const validateRes = validateLinks(links);
    Promise.all(validateRes)
      .then((response) => {
        console.log({ response });
        expect(response).toEqual(resultData);
      })
      .catch((error) => {
        console.log(error);
      });
    done();
  });
});
describe("validateLinks", () => {
  it("should handle request errors", (done) => {
    const links = [{ href: "https://example.com", linkText: "Example Link" }];
    const resultData = [
      {
        href: "https://example.com",
        linkText: "Example Link",
        status: 400,
        ok: "Fail",
      },
    ];

    axios.get.mockRejectedValue({ status: 400 });
    const validateRes = validateLinks(links);
    Promise.all(validateRes)
      .then((response) => {
        console.log({ response });
      })
      .catch((error) => {
        expect(error).toEqual(resultData);
        console.log(error);
      });
    done();
  });
});
describe("validateLinks", () => {
  it("should validate links and return their status", (done) => {
    const links = [{ href: "https://example.com", linkText: "Example Link" }];
    const resultData = [
      {
        href: "https://example.com",
        linkText: "Example Link",
        status: 500,
        ok: "Fail",
      },
    ];
    axios.get.mockResolvedValue({ status: 500 });
    const validateRes = validateLinks(links);
    Promise.all(validateRes)
      .then((response) => {
        console.log({ response });
        expect(response).toEqual(resultData);
      })
      .catch((error) => {
        console.log(error);
      });
    done();
  });
});