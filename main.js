class Contact {
    constructor(name, phone) {
      this.name = name;
      this.phone = phone;
    }
  }
  
  class ContactBook {
    constructor() {
      this.contacts = this.loadContactsFromStorage();
    }
  
    addContact(contact) {
      this.contacts.push(contact);
      this.saveContactsToStorage();
    }
  
    removeContact(index) {
      this.contacts.splice(index, 1);
      this.saveContactsToStorage();
    }
  
    getAllContacts() {
      return this.contacts;
    }
  
    saveContactsToStorage() {
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
  
    loadContactsFromStorage() {
      const contactsData = localStorage.getItem('contacts');
      return contactsData ? JSON.parse(contactsData) : [];
    }
  }
  
  const contactBook = new ContactBook();
  
  const contact1 = new Contact('Kalys', '70707070');
  contactBook.addContact(contact1);
  
  const contact2 = new Contact('Nurik', '505050505');
  contactBook.addContact(contact2);
  
  const allContacts = contactBook.getAllContacts();
  console.log(allContacts);
  
  contactBook.removeContact(0);
  
  const updatedContacts = contactBook.getAllContacts();
  console.log(updatedContacts);
  