import { Book } from "./Book";
import { ShoppingCartRow } from "./ShoppingCartRow";

export default class ShoppingCart {
  private _rows: ShoppingCartRow[];
  private _discounts: Map<number, number>;

  /**
   * the shopping card takes from constructor the shoppingCartRows and discount rules so it can work with different cases
   * @param rows
   * @param discounts
   */
  constructor(rows: ShoppingCartRow[], discounts: Map<number, number>) {
    this._rows = rows;
    this._discounts = discounts;
  }

  getDiscountedPrice = (): number => {
    // if no rows on the shopping cart return 0;
    if (this._rows == undefined || this._rows.length == 0) {
      return 0;
    }
    //get the grossPriceWithout any discount
    let grossPrice = this._calculateGrossPrice();

    //if no discount provided then return grossPrice
    if (this._discounts.size == 0) {
      return grossPrice;
    }

    let totalPrice = 0;

    //split order into groups to form discounts
    let orderGroups = this._splitOrderIntoGroups();

    orderGroups.forEach((group) => {
      //get discount for group
      let discount = this._discounts.get(group.length);
      //calculate the sum of the prices to get discounted in case of no discount rule, use whole price
      let groupPrice = this._calculateGroupPrice(group);
      totalPrice +=
        discount && discount != 0
          ? groupPrice - (groupPrice * discount) / 100
          : groupPrice;
    });

    return totalPrice;
  };

  public _splitOrderIntoGroups(): Book[][] {
    var booksGroups = [];
    //get the max quantity to form the groups
    var max = this._getMaxQuantity();

    for (let index = 1; index <= max; index++) {
      var booksGroup: Book[] = [];
      this._rows.forEach((row) => {
        //if the quantity fo this row is not reached yet, the book can be added to the group
        if (row.quantity >= index) {
          booksGroup.push(row.book);
        }
      });

      booksGroups.push(booksGroup);
    }

    return booksGroups;
  }

  /**
   * Returns the max quantity of the order
   */
  private _getMaxQuantity(): number {
    return Math.max(...this._rows.map((row) => row.quantity));
  }

  /**
   * Calculates the totalPrice in case of no discount
   */
  private _calculateGrossPrice = (): number => {
    return this._rows
      .map((row) => row.quantity * row.book.price)
      .reduce((accumulator, price) => (accumulator = accumulator + price));
  };

  /**
   * Sums the prices of group
   * @param group
   */
  private _calculateGroupPrice = (group: Book[]): number => {
    return group.reduce(
      (accumulator, book) => (accumulator = accumulator + book.price),
      0
    );
  };
}
