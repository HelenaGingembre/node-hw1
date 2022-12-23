// console.log('hello!');
// console.log(process.version);

const { listContacts, getContactById } = require('./contacts');

const res = listContacts()
  .then(data => {
    console.table(data);
  })
  .catch(error => console.error(error));

// console.log(res);

const resById = getContactById('2')
  .then(data => {
    console.table(data);
  })
  .catch(error => console.error(error));

console.log(resById);
