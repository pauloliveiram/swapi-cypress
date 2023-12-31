describe("Validar o endpoint /species/{id}", () => {
  it("Validar o método GET", () => {
    cy.request("/species/3/").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.name).to.be.a("string");
      expect(response.body.classification).to.be.a("string");
      expect(response.body.designation).to.be.a("string");
      expect(response.body.average_height).to.be.a("string");
      expect(response.body.skin_colors).to.be.a("string");
      expect(response.body.hair_colors).to.be.a("string");
      expect(response.body.eye_colors).to.be.a("string");
      expect(response.body.average_lifespan).to.be.a("string");
      expect(response.body.homeworld).to.include(
        "https://swapi.dev/api/planets/",
      );
      expect(response.body.language).to.be.a("string");
      expect(response.body.people).to.be.an("array");
      expect(response.body.people[0]).to.include(
        "https://swapi.dev/api/people/",
      );
      expect(response.body.films).to.be.an("array");
      expect(response.body.films[0]).to.include("https://swapi.dev/api/films/");
      expect(response.body.created).to.be.a("string");
      expect(response.body.edited).to.be.a("string");
      expect(response.body.url).to.include("https://swapi.dev/api/species/");
    });
  });
});
