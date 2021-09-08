describe("Test", () => {
  before(function () {
    cy.visit('/');
  })

  //verifies all elements
  it('should verify all the elements', function () {
    cy.get(".testp").should("have.text", "Edit and save to reload.");
  })
})