# Declaracion de tipados

## Introducción:

Los requisitos de filtrado han crecido. Necesitamos poder filtrar cualquier tipo de Personas.

## Ejercicio:

Arregla la tipificación de `filterPersons` para que pueda filtrar usuarios y devolver `User[]` cuando `personType='user'` y devolver `Admin[]` cuando `personType='admin'`. Además, filterPersons debería aceptar tipos parciales de `User` y Admin `según` el valor de `personType`.
El argumento `criteria` debería comportarse según el valor del argumento `personType`. El campo `type` no está permitido en el campo `criteria`.
