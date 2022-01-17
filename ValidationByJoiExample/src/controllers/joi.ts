import { NextFunction, Request, Response } from 'express';
import { IJoiData } from '../interfaces/joi';

const joiSampleRoute = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body as IJoiData;

    return res.status(200).json({
        data
    });
};

export default { joiSampleRoute };
