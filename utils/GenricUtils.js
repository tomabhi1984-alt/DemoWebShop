import users from "../test-data/users.json"

 export default class GenricUtils{

 constructor (page){
  this.page=page
 }

  async navigateTo()
  {
    await this.page.goto(users.url)
  }


    async clickOnElement(element){    // click
    await  element.click()
  }
 // Element in pass (this.elementName,i/p= json file)

  async enterTextField(element,input){
    await element.fill(input)
  }

  async getText(locator) {
    return await locator.textContent();
}
async isElementVisible(locator) {
    return await locator.isVisible();
}

async getAttribute(locator, attribute) {        //getAttribute
    return await locator.getAttribute(attribute);
}

async selectDropdownByLabel(locator, value) {  //dropdown
    await locator.selectOption({ label: value });
}
async getInputValue(locator) {             // get value
    return await locator.inputValue();
}

}