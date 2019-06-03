/// <reference types="Cypress" />

import myAssertion from "./myAssertion";
import MainPage from "./MainPage"
const {
  Given,
  And,
  When,
  Then
} = require("cypress-cucumber-preprocessor/steps");

const main = new MainPage();

Given(`I open Game website`, () => {
  main.visit();
});

When(`I type {string} in the search`, (searchText: String) => {
  main.getSearch()
  .click()
  .type(searchText.valueOf())
});

And(`I click on search button`, () => {
  main.clickOnSearch()
});

Then(`I should see list of results`, () => {
  myAssertion();
  cy.get(':nth-child(2) > .productHeader > h2 > a')
  .should('have.text','Red Dead Redemption 2')
});

And(`I navigate to detail page`, () => {
  cy.get(':nth-child(2) > .productHeader > h2 > a').click();
});

Then(`I should see price details`, () => {
  cy.get('.btnMint > .addToBasket > .btnName')
  .should('have.text', 'Buy New')
});


