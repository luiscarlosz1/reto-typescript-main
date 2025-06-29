/**
 * Checks if T1 equals to T2.
 */
export type IsTypeEqual<T1, T2> =
  IsNotAny<T1> extends false
    ? false
    : IsNotAny<T2> extends false
      ? false
      : [T1] extends [T2]
        ? [T2] extends [T1]
          ? true
          : false
        : false;

/**
 * Returns `false` if `any` or `any[]` is specified, otherwise returns `true`.
 * @see https://stackoverflow.com/a/49928360/3406963
 */

export type IsNotAny<T> = 0 extends 1 & T
  ? false
  : 0 extends 1 & ArrayElement<T>
    ? false
    : true;

/**
 * Extracts and returns array element type.
 */
export type ArrayElement<T> = T extends (infer I)[] ? I : never;

/**
 * A simple type assertion function which always expects a true-type.
 */
export function typeAssert<T extends true>() {}
