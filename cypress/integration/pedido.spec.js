    /// <reference types="cypress" />

import cadastroPage from "../support/pages/cadastro.page";
import usuario from "../fixtures/usuario.json"

    describe('Pedidos E2E', () => {

        beforeEach(() => {
            cy.visit('/')
            cy.login()
        });

        it('Deve fazer o pedido de ponta a ponta', () => {
            
            //Adicionar produto no carrinho 
            cy.addCarrinho()

            //login
            //cy.get('[data-test=username]').type('standard_user')
            //cy.get('[data-test=password]').type('secret_sauce')
            //cy.get('#login-button').click()

            //escolher o produto
           //cy.get(':nth-child(1) > .pricebar > .btn_primary').click()

            //carrinho
            //cy.get('path').click()
            //cy.get('.btn_action').click()

            //cadastro
                //cy.get('[data-test=firstName]').type('Alessandra')
               // cy.get('[data-test=lastName]').type('Dias')
               // cy.get('[data-test=postalCode]').type('01150-000')
               // cy.get('.btn_primary').click()
               
               cadastroPage.metodocadastro(usuario.nome, usuario.sobrenome, usuario.cep)

            cy.get('.btn_action').click()
            cy.screenshot()
            cy.get('.complete-header').contains('THANK YOU FOR YOUR ORDER')
            cy.screenshot()
            cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')

        });
    });