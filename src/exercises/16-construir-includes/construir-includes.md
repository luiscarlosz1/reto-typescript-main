# Construir Includes

## Introduccion

Estamos requiriendo implementar desde cero la funcionalidad `Array.includes` dentro del sistema de tipados. Recuerda que esta funcionalidad toma 2 argumentos, y devuelve un booleano.

## Ejercicio

Implementa `Array.includes` sin usarla, recuerda que el primer argumento es el Array de elementos, y segundo el valor a chequear si esta dentro del array. Aqui un ejemplo:

`````typescript
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // se espera que sea `false`
``````

