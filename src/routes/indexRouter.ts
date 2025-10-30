import { Router } from "express";
import usersRouter from "./usuariosRoutes";
import booksRouter from "./librosRoutes";

export const indexRouter = Router();

indexRouter.use(`/api/v1/`, usersRouter );
indexRouter.use(`/api/v1/`, booksRouter);
