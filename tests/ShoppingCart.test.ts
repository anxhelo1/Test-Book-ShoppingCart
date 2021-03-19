import { expect } from "chai";
import ShoppingCart from "../src/ShoppingCart";
import { ShoppingCartRow } from "../src/ShoppingCartRow";

describe('ShoppingCart Tests', function () {
    it('should return 0 if no items in the cart', function () {
        let products: ShoppingCartRow[] = []
        let discount = new Map<number, number>();
        
        let s = new ShoppingCart([], new Map<number, number>());
        let result = 0;

        expect(s.getDiscountedPrice()).equals(result);
    });


    it('should return total with no discount if no discount rules provided', function () {
        let products: ShoppingCartRow[] = [{ book: { price: 8, series: 'series1' }, quantity: 2 }, { book: { price: 8, series: 'series2' }, quantity: 2 }]
        let discount = new Map<number, number>();

        let s = new ShoppingCart(products, discount);
        let result = 32;

        expect(s.getDiscountedPrice()).equals(result);
    });


    it('should return total with discount', function () {
        let products: ShoppingCartRow[] = [{ book: { price: 8, series: 'series1' }, quantity: 2 }, { book: { price: 8, series: 'series2' }, quantity: 2 }]
        let discount = new Map<number, number>();
        discount.set(2, 10)
        
        let s = new ShoppingCart(products, discount);
        let result = 28.8;

        expect(s.getDiscountedPrice()).equals(result);
    });

    it('should return total if there is no disount that matches the number of product series', function () {
        let products: ShoppingCartRow[] = [{ book: { price: 8, series: 'series1' }, quantity: 2 }, { book: { price: 8, series: 'series2' }, quantity: 2 }]
        let discount = new Map<number, number>();
        discount.set(3, 10)
        discount.set(4, 20)
        
        let s = new ShoppingCart(products, discount);
        let result = 32;

        expect(s.getDiscountedPrice()).equals(result);
    });

});
