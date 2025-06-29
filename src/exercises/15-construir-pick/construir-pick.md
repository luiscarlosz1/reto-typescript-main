# Construir Pick

## Introducion

Vamos a necesitar que implementes desde cero un tipado de utilidad de Typescript. En este caso requerimos que construyas `Pick`. Recuerda que `Pick` sirve para generar un nuevo tipado en base a otro, omitiendo las llaves no mencionadas en el segundo parametro.

[Utility Type - Pick](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)

## Ejercicio

Implementa la funcionalidad `Pick` sin usar la original, recuerda que necesitaras 2 parametros para este tipado, uno el tipado inicial, y dos listado de llaves a extraer. Aqui un ejemplo:

````typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

````