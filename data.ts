export interface IPerson {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const persons: IPerson[] = [
  { id: 1, firstName: 'Nikolaus', lastName: 'Engelschall', email: 'nikoschall@gmail.com' },
  { id: 2, firstName: 'Simon', lastName: 'Primetzhofer', email: 'simon.primetzhofer@live.at' },
  { id: 3, firstName: 'Kaan', lastName: 'Baylan', email: 'kaan.baylan28@gmail.com' }
];
