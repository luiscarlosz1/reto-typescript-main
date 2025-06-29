# Get Return Type

## Introducción

Vamos a necesitar que implementes desde cero un tipado de utilidad de Typescript. En este caso requerimos que construyas `ReturnType`. Recuerda que `ReturnType` sirve para obtener el tipo de retorno de una función.

[Utility type ReturnType](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)

## Ejercicio

Implementa el tipo de utilidad `MyReturnType` que funcione de manera similar a `ReturnType`.

Por ejemplo:

```ts
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // se espera que sea "1 | 2"
```
