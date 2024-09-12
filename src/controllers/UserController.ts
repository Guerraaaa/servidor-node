import { Request, Response } from "express";
import { UserService } from "../services/UserService";

// Controller serve para validação dos dados que vão ser enviados para o service
const userService = new UserService();
export class UserController {
  createUser = (req: Request, res: Response) => {
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
    const db = userService.deleteUser(paramsUser.name);
    console.log(db);

    return res.status(201).json(db);
  };
}
