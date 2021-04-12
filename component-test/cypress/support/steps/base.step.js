import basePage from '../pageobjects/base.page.js'

Given('que acesso a pagina inicial', () => {
    basePage.openUrl('http://localhost:3000');
})