const request = require("supertest");

test("exchange rates should be obtained correctly", () => {

  const server = request("http://localhost:3000/dev");

  server
    .get("/exchange-rates")
    .expect(200)
    .then((response) => {
      const { body } = response;
        const bodyKeys = Object.keys(body);
        
      expect(bodyKeys.includes("rates")).toBe(true)
      expect(bodyKeys.includes("base")).toBe(true)
      expect(bodyKeys.includes("date")).toBe(true)
    })
});
