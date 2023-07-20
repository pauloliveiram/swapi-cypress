describe("Validar o endpoint /people/{id}", () => {
  it("Validar o método GET", () => {
    cy.request("/people/1/").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.name).to.be.a("string");
      expect(response.body.height).to.be.a("string");
      expect(response.body.mass).to.be.a("string");
      expect(response.body.hair_color).to.be.a("string");
      expect(response.body.skin_color).to.be.a("string");
      expect(response.body.eye_color).to.be.a("string");
      expect(response.body.birth_year).to.be.a("string");
      expect(response.body.gender).to.be.a("string");
      expect(response.body.homeworld).to.include(
        "https://swapi.dev/api/planets/",
      );
      expect(response.body.films).to.be.an("array");
      expect(response.body.species).to.be.an("array");
      expect(response.body.vehicles).to.be.an("array");
      expect(response.body.starships).to.be.an("array");
      expect(response.body.created).to.be.a("string");
      expect(response.body.edited).to.be.a("string");
      expect(response.body.url).to.include("https://swapi.dev/api/people/");
    });
  });
});
