*Mini servidor*

- Aconselho usar a extensão do visual studio code chamada __Thunder Client__, serve basicamente para realizarmos a requisições de forma mais pratica e eficiente, é a mesma coisa do postman e bruno.

- Separação do projeto em pastas, a nomeclatura das pastas são de um arquitetura especifica p/ backend, focada na manipulação de dados do banco de dados
    - Controller -> Validação de cada dado antes de ser enviado para o service.
    - Service ->  O modelo do service serve para regras de negocios relacionadas ao banco de dados.
    - Routes -> São as rotas que cada requisição podem ser acessadas.

    > o __Route__ chama o __CONTROLLER__;
    > o __Controller__ chama o __SERVICE__;
    > o __Service__ manda para o banco de dados.

- Estamos utilizando o JEST.js para fazer testes unitarios.
    > npm i -D jest ts-jest @types/jest
    - configuração do jest.js precisamos alterar o testMatch e o preset para funcionar corretamente com o typescript.
    - testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"]
    - preset: "ts-jest" 
