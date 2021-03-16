import ShoppingCart from "./ShoppingCart";

const products = [
  {
    book: {
      price: 8,
      series: "1",
    },
    quantity: 2,
  },
  {
    book: {
      price: 8,
      series: "2",
    },
    quantity: 2,
  },
  {
    book: {
      price: 8,
      series: "3",
    },
    quantity: 2,
  },
  {
    book: {
      price: 8,
      series: "4",
    },
    quantity: 1,
  },

  {
    book: {
      price: 8,
      series: "5",
    },
    quantity: 1,
  },
];

//discount rules
const discounts = new Map<number, number>();

discounts.set(2, 5);
discounts.set(3, 10);
discounts.set(4, 20);
discounts.set(5, 25);

var s = new ShoppingCart(products, discounts);



/**
 * The split algorithm forms the `biggest` groupping possible
 * so in case of the input the best case scenario to get minimum price would be 4 + 4
 * but the algorithm splits them 5 + 3
 * 5 with 25% discount
 * 3 with 10% discount
 [
  [
    { price: 8, series: '1' },
    { price: 8, series: '2' },
    { price: 8, series: '3' },
    { price: 8, series: '4' },
    { price: 8, series: '5' }
  ],
  [
    { price: 8, series: '1' },
    { price: 8, series: '2' },
    { price: 8, series: '3' }
  ]
]
 */
console.log(s._splitOrderIntoGroups());

console.log(s.getDiscountedPrice());
