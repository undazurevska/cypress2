class BasePage {
    static get url() {
        return "";
    }

    static visit() {
        crypto.visit(this.url);
    }
}

export default BasePage;