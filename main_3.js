let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

function displayContact(contact) {
    console.log(`Name: ${contact.name}`);
    console.log(`Phone: ${contact.phone}`);
    console.log(`Email: ${contact.email}`);
    console.log("----------------------");
}

function displayAllContacts() {
    contacts.forEach(displayContact);
}

function addNewContact() {
    let name = prompt("Enter contact name:");
    let phone = prompt("Enter contact phone:");
    let email = prompt("Enter contact email:");
    
    if (name && phone && email) {
        contacts.push({ name, phone, email });
        console.log("New contact added successfully!");
    } else {
        console.log("Invalid input. Contact not added.");
    }
}

function mainMenu() {
    let choice;
    do {
        choice = prompt("Choose an option: first, last, all, new, quit");
        switch (choice) {
            case "first":
                displayContact(contacts[0]);
                break;
            case "last":
                displayContact(contacts[contacts.length - 1]);
                break;
            case "all":
                displayAllContacts();
                break;
            case "new":
                addNewContact();
                break;
            case "quit":
                console.log("Exiting program...");
                break;
            default:
                console.log("Invalid option. Try again.");
        }
    } while (choice !== "quit");
}

mainMenu();
