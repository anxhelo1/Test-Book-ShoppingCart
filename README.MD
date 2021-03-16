Developed task to calculate the shoping cart price based on discount rules provided in task description

I modeled a shoping carts using  the ShoppingCart class which exposes the getDiscountedPrice method wich calculates the price based on the rules.

I was not able to write the `Best scenario algorithm` to get the lowest price based on rules,

The current algorithm forms the `biggest` groups so in case of input quantities [2, 2, 2, 1, 1] it will form [5, 3] and apply the discount rules



* To run the project install the deps with `npm i` and run the command `tsc tests.ts && node tests.js`
