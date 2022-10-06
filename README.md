Pojeto de automação de teste de interface.

Objetivo dos tetes:
  Testes positivos e negativos nas atividades de criação de conta e de Login.

Tecnologia:
  Cypress como framework de automação;
  Cucumber pra escrita do casos de teste e estrutura de código;

Estrutura:
  Integration/usuario:
     Onde se encontram as features com os cenários de testes realizados;
  
  Plugins:
    Onde está configurado o cucumber;
  
  Support:
    Elements:
      Classe onde é feita a captura dos elementos utilizados;
    Pages:
      Classe onde são feitas as interções com os elementos capturados que foram armazenados na pasta Elements;
    step_definitions:
      Onde estão as classes de testes, dividas por steps para melhor organização do projeto;
    
  
