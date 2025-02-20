import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    let contacts = await readContacts();
    if (!Array.isArray(contacts)) {
      contacts = [];
    }
    const newContact = createFakeContact();
    contacts.push(newContact);
    await writeContacts(contacts);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
