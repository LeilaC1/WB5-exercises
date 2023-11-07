"use strict";

let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
   ];

   function itemName(cartItem) {
    return cartItem.item;
   }
   let itemLists = cart.map(itemName).sort();
   itemLists.forEach(dispayItem);

   function dispayItem(itemLists){
    console.log(itemLists);
   }

   // reduce
   function getTotal(currentTotal, itemLists) {

    return currentTotal + itemLists.price * itemLists.quantity;
   }
   let totalCost = cart.reduce(getTotal, 0);
console.log(totalCost);
