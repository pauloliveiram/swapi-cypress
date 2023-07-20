describe("Validar o endpoint /planets", () => {
  it("Validar o método GET", () => {
    cy.request("/planets/").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.count).to.be.a("number");
      expect(response.body.next).to.include(
        "https://swapi.dev/api/planets/?page=",
      );
      expect(response.body.previous).to.be.null;
      expect(response.body.results).to.be.an("array");
      expect(response.body.results[0].name).to.be.a("string");
      expect(response.body.results[0].rotation_period).to.be.a("string");
      expect(response.body.results[0].orbital_period).to.be.a("string");
      expect(response.body.results[0].diameter).to.be.a("string");
      expect(response.body.results[0].climate).to.be.a("string");
      expect(response.body.results[0].gravity).to.be.a("string");
      expect(response.body.results[0].terrain).to.be.a("string");
      expect(response.body.results[0].surface_water).to.be.a("string");
      expect(response.body.results[0].population).to.be.a("string");
      expect(response.body.results[0].residents).to.be.an("array");
      expect(response.body.results[0].residents[0]).to.include(
        "https://swapi.dev/api/people/",
      );
      expect(response.body.results[0].films).to.be.an("array");
      expect(response.body.results[0].films[0]).to.include(
        "https://swapi.dev/api/films/",
      );
      expect(response.body.results[0].created).to.be.a("string");
      expect(response.body.results[0].edited).to.be.a("string");
      expect(response.body.results[0].url).to.include(
        "https://swapi.dev/api/planets/",
      );
    });
  });
});
