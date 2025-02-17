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

// Function to display a specific contact by index
function showContact(contactList, index) {
    if (!(contactList instanceof Array)) {
        console.error("Invalid contact list. Expected an array.");
        return;
    }
    if (index < 0 || index >= contactList.length || isNaN(index)) {
        console.error("Invalid index. No contact found.");
        return;
    }
    console.log(`\nContact Details:`);
    console.log(`Name: ${contactList[index].name}`);
    console.log(`Phone: ${contactList[index].phone}`);
    console.log(`Email: ${contactList[index].email}`);
}

// Function to display all contacts
function showAllContacts(contactList) {
    if (!(contactList instanceof Array)) {
        console.error("Invalid contact list. Expected an array.");
        return;
    }
    console.log("\nAll Contacts:");
    contactList.forEach((contact, index) => {
        console.log(`\nContact ${index + 1}:`);
        console.log(`  Name: ${contact.name}`);
        console.log(`  Phone: ${contact.phone}`);
        console.log(`  Email: ${contact.email}`);
        console.log("------------------------");
    });
}

// Function to add a new contact
function addNewContact(contactList, name, phone, email) {
    if (!(contactList instanceof Array)) {
        console.error("Invalid contact list. Expected an array.");
        return;
    }
    if (!name || !phone || !email) {
        console.error("Invalid contact data. All fields are required.");
        return;
    }
    contactList.push({ name, phone, email });
    console.log("\nNew contact added successfully.");
}

// Function to prompt user for actions
function startProgram() {
    while (true) {
        let choice = prompt(
            "Choose an option:\n1. Show a contact\n2. Show all contacts\n3. Add a new contact\n4. Exit"
        );

        switch (choice) {
            case "1":
                let index = parseInt(prompt("Enter the contact index (starting from 1):")) - 1;
                showContact(contacts, index);
                break;
            case "2":
                showAllContacts(contacts);
                break;
            case "3":
                let name = prompt("Enter contact name:");
                let phone = prompt("Enter contact phone:");
                let email = prompt("Enter contact email:");
                addNewContact(contacts, name, phone, email);
                break;
            case "4":
                console.log("Exiting program.");
                return;
            default:
                console.log("Invalid option. Please choose again.");
        }
    }
}

// Start the program
startProgram();
