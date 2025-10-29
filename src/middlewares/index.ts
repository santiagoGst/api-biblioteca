import { Request, Response, NextFunction } from 'express';

// Valida JSON inválido
export const validateJson = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof SyntaxError && 'body' in err) {
        return res.status(400).json(
            {
                code: 400,
                message: 'JSON inválido'
            }
        );
    }
    next();
};