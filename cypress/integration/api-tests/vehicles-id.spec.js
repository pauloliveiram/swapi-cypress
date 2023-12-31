describe("Validar o endpoint /vehicles/{id}", () => {
  it("Validar o método GET", () => {
    cy.request("/vehicles/4/").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.name).to.be.a("string");
      expect(response.body.model).to.be.a("string");
      expect(response.body.manufacturer).to.be.a("string");
      expect(response.body.cost_in_credits).to.be.a("string");
      expect(response.body.length).to.be.a("string");
      expect(response.body.max_atmosphering_speed).to.be.a("string");
      expect(response.body.crew).to.be.a("string");
      expect(response.body.passengers).to.be.a("string");
      expect(response.body.cargo_capacity).to.be.a("string");
      expect(response.body.consumables).to.be.a("string");
      expect(response.body.vehicle_class).to.be.a("string");
      expect(response.body.pilots).to.be.an("array");
      expect(response.body.films).to.be.an("array");
      expect(response.body.films[0]).to.include("https://swapi.dev/api/films/");
      expect(response.body.created).to.be.a("string");
      expect(response.body.edited).to.be.a("string");
      expect(response.body.url).to.include("https://swapi.dev/api/vehicles/");
    });
  });
});
