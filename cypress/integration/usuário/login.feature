Feature: Login

    Eu como consumidor desejo realizar login no site para que possa continuar realizando as minhas compras


    Scenario: Login Usuario valido
    Given clico para realizar sign-in
    When preencho os dados de login com usuario valido
     And clico para realizar login
    Then o sistema realiza o login me autenticando na pagina

    Scenario: Login com usuario valido utilizando Enter
    Given clico para realizar sign-in
    When preencho os dados de login com usuario valido, pressionando enter em seguida
    Then o sistema realiza o login me autenticando na pagina

    Scenario: Login com usuario valido e informando senha errada
    Given clico para realizar sign-in
    When preencho os dados de login com usuario valido, informando senha errada
     And clico para realizar login
    Then o sistema notifica que houve problema com a autenticaçao

    Scenario: Login com email não cadastrado
    Given clico para realizar sign-in
    When preencho os dados de login com usuario não cadastrado
     And clico para realizar login
    Then o sistema notifica que houve problema com a autenticaçao

    Scenario: Login sem informar email
    Given clico para realizar sign-in
    When preencho os dados de login sem informar email
     And clico para realizar login
    Then o sistema notifica que e necessario informar o email

    Scenario: Login sem informar senha
    Given clico para realizar sign-in
    When preencho os dados de login sem informar senha
     And clico para realizar login
    Then o sistema notifica que e necessario informar a senha