import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  let contacts = await readContacts();
  if (!Array.isArray(contacts)) {
    contacts = [];
  }
  if (contacts.length === 0) {
    return;
  }
  const removedContact = contacts.pop();

  await writeContacts(contacts);

  return removedContact;
};
removeLastContact();
