// reduce method used for arr
// import method used in real world example
const arr = [3, 4, 5, 6, 8, 1, 30, 11, 34];

const result1 = arr.reduce((accumuator, currentvale) => {
  return accumuator + currentvale;
});
+console.log(result1);

const result2 = arr.reduce((accumuator, currentvale) => {
  return accumuator + currentvale;
}, 10);
console.log(result2);

const addtoCart = [
  { product_id: 101, product_name: "shoes", price: 12000 },
  { product_id: 201, product_name: "shirt", price: 22000 },
  { product_id: 301, product_name: "T-shirt", price: 32000 },
  { product_id: 401, product_name: "cap", price: 34000 },
];

const res = addtoCart.reduce((totalprice, currentproductPrice) => {
  return currentproductPrice.price + totalprice;
}, 10);

console.log(res);
