describe("Validar o endpoint /people", () => {
  it("Validar o método GET", () => {
    cy.request("/people/").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.count).to.be.a("number");
      expect(response.body.next).to.include(
        "https://swapi.dev/api/people/?page=",
      );
      expect(response.body.previous).to.be.null;
      expect(response.body.results).to.be.an("array");
      expect(response.body.results[0].name).to.be.a("string");
      expect(response.body.results[0].height).to.be.a("string");
      expect(response.body.results[0].mass).to.be.a("string");
      expect(response.body.results[0].hair_color).to.be.a("string");
      expect(response.body.results[0].skin_color).to.be.a("string");
      expect(response.body.results[0].eye_color).to.be.a("string");
      expect(response.body.results[0].birth_year).to.be.a("string");
      expect(response.body.results[0].gender).to.be.a("string");
      expect(response.body.results[0].homeworld).to.include(
        "https://swapi.dev/api/planets/",
      );
      expect(response.body.results[0].films).to.be.an("array");
      expect(response.body.results[0].species).to.be.an("array");
      expect(response.body.results[0].vehicles).to.be.an("array");
      expect(response.body.results[0].starships).to.be.an("array");
      expect(response.body.results[0].created).to.be.a("string");
      expect(response.body.results[0].edited).to.be.a("string");
      expect(response.body.results[0].url).to.include(
        "https://swapi.dev/api/people/",
      );
    });
  });
});
