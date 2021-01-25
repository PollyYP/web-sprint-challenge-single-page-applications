describe("Pizza-Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("input fields working", () => {
    cy.get("#name").type("Polly").should("have.value", "Polly");
    cy.get("#special").type("No cheese").should("have.value", "No cheese");
    cy.get("#tomato").check();
    cy.get("select").select("small");
    cy.get("#topping1").check();
    cy.get("#topping2").check();
    cy.get("#topping3").check();
    cy.get(".btn").click();
  });
});
