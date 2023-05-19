import BasePage from "./Base.page";


class RadioButtonPage {
    static get url() {
        return "/radio-button";
    }

    static get yesButton(){
        return cy.get('#yesRadio');
    }

    static get impressiveButton(){
        return cy.get('#impressiveRadio');
    }

    static get noButton(){
        return cy.get('#noRadio');
    }

    static get outputText() {
        return cy.get(".text-success");
    }
}

export default RadioButtonPage;