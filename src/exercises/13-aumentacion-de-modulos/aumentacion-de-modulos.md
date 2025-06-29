# Aumentacion de modulos

## Introducción:

El siguiente paso lógico para nosotros es proporcionar una fecha de registro más precisa para nuestros usuarios y administradores. Hemos inventado fechas aproximadas para cada usuario y administrador y hemos utilizado una biblioteca llamada `date-wizard` para formatear las fechas de manera adecuada.

Desafortunadamente, las declaraciones de tipos que venían con la biblioteca `date-wizard` estaban incompletas.

1. La interfaz `DateDetails` no incluye campos relacionados con el tiempo, como horas, minutos y segundos.
2. La función `pad` está exportada pero no declarada.

## Ejercicio:

Revisa la implementación del módulo `date-wizard` en:
- node_modules/date-wizard/index.js
- node_modules/date-wizard/index.d.ts

Extiende la declaración de tipos de ese módulo en:
 - module-augmentations/date-wizard/index.d.ts
