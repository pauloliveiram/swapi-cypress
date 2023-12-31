describe("Validar o endpoint /planets/{id}", () => {
  it("Validar o método GET", () => {
    cy.request("/planets/1/").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.name).to.be.a("string");
      expect(response.body.rotation_period).to.be.a("string");
      expect(response.body.orbital_period).to.be.a("string");
      expect(response.body.diameter).to.be.a("string");
      expect(response.body.climate).to.be.a("string");
      expect(response.body.gravity).to.be.a("string");
      expect(response.body.terrain).to.be.a("string");
      expect(response.body.surface_water).to.be.a("string");
      expect(response.body.population).to.be.a("string");
      expect(response.body.residents).to.be.an("array");
      expect(response.body.residents[0]).to.include(
        "https://swapi.dev/api/people/",
      );
      expect(response.body.films).to.be.an("array");
      expect(response.body.films[0]).to.include("https://swapi.dev/api/films/");
      expect(response.body.created).to.be.a("string");
      expect(response.body.edited).to.be.a("string");
      expect(response.body.url).to.include("https://swapi.dev/api/planets/");
    });
  });
});
