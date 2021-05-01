"use strict";
// prevent widening of object literals with TS's const Assertions
{
    const ORIGIN = {
        x: 0,
        y: 0
    };
    console.log(ORIGIN);
} // as const --> asserts that this is a READONLY object literal
// both x and y have numeric literal type 0, not number -- NO WIDENING
// TS infers type of greatest specificity corresponding to object literal 0
// however, no runtime manifestation :'(
// SOLUTION -- call Object.freeze() method on it
/**
 * @method Object.freeze prevents runtime modification of Readonly Object literals
 * IDEAL APPROACH
 */
{
    const ORIGIN = Object.freeze({
        x: 0,
        y: 0
    });
    console.log(ORIGIN);
}
// same outcome but much less verbose! &uarr;
//# sourceMappingURL=index.js.map