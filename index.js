// console.log('hello!');
// console.log(process.version);

const { listContacts } = require('./contacts');

const res = listContacts()
  .then(data => {
    console.table(JSON.parse(data));
  })
  .catch(error => console.error(error));

console.log(res);
