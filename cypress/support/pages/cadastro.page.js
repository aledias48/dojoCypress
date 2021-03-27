class CadastroPage {
  metodocadastro(nome, sobrenome, cep) {
    cy.get("[data-test=firstName]").type("nome");
    cy.get("[data-test=lastName]").type("sobrenome");
    cy.get("[data-test=postalCode]").type("cep");
    cy.get(".btn_primary").click();
  }

  metodovisitar() {
    cy.visit("/checkout-step-one.html");
  }


}
export default new CadastroPage();
