import { createServer, plugins } from 'restify';

import { deletePerson } from './deletePerson';
import { getAllPersons } from './getAllPersons';
import { addPerson } from './addPerson';

var server = createServer();

server.use(plugins.bodyParser());

server.get('/api/contacts', getAllPersons);
server.post('/api/contacts', addPerson);
server.del('/api/contacts/:id', deletePerson);

server.listen(8080, () => console.log('API is listening'));