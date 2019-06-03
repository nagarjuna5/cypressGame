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
  }
  
  export default MainPage;