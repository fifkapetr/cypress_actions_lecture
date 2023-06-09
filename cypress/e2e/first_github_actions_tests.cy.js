describe("Cypress GitHub actions demo", () => {
  it("Open pmtool and fill username", () => {
    cy.visit("http://tredgate.com/pmtool");
    cy.get("#username").type("admin");
    cy.get("#username").should("have.value", "admin");
  });

  it("Open pmtool", () => {
    cy.visit('http://tredgate.com/pmtool');
  });

  it("Login page has title", () => {
    cy.visit('http://tredgate.com/pmtool');
    cy.get(".form-title").should("have.text", "Login");
  });
});
