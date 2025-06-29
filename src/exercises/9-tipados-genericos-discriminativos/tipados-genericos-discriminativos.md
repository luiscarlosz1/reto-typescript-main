# Tipados genericos discriminativos

## Introducción:

La idea de `PowerUsers` fue mala. Una vez que esos usuarios obtuvieron permisos extendidos, comenzaron a intimidar a otros y perdimos muchos grandes usuarios. Como respuesta, gastamos todo el dinero restante en marketing y conseguimos aún más usuarios. Necesitamos comenzar a prepararnos para mover todo a una base de datos real. Por ahora solo hacemos algunos mocks.

El formato de la API del servidor se decidió de la siguiente manera:

En caso de éxito: `{ status: 'success', data: RESPONSE_DATA }`
En caso de error: `{ status: 'error', error: ERROR_MESSAGE }`

El ingeniero de API comenzó a crear tipos para esta API y rápidamente se dio cuenta de que la cantidad de tipos necesarios para crear es demasiado grande.

## Ejercicio:

Elimina los tipos `UsersApiResponse` y `AdminsApiResponse` y usa el tipo genérico `ApiResponse` para especificar los formatos de respuesta de la API
para cada una de las funciones.