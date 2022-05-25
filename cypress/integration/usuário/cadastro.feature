Feature: Cadastro de Usuario

    Eu como consumidor desejo poder realizar o cadastro no site para que possa realizar minhas compras e ter uma lista pessoal de itens que recebo comprar, e receber promoções

   Scenario: Cadastrar Usuario valido
    Given clico para realizar sign-in
    When Informo o email para cadastro
     And finalizo meu cadastro de usuario preenchendo todos os dados
    Then o sistema realiza meu cadastro me autenticando na pagina

    Scenario: Cadastrar Usuario invalido
    Given clico para realizar sign-in
    When informo um email invalido para cadastro
    Then o sistema notifica que o email utilizado é invalido

    Scenario: Cadastrar Usuario com email já utilizado
    Given clico para realizar sign-in
    When informo um email ja utilizado para cadastro
    Then o sistema notifica que o email utilizado ja foi cadastrado