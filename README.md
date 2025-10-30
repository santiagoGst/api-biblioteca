####    API biblioteca
El servidor se inicia en el puerto 5100, de no ser posible hacer uso de dicho puerto usará el 3000. Si no es posible utilizar alguno de ellos, canviar el puerto en el archivo .env o server.ts

La api está conectada a una base de datos de mongo, los datos del cluster se pueden cambiar en el archivo .env


## 🔗 Endpoints de usuarios

| Método HTTP | Ruta (Endpoint)                           | Descripción
| :-----      | :-----                                    | :-----
| `GET`       | `http://localhost:5100/api/v1/users`      | Obtiene una lista de todos los usuarios.
| `GET`       | `http://localhost:5100/api/v1/users/{id}` | Obtiene los detalles de un usuario específico.
| `POST`      | `http://localhost:5100/api/v1/users`      | Crea un nuevo usuario.
| `PUT`       | `http://localhost:5100/api/v1/users/{id}` | Actualiza completamente el usuario con el ID proporcionado.
| `DELETE`    | `http://localhost:5100/api/v1/users/{id}` | Elimina el usuario con el ID proporcionado.

# ejemplo json usuario
{
    "name": "user",
    "email": "user@gmail.com"
}


## 🔗 Endpoints de libros
| Método HTTP | Ruta (Endpoint)                                 | Descripción
| :-----      | :-----                                          | :-----
| `GET`       | `http://localhost:5100/api/v1/books`            | Obtiene una lista de todos libros.
| `GET`       | `http://localhost:5100/api/v1/books/{id}`       | Obtiene los detalles de un libro específico.
| `GET`       | `http://localhost:5100/api/v1/books/user/{id}`  | Obtiene una lista de todos libros relacionados a un usuario específico.
| `POST`      | `http://localhost:5100/api/v1/books`            | Crea un nuevo libro.
| `PUT`       | `http://localhost:5100/api/v1/books/{id}`       | Actualiza completamente el libro con el ID proporcionado.
| `DELETE`    | `http://localhost:5100/api/v1/books/{id}`       | Elimina el libro con el ID proporcionado.


# ejemplo json libros
{
    "title": "El arte de la guerra 2(no existe)",
    "author": "Nicolas Maquiavelo",
    "user": "6901f379b6921fd197f00c17"
}