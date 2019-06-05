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
  main.clickOnResults()
  .should('have.text','Red Dead Redemption 2')
});

And(`I navigate to detail page`, () => {
  main.navigateToDetail().click();
});

Then(`I should see price details`, () => {
  main.getPriceText()
  .should('have.text', 'Buy New')
});


