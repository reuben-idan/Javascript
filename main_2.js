let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

name= prompt("Enter name of Contact", "Reuben Idan");
phone= prompt( "Enter phone of Contact","027487432");
email= prompt ("Enter email of Contact", "reuben@gmail");
((name||phone)||email)? contacts.push({name,phone,email}):alert("Enter at least one detail of the contact: name, phone or email");

last=contacts.length-1;

console.log(`name: ${contacts[0].name}, phone: ${contacts[0].phone}, email: ${contacts[0].email}`);
console.log(`name: ${contacts[last].name}, phone: ${contacts[last].phone}, email: ${contacts[last].email}`);


