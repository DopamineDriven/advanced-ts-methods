"use strict";
function swap(tuple) {
    const [first, second] = tuple;
    return [second, first];
}
{
    const ORIGIN = [0, 0];
}
// same outcome (above and below) -- bottom is less verbose _and_ has higher type specificity
{
    const ORIGIN = [0, 0];
}
{
    const keyValuePair = [1, 'one'];
    const valueKeyPair = swap(keyValuePair);
    console.log('least specificity', valueKeyPair);
}
{
    const keyValuePairConst = [1, 'one'];
    const valueKeyPair = swap(keyValuePairConst);
    console.log('least verbose, but can be modified at runtime', valueKeyPair);
}
{
    const keyValuePairFreeze = Object.freeze([1, 'one']);
    const valueKeyPair = swap(keyValuePairFreeze);
    console.log('medium verbosity, but is frozen during runtime and otherwise', valueKeyPair);
}
{
    const digitNames = [
        [0, 'cero'],
        [1, 'uno'],
        [2, 'dos'],
        [3, 'tres'],
        [4, 'cuatro'],
        [5, 'cinco'],
        [6, 'seis'],
        [7, 'siete'],
        [8, 'ocho'],
        [9, 'nueve'],
        [10, 'diez']
    ];
    /**
     * @type {(string | number)[][]}
     * most concise type, least secure
     */
}
{
    const digitNames = [
        [0, 'cero'],
        [1, 'uno'],
        [2, 'dos'],
        [3, 'tres'],
        [4, 'cuatro'],
        [5, 'cinco'],
        [6, 'seis'],
        [7, 'siete'],
        [8, 'ocho'],
        [9, 'nueve'],
        [10, 'diez']
    ];
    /**
     * @type {readonly [readonly [0, "cero"], readonly [1, "uno"], readonly [2, "dos"], readonly [3, "tres"], readonly [4, "cuatro"], readonly [5, "cinco"], readonly [6, "seis"], readonly [7, "siete"], readonly [8, "ocho"], readonly [9, "nueve"], readonly [10, "diez"]]}
     */
}
{
    const digitNames = Object.freeze([
        [0, 'cero'],
        [1, 'uno'],
        [2, 'dos'],
        [3, 'tres'],
        [4, 'cuatro'],
        [5, 'cinco'],
        [6, 'seis'],
        [7, 'siete'],
        [8, 'ocho'],
        [9, 'nueve'],
        [10, 'diez']
    ]);
    /**
     * @type {readonly [readonly [0, "cero"], readonly [1, "uno"], readonly [2, "dos"], readonly [3, "tres"], readonly [4, "cuatro"], readonly [5, "cinco"], readonly [6, "seis"], readonly [7, "siete"], readonly [8, "ocho"], readonly [9, "nueve"], readonly [10, "diez"]]}
     * same type as the previous, but is frozen during runtime too!
     */
}
//# sourceMappingURL=index.js.map