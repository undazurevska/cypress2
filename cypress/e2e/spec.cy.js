import TextBoxPage from "../pageObjects/TextBox.page";
import CheckboxPage from "../pageObjects/Checkbox.page";
import RadioButtonPage from "../pageObjects/RadioButton.Page";
import ButtonsPage from "../pageObjects/Buttons.Page";


describe("DemoQA spec", () => {
  context("Textbox scenarios", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Textbox - positive case", () => {
      TextBoxPage.username.type("Donald Duck");
      TextBoxPage.email.type("donald@email.com");
      TextBoxPage.currentAddress.type("Latvia, Rīga, Pīļu iela 6");
      TextBoxPage.permananetAddress.type("Latvia, Rīga, Iela 10");
      TextBoxPage.submitButton.click();
      TextBoxPage.nameOutput.should("have.text", "Name:Donald Duck")
      TextBoxPage.emailOutput.should("have.text", "Email:donald@email.com")
      TextBoxPage.currentAddressOutput.should("have.text","Current Address :Latvia, Rīga, Pīļu iela 6 ");
      TextBoxPage.permananetAddressOutput.should("have.text","Permananet Address :Latvia, Rīga, Iela 10");
    });

    it("Textbox - negative case", () => {
      TextBoxPage.email.type("xx");
      TextBoxPage.submitButton.click();
      TextBoxPage.email.should("have.class", "field-error");

    })
  });
  
  context("Chceckbox scenarios", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it('Check values - Note, Angular, Private, Excel', () => {
      CheckboxPage.expand.click();
      CheckboxPage.buttons.contains("Notes").click();
      CheckboxPage.buttons.contains("Angular").click();
      CheckboxPage.buttons.contains("Private").click();
      CheckboxPage.buttons.contains("Excel File.doc").click();
      CheckboxPage.outputText.should("contain.text", "notes");
      CheckboxPage.outputText.should("contain.text", "angular");
      CheckboxPage.outputText.should("contain.text", "excelFile");
    });

    it('Check values - Office', () => {
      CheckboxPage.expand.click();
      CheckboxPage.buttons.contains("Office").click();
      CheckboxPage.outputText.should("contain.text", "public");
      CheckboxPage.outputText.should("contain.text", "private");
      CheckboxPage.outputText.should("contain.text", "classified");
      CheckboxPage.outputText.should("contain.text", "general");
       });
  });

  context('Radio buttons scenarios', () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Click radio buttons", ()  => {
      RadioButtonPage.yesButton.click({force: true});
      RadioButtonPage.outputText.should("contain.text", "Yes");
      RadioButtonPage.impressiveButton.click({force: true});
      RadioButtonPage.outputText.should("contain.text", "Impressive");
      RadioButtonPage.noButton.should("have.class", "disabled");
    });
  });

  context('Buttons', () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it('Button clicking', () => {
      ButtonsPage.dblButton.dblclick();
      ButtonsPage.dblButtonOutput.should("have.text", "You have done a double click")
      ButtonsPage.rightButton.rightclick();
      ButtonsPage.rightButtonOutput.should("have.text", "You have done a right click");
      ButtonsPage.primaryButton.eq(2).click();      
      ButtonsPage.dynamicButtonOutput.should("have.text", "You have done a dynamic click");

    });
  });

});