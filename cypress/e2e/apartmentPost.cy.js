const cypressConfig = require("../../cypress.config");

describe("test willow API GETs", () => {
  beforeEach(() => {
    cy.visit("https://willowapi.onrender.com/api-docs");
  });

  it("can click on Try It Out and POST apartment listing", () => {
    cy.get("div.scheme-container > section > label > select").select("https");
    cy.get(
      "#operations-apartments-post_apartments_ > div > button"
    ).click();
    cy.get("button.btn.try-out__btn").click();
    //  curently just tests example code - trying to enter new information to POST need move back into curly braces and type listing...
    // cy.get('[data-name = "examplePanel"]').clear();
    // cy.get('[data-name = "examplePanel"]').type(
    //     `${postListing}`
    //   );
    cy.get(
      "#operations-apartments-post_apartments_ > div.no-margin > div > div.execute-wrapper > button"
    ).click();
    cy.get(
      "#operations-apartments-post_apartments_ > div.no-margin > div > div.responses-wrapper > div.responses-inner > div > div > table > tbody > tr > td.response-col_status"
    ).should("have.text", 201);
    cy.log("Verify json posts a listing with a status of 201."); 
  });
});
