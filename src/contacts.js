import "./style/contacts.css";

const contacts = document.createElement("div");
contacts.className = "contacts";

const contactsContent = document.createElement("ul");

const contactsList = [
    {type: "Email", value: "sushi-house@example.com" },
    {type: "Phone", value: "+40 000000000"},
    {type: "Location", value: "Bucharest / Romania"}
]

function createContact(contact) {
    let newContact = document.createElement("li");
    newContact.textContent = contact.type + ": " + contact.value;
    contactsContent.appendChild(newContact);
}

for (let contact of contactsList) {
    createContact(contact);
}

contacts.appendChild(contactsContent);

export default contacts;