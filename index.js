// console.log('hello!');
// console.log(process.version);

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');

const res = listContacts()
  .then(data => {
    console.table(data);
  })
  .catch(error => console.error(error));

const resById = getContactById(2)
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));

const resRemoveById = removeContact(10)
  .then(data => {
    console.table(data);
  })
  .catch(error => console.error(error));

const resAdd = addContact('Allen Lane', 'alen@gmail.com', '(123) 813-3456');
