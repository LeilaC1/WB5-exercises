"use strict";

let menu = [
    [
      { item: "Sausage and Egg Biscuit", price: 3.69 },
      { item: "Bacon and Egg Biscuit", price: 3.49 },
      { item: "Ham and Egg Biscuit", price: 3.29 }
    ],
    [
      { item: "Grilled Chicken Sandwich", price: 5.99 },
      { item: "Caesar Salad", price: 6.49 },
      { item: "Turkey Club Sandwich", price: 4.99 },
      { item: "Vegetarian Wrap", price: 7.29 }
    ],
    [
      { item: "Spaghetti Bolognese", price: 10.99 },
      { item: "Grilled Salmon", price: 12.49 },
      { item: "Steak and Mashed Potatoes", price: 8.99 },
      { item: "Vegetable Stir-Fry", price: 11.29 },
      { item: "Shrimp Scampi", price: 9.49 }
    ]
  ];
  
  let meal;
  let menuTitles = ["Breakfast Menu", "Lunch Menu", "Dinner Menu"];

if (meal = 0 && meal < menuTitles.length) {
  console.log(menuTitles[0]);
}

if (meal === 0)
console.log("Breakfast");
for (let item of menu[0]) {
    console.log(`${item.item}: ${item.price}`);
}
console.log("------------------------------------------------");
if (meal = 1 && meal < menuTitles.length) {
    console.log(menuTitles[1]);
  }
if (meal === 1)
console.log("Lunch");
for (let item of menu[1]) {
    console.log(`${item.item}: ${item.price}`);
}
console.log("------------------------------------------------");
if (meal = 2 && meal < menuTitles.length) {
    console.log(menuTitles[2]);
  }
if (meal === 2)
console.log("dinner");
for (let item of menu[2]) {
    console.log(`${item.item}: ${item.price}`);
}
