describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Show User Not Logged at start", () => {
    cy.byTestId("welcome").should("have.text", "User Not Logged");
  });

  it("Show User Logged when we click on sigin in", () => {
    cy.byTestId("btn").last().click();
    cy.byTestId("welcome").should("have.text", "User Logged");
  });

  it("Show Logout Button when User Logged when we click on sigin in", () => {
    cy.byTestId("btn").last().click();
    //cy.byTestId("btn").first().should("have.text", "Logout");
    cy.byTestId("btn").first().should("have.text", "Logout");
  });
  it("Show 10 users when we click on sigin in", () => {
    cy.byTestId("btn").last().click();
    cy.byTestId("list-users").children().should("have.length", 10);
  });
  it("Show Logout Button when User Logged when we click on sigin in", () => {
    cy.byTestId("btn").last().click();
    for (let i = 0; i < 10; i++) {
      cy.get("#list-users")
        .children(`#u${i}`)
        .should("contain.text", `User ${i}`);
    }
  });
});
