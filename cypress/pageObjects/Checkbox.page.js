import BasePage from "./Base.page";

class CheckboxPage {
    static get url() {
        return "/text-box";
    }

    static get expand() {
        return cy.get(".rct-option-expand-all") 
    }

    static get buttons(){
        return cy.get(".rct-title");
    }

    static get outputText() {
        return cy.get(".text-success");
    }
}

export default CheckboxPage;