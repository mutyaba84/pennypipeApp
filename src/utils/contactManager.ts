let contacts: string[] = [];
export const saveContact = (nameOrEmail: string) => {
  if (!contacts.includes(nameOrEmail)) contacts.push(nameOrEmail);
};
export const getContacts = () => contacts;
export const isContactSaved = (nameOrEmail: string) => contacts.includes(nameOrEmail);