import { Request, Response, NextFunction } from 'express';

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


export const validateId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ message: '_id inválido' });
    }
    next();
};