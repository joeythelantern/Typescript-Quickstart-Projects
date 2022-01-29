import { NextFunction, Request, Response } from 'express';
import { IYupData } from '../interfaces/yup';

const yupSampleRoute = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        locals: res.locals.data as IYupData,
        body: req.body
    });
};

export default { yupSampleRoute };
