const cypressConfig = require("../../cypress.config");

describe("test willow API GETs", () => {
  beforeEach(() => {
    cy.visit("https://willowapi.onrender.com/api-docs");
  });

  it("can click on Try It Out for POST apartment listing", () => {
    // We'll store our id in a variable so we can reuse it
    const postListing = `{
        "price": "any",
        "listDate": "any",
        "address": "any",
        "residenceType": "any",
        "yearBuilt": "any",
        "sqFeet": "any",
        "pricePerSqFeet": "any",
        "availability": "any",
        "propertyDescription": "any",
        "lengthTimeListed": "any"
      }`;
    cy.get("div.scheme-container > section > label > select").select("https");
    // https://on.cypress.io/selecting-elements
    cy.get(
      "#operations-apartments-post_apartments__id_ > div.opblock-summary.opblock-summary-get > button"
    ).click();
    cy.get("button.btn.try-out__btn").click();
    cy.get("#operations-apartments-post_apartments__id_  textarea").type(
      `${postListing}`
    );
    cy.get(
      "#operations-apartments-post_apartments__id_ > div.no-margin > div > div.execute-wrapper > button"
    ).click();
    cy.get(
      "#operations-apartments-post_apartments__id_ > div.no-margin > div > div.responses-wrapper > div.responses-inner > div > div > table > tbody > tr > td.response-col_status"
    ).should("have.text", 201);
    cy.log("Verify json posts a listing with a status of 201."); 
  });
});
