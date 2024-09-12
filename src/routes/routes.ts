import { Request, Response, Router } from "express";
import { UserController } from "../controllers/UserController";

// Utilizamos o route porque podemos/devemos ter uma router para diferentes metodos
export const router = Router();

const controllerUser = new UserController();

//localhost:5000/user
router.get("/user", controllerUser.getAllDate)
router.delete(`/user/:name`, controllerUser.deleteUser)