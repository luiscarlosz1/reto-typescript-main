<!--info-header-start--><h1>Omit <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23built--in-999" alt="#built-in"/></h1>

## Introducción

En este ejercicio, vamos a implementar desde cero un tipo de utilidad de TypeScript. En este caso, requerimos que construyas `Omit`. Recuerda que `Omit` sirve para generar un nuevo tipo en base a otro, omitiendo las llaves no mencionadas en el segundo parámetro.

[Utility Type - Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)

## Ejercicio

Construye un tipo seleccionando todas las propiedades de `T` y luego eliminando `K`.

Por ejemplo:

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
```
