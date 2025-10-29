# API biblioteca
El servidor se inicia en el puerto 5100, de no ser posible hacer uso de dicho puerto usará el 3000

## 🔗 Endpoints de usuarios

| Método HTTP | Ruta (Endpoint) | Descripción |
| :---        | :--- | :--- |
| `GET`       | `/api/v1/recursos` | Obtiene una lista de todos los recursos. |
| `POST`      | `/api/v1/recursos` | Crea un nuevo recurso. |
| `GET`       | `/api/v1/recursos/{id}` | Obtiene los detalles de un recurso específico. |
| `PUT`       | `/api/v1/recursos/{id}` | Actualiza completamente el recurso con el ID proporcionado. |
| `DELETE`    | `/api/v1/recursos/{id}` | Elimina el recurso con el ID proporcionado. |
| `GET`       | `/api/v1/recursos/buscar?q=termino` | Busca recursos por un término específico. |

# json usuarios
{
    "name": "user",
    "email": "user@gmail.com"
}
