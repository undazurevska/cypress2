import BasePage from "./Base.page";

class TextBoxPage {
    static get url() {
        return "/text-box";
    }
    static get username() {
        return cy.get('#userName');
    }

    static get email() {
        return cy.get('#userEmail');
    }

    static get currentAddress() {
        return cy.get('#currentAddress');
    }

    static get permananetAddress() {
        return cy.get('#permanentAddress');
    }

    static get submitButton() {
        return cy.get('#submit');
    }

    static get nameOutput() {
        return cy.get('#name');
    }

    static get emailOutput() {
        return cy.get('#email');
    }

    static get currentAddressOutput() {
        return cy.get('#output #currentAddress');
    }

    static get permananetAddressOutput() {
        return cy.get('#output #permanentAddress');
    }
}

export default TextBoxPage;