declare module 'str-utils' {
  type StringTransformer = (value: string) => string;

  export const strReverse: StringTransformer;
  export const strToLower: StringTransformer;
  export const strToUpper: StringTransformer;
  export const strRandomize: StringTransformer;
  export const strInvertCase: StringTransformer;
}
