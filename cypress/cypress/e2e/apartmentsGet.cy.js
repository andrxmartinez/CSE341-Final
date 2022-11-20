const cypressConfig = require("../../cypress.config");

describe("test willow API GETs", () => {
  beforeEach(() => {
    cy.visit("https://willowapi.onrender.com/api-docs");
  });

  it("displays apartments endpoint", () => {
    cy.get("#operations-tag-apartments").should("have.text", "apartments");

    cy.get("#operations-apartments-get_apartments_").should(
      "have.text",
      "GET/apartments/"
    );
    cy.get("#operations-apartments-post_apartments_").should(
      "have.text",
      "POST/apartments/"
    );
    cy.get("#operations-apartments-get_apartments__id_").should(
      "have.text",
      "GET/apartments/{id}"
    );
    cy.get("#operations-apartments-put_apartments__id_").should(
      "have.text",
      "PUT/apartments/{id}"
    );
    cy.get("#operations-apartments-delete_apartments__id_").should(
      "have.text",
      "DELETE/apartments/{id}"
    );
  });

  it("can click on Try It Out for get single apartment listing", () => {
    // We'll store our id in a variable so we can reuse it
    const newId = "6373d5c4f6b80d5877da2497";
    cy.get("div.scheme-container > section > label > select").select("https");
    // https://on.cypress.io/selecting-elements
    cy.get(
      "#operations-apartments-get_apartments__id_ > div.opblock-summary.opblock-summary-get > button"
    ).click();
    cy.get("button.btn.try-out__btn").click();
    cy.get("#operations-apartments-get_apartments__id_  input[type=text]").type(
      `${newId}{enter}`
    );
    cy.get("#operations-apartments-get_apartments__id_ > div.no-margin > div > div.execute-wrapper > button").click();
    cy.get("#operations-apartments-get_apartments__id_ > div.no-margin > div > div.responses-wrapper > div.responses-inner > div > div > table > tbody > tr > td.response-col_status").should('have.text', 200)
    cy.log("Verify json returns single document.")
  });

  
});
