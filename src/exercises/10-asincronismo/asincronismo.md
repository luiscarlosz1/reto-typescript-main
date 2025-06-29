# Asincronismo

## Introducción:

Ahora tenemos funciones asíncronas, tecnología avanzada. Esto nos convierte oficialmente en una startup tecnológica. Pero uno de los consultores arruinó nuestros sueños sobre el inevitable liderazgo futuro en TI. Dijo que la asincronía basada en callbacks ya no es popular y que todos deberían usar Promesas. Prometió que si cambiamos a Promesas, esto traería resultados prometedores.

## Ejercicio:

No queremos reimplementar todas las funciones de solicitud de datos. Vamos a decorar las antiguas funciones basadas en callbacks con el nuevo resultado compatible con Promesas. La función final debería devolver una Promesa que se resolvería con los datos finales directamente (es decir, usuarios o administradores) o se rechazaría con un error (o tipo `Error`).

La función debería llamarse `promisify`.

### Bonus de mayor dificultad:

Crear una función `promisifyAll` que acepte un objeto con funciones y devuelva un nuevo objeto donde cada una de las funciones esté promisificada. Reescribir la creación de la API en consecuencia:

`const api = promisifyAll(oldApi);`
