const fs = require('node:fs/promises');

const path = require('node:path');

const contactsPath = path.resolve('./db/contacts.json');

// TODO: задокументировать каждую функцию
async function readDb() {
  const dbRaw = await fs.readFile(contactsPath, { encoding: 'utf8' });
  const db = JSON.parse(dbRaw);
  return db;
}
async function writeDB(data) {
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
}

async function listContacts() {
  try {
    const data = await readDb();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getContactById(contactId) {
  try {
    const data = await readDb();

    return data.find(item => Number(item.id) === Number(contactId));
  } catch (error) {
    console.error(error);
  }
}

async function removeContact(contactId) {
  try {
    const data = await readDb();

    const updateContact = data.filter(
      item => Number(item.id) !== Number(contactId)
    );
    await writeDB(updateContact);
    console.log(`Kонтакт deleted, id = ${contactId}`);
  } catch (error) {
    console.error(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await readDb();

    const lastContactId = data.slice(-1).find(el => el).id;

    const newContact = {
      id: JSON.stringify(Number(lastContactId) + 1),
      name: name,
      email: email,
      phone: phone,
    };
    const updateContact = [...data, newContact];
    await writeDB(updateContact);
    console.log(`Kонтакт записан, id = ${newContact.id}`);
    return readDb();
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
