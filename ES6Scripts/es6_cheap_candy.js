"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Milky Chocolate M&Ms", price: 1.79},
    {product: "Bottle Pop", price: 2.79},
    {product: "Sweet Tarts", price: 4.79},
    {product: "Sour Patch", price: 5.25},
    {product: "Airheads", price: 2.20},
    {product: "Dots", price: 1.39},
   ];

// Which candies costs less than $4.00?
let cheapCandy = products.filter(product => product.price < 4.00);
for (let i = 0; i < cheapCandy.length; i++) {
    console.log(cheapCandy[i].product);
}
console.log("------------------------------------------------");
// Which candies has "M&M" its name?
let mAndM = products.filter(product => product.product.includes("M&M"));
//for (let i = 0; i < mAndM.length; i++) {
  //  console.log(mAndM[i].product);
//}

mAndM.forEach(candyNames => { 
    console.log(candyNames.product);
})
console.log("------------------------------------------------");
// Do we carry "Swedish Fish"?
let fishCandy = products.find(product => product.product == "Swedish Fish");
console.log(fishCandy.product);