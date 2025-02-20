import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    let contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      contacts = [];
    }
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
