describe("Validar o endpoint /species", () => {
  it("Validar o método GET", () => {
    cy.request("/species/").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.count).to.be.a("number");
      expect(response.body.next).to.include(
        "https://swapi.dev/api/species/?page=",
      );
      expect(response.body.previous).to.be.null;
      expect(response.body.results).to.be.an("array");
      expect(response.body.results[0].name).to.be.a("string");
      expect(response.body.results[0].classification).to.be.a("string");
      expect(response.body.results[0].designation).to.be.a("string");
      expect(response.body.results[0].average_height).to.be.a("string");
      expect(response.body.results[0].skin_colors).to.be.a("string");
      expect(response.body.results[0].hair_colors).to.be.a("string");
      expect(response.body.results[0].eye_colors).to.be.a("string");
      expect(response.body.results[0].average_lifespan).to.be.a("string");
      expect(response.body.results[0].homeworld).to.include(
        "https://swapi.dev/api/planets/",
      );
      expect(response.body.results[0].language).to.be.a("string");
      expect(response.body.results[0].people).to.be.an("array");
      expect(response.body.results[0].people[0]).to.include(
        "https://swapi.dev/api/people/",
      );
      expect(response.body.results[0].films).to.be.an("array");
      expect(response.body.results[0].films[0]).to.include(
        "https://swapi.dev/api/films/",
      );
      expect(response.body.results[0].created).to.be.a("string");
      expect(response.body.results[0].edited).to.be.a("string");
      expect(response.body.results[0].url).to.include(
        "https://swapi.dev/api/species/",
      );
    });
  });
});
