describe('Validar o endpoint /films', () => {
  it('Validar o método GET', () => {
    cy.request('/films/').then(response => {
      expect(response.status).to.eql(200)
      expect(response.body.count).to.be.a('number')
      expect(response.body.next).to.be.null
      expect(response.body.previous).to.be.null
      expect(response.body.results).to.be.an('array')
      expect(response.body.results[0].title).to.be.a('string')
      expect(response.body.results[0].episode_id).to.be.a('number')
      expect(response.body.results[0].opening_crawl).to.be.a('string')
      expect(response.body.results[0].director).to.be.a('string')
      expect(response.body.results[0].producer).to.be.a('string')
      expect(response.body.results[0].release_date).to.be.a('string')
      expect(response.body.results[0].characters).to.be.an('array')
      expect(response.body.results[0].planets).to.be.an('array')
      expect(response.body.results[0].starships).to.be.an('array')
      expect(response.body.results[0].vehicles).to.be.an('array')
      expect(response.body.results[0].species).to.be.an('array')
      expect(response.body.results[0].created).to.be.a('string')
      expect(response.body.results[0].edited).to.be.a('string')
      expect(response.body.results[0].url).to.include('https://swapi.dev/api/films/')
    })
  })
})