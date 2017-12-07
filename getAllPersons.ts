import { Request, Response, Next } from 'restify';
import { persons } from './data';

export function getAllPersons(req: Request, res: Response, next: Next): void {
    res.send(persons);
    next();
}