class MainPage {
    
    visit() {
      cy.visit('https://www.game.co.uk/');
    }
    
    getSearch() {
      return cy.get('#search');
    }

    clickOnSearch() {
      return cy.get('#searchButton').click();
    }

    clickOnResults() {
      return cy.get(':nth-child(2) > .productHeader > h2 > a');
    }

    navigateToDetail() {
      return cy.get(':nth-child(2) > .productHeader > h2 > a');
    }

    getPriceText() {
      return cy.get('.btnMint > .addToBasket > .btnName');
    }
  }
  
  export default MainPage;