const basePage = {
    openUrl: page => {
		cy.server();
		cy.viewport(1200, 600);
		cy.visit(page);        
    }
};

module.exports = basePage;