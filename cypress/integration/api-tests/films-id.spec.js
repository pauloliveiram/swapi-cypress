describe("Validar o endpoint /films/{id}", () => {
  it("Validar o método GET", () => {
    cy.request("/films/1/").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.title).to.be.a("string");
      expect(response.body.episode_id).to.be.a("number");
      expect(response.body.opening_crawl).to.be.a("string");
      expect(response.body.director).to.be.a("string");
      expect(response.body.producer).to.be.a("string");
      expect(response.body.release_date).to.be.a("string");
      expect(response.body.characters).to.be.an("array");
      expect(response.body.planets).to.be.an("array");
      expect(response.body.starships).to.be.an("array");
      expect(response.body.vehicles).to.be.an("array");
      expect(response.body.species).to.be.an("array");
      expect(response.body.created).to.be.a("string");
      expect(response.body.edited).to.be.a("string");
      expect(response.body.url).to.include("https://swapi.dev/api/films/");
    });
  });
});
