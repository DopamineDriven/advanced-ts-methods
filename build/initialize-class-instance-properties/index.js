"use strict";
var _a, _b;
class UserName {
    // most idiomatic approach
    constructor(username) {
        this.username = username;
    }
}
const userName = new UserName('asross');
// userName.setUsername('asross');
const username = (_b = (_a = userName.username) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : 'username N/A';
console.log(username);
