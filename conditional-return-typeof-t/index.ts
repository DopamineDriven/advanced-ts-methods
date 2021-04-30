// mixins!
// if generic parameter <T> is a function Type, it extracts the return type
type ReturnTypeOf<T> = T extends (...args: any) => infer U ? U : any;
