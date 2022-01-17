import { object, string, number, date, AnyObjectSchema } from 'yup';
import { NextFunction, Request, Response } from 'express';

export const ValidateYup = (schema: AnyObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await schema.validate(req.body);

            console.log(data);

            next();
        } catch (error) {
            console.error(error);

            return res.status(422).json({ error });
        }
    };
};

export const Schemas = {
    data: object().shape({
        name: string().required(),
        age: number().required().positive().integer(),
        email: string().email(),
        website: string().url(),
        createdOn: date().default(() => new Date())
    })
};
