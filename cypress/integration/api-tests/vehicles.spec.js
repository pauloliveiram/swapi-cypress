describe("Validar o endpoint /vehicles", () => {
  it("Validar o método GET", () => {
    cy.request("/vehicles/").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.count).to.be.a("number");
      expect(response.body.next).to.include(
        "https://swapi.dev/api/vehicles/?page=",
      );
      expect(response.body.previous).to.be.null;
      expect(response.body.results).to.be.an("array");
      expect(response.body.results[0].name).to.be.a("string");
      expect(response.body.results[0].model).to.be.a("string");
      expect(response.body.results[0].manufacturer).to.be.a("string");
      expect(response.body.results[0].cost_in_credits).to.be.a("string");
      expect(response.body.results[0].length).to.be.a("string");
      expect(response.body.results[0].max_atmosphering_speed).to.be.a("string");
      expect(response.body.results[0].crew).to.be.a("string");
      expect(response.body.results[0].passengers).to.be.a("string");
      expect(response.body.results[0].cargo_capacity).to.be.a("string");
      expect(response.body.results[0].consumables).to.be.a("string");
      expect(response.body.results[0].vehicle_class).to.be.a("string");
      expect(response.body.results[0].pilots).to.be.an("array");
      expect(response.body.results[0].films).to.be.an("array");
      expect(response.body.results[0].films[0]).to.include(
        "https://swapi.dev/api/films/",
      );
      expect(response.body.results[0].created).to.be.a("string");
      expect(response.body.results[0].edited).to.be.a("string");
      expect(response.body.results[0].url).to.include(
        "https://swapi.dev/api/vehicles/",
      );
    });
  });
});
