import BasePage from "./Base.page"

class ButtonsPage {
    static get url() {
        return "/buttons";
    }

    static get dblButton() {
        return cy.get('#doubleClickBtn');
    }

    static get dblButtonOutput() {
        return cy.get('#doubleClickMessage');
    }

    static get rightButton() {
        return cy.get('#rightClickBtn');
    }

    static get rightButtonOutput() {
        return cy.get('#rightClickMessage');
    }

    static get primaryButton(){
        return cy.get(".btn-primary");
    }

    static get dynamicButtonOutput() {
        return cy.get('#dynamicClickMessage');
    }
}

export default ButtonsPage;