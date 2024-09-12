import { Request, Response } from "express";
import { UserService } from "../services/UserService";

// Controller serve para validação dos dados que vão ser enviados para o service
export class UserController {
  //vamos precisar instanciar o nosso service, porque não queremos testá-lo novamente.
  userservice: UserService;
  constructor(userService = new UserService()) {
    this.userservice = userService;
  }

  //Regras de validações e operações.
  createUser = (req: Request, res: Response) => {
    const userService = new UserService();
    const user = req.body;

    if (!user.name)
      res.status(400).json({ message: "Bad Request! Name is required." });

    userService.createUser(user.name, user.idade);
    return res.status(201).json({ message: "Usuario criado" });
  };
  getAllDate = (req: Request, res: Response) => {
    const userService = new UserService();
    const db = userService.getAllData();
    return res.status(200).json(db);
  };
  deleteUser = (req: Request, res: Response) => {
    const paramsUser = req.params;
    const userService = new UserService();
    const db = userService.deleteUser(paramsUser.name);
    console.log(db);

    return res.status(201).json(db);
  };
}
