const fs = require('fs').promises;
const path = require('node:path');

const contactsPath = path.resolve('./db/contacts.json');

// TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    return data;
  } catch (error) {
    console.error(error);
  }
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
};
