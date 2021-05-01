"use strict";
// use built in ReturnType
/**
 * @type {ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;}
 */
// ReturnType is VERY similar to InstanceType, the latter simply uses new to invoke Class calls for constructor functions
/**
 * @type {InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;}
 */
//# sourceMappingURL=index.js.map