"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders = void 0;
const products_db_1 = require("./products.db");
exports.orders = [
    { id: "11", orderDate: new Date(), productsOrdered: [products_db_1.products[1]] },
    { id: "12", orderDate: new Date(), productsOrdered: [products_db_1.products[0], products_db_1.products[2]] },
    { id: "13", orderDate: new Date(), productsOrdered: [products_db_1.products[1], products_db_1.products[0]] }
];
//# sourceMappingURL=order.db.js.map