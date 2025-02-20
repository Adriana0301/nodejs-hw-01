import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    return 0;
  }
  return contacts.length;
};

console.log(await countContacts());
