import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

declare global {
    namespace Express {
        interface Request {
            user?: number
        }
    }
}

const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization || req.headers.Authorization as string;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];
    
    jwt.verify(token, process.env.TOKEN_SECRET as string, (err, decoded) => {
        if (err) return res.sendStatus(403);

        const decodedToken = decoded as { id: number };

        if (!decodedToken.id) return res.sendStatus(403); 
        
        req.user = decodedToken.id;
        next();
    });
}

export default verifyJwt;
