import { CREATED, CONFLICT, ACCEPTED } from 'http-status-codes';
import { Next, Request, Response } from 'restify';
import { BadRequestError } from 'restify-errors';
import { persons, IPerson } from './data';

export function addPerson(req: Request, res: Response, next: Next): void {
  if (!req.body.id || !req.body.email) {
    next(new BadRequestError('Missing mandatory member(s)'));
  } else {
    const newPersonId = parseInt(req.body.id);
    if (!newPersonId) {
      next(new BadRequestError('ID has to be a numeric value'));
    } else {
      //in case the specified id already exists
      const customerIndex = persons.findIndex(c => c.id === newPersonId);
      if (customerIndex !== (-1)) {
        res.send(CONFLICT, 'an element with the specified ID already exists');
      } else {
        const newPerson: IPerson = {
          id: newPersonId,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email
        };
        persons.push(newPerson);
        res.send(CREATED, newPerson, { Location: `${req.path()}/${req.body.id}` });
      }
    }
  }
}