"use strict";

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];
   // Who is the Academy Member whose ID is 187?
   let memberId = academyMembers.find(memID => memID.memID == 187);
   console.log(memberId.name);
   console.log("------------------------------------------------");


   // Who has been in at least 3 films?
   let threePlus = academyMembers.filter(member => member.films.length >= 3);
let memberNames = threePlus.map(member => member.name).join("\n");
console.log(memberNames);

   console.log("------------------------------------------------");

   // Who has a name that starts with "Bob"?
   let nameBob = academyMembers.filter(Name => Name.name.includes("Bob"));
   nameBob.forEach(bobs => { 
    console.log(bobs.name);
})
console.log("------------------------------------------------");


