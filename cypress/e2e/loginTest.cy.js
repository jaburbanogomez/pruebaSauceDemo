describe('Smoke Test - Login SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  // 1️⃣ Login exitoso cuando se ingresan credenciales válidas
  it('Login exitoso con credenciales válidas', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
  })

  // 2️⃣ Login fallido cuando se ingresa contraseña incorrecta
  it('Login fallido con contraseña incorrecta', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrong_password')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]').should(
      'contain.text',
      'Incorrect username and password'
    )
  })

  // 3️⃣ Validación de campos obligatorios en login
  it('Validación de campos obligatorios', () => {
    cy.get('#login-button').click()

    cy.get('[data-test="error"]').should(
      'contain.text',
      'Username is required'
    )
  })

})
