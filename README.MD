Developed task to calculate the shoping cart price based on discount rules provided in task description

I modeled a shoping carts using  the ShoppingCart class which exposes the getDiscountedPrice method wich calculates the price based on the rules.

I was not able to write the `Best scenario algorithm` to get the lowest price based on rules,

The current algorithm forms the `biggest` groups so in case of input quantities [2, 2, 2, 1, 1] it will form [5, 3] and apply the discount rules

* To run the project install the dependencies with `npm install` and run the command `npm run test` to run the unit tests.

* Also I added the possibility to see the code coverage by running `npm run coverage`.

To see the coverage results simply open `coverage\lcov-report\index.html` to your browser.





