import express, { Response, Request } from "express";
import { router } from "./routes/routes";
import { UserController } from "./controllers/UserController";

//Express por padrão não utiliza JSON
const server = express();

//Chamando o routerUser
server.use(router);

// Fazendo isso, podemos utilizar o JSON tranquilamente.
server.use(express.json()); //Se caso a chamada do .json estiver sem parenteses, a requisição irá ficar em um looping eterno

/* 
  A primeira props é a URL que vai ser acessada, a segunda propriedade é o request e o response.
  caminho para teste: localhost:5000/
*/

const controllerUser = new UserController();
server.get("/", (request: Request, response: Response) => {
  return response.status(200).json({ message: "Ok" });
});
server.post("/user", controllerUser.createUser);
// A primeira props é a porta que vai rodar o nosso servidor, e a segunda propriedade é uma função de callback.
server.listen(5000, () => console.log("Server on"));
