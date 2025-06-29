# Declaraciones de tipados genericos

## Introducción:

¡Tenemos tantos usuarios y administradores en la base de datos! El padre del CEO, **Jeff**, dice que ahora somos una startup de BigData. No tenemos idea de lo que significa, pero **Jeff** dice que necesitamos hacer algunas estadísticas y análisis.

Hemos realizado un cuestionario dentro del equipo para averiguar qué sabemos sobre estadísticas. La única persona que lo completó fue el mantenedor de nuestra máquina de café. Las respuestas fueron:

- Máximos
- Mínimos
- Medianas
- Promedios

Encontramos un fragmento de código en *stackoverflow* y lo compilamos en un módulo `stats`. Lo malo es que carece de declaraciones de tipo.

## Ejercicio:

Revisa la implementación del módulo `stats` en:
   - node_modules/stats/index.js
   - node_modules/stats/README.md

Proporciona la declaración de tipo para ese módulo en:
   - declarations/stats/index.d.ts

Bonus de mayor dificultad:

    Evita duplicados de declaraciones de tipo.

