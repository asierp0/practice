"use strict";
// any vs unknown
Object.defineProperty(exports, "__esModule", { value: true });
let value = 2;
// value++;
// value.toUpperCase();
if (typeof value === 'number') {
    value++;
    console.log(value);
}
if (typeof value === 'string') {
    value.toUpperCase();
    console.log(value);
}
//# sourceMappingURL=index.js.map