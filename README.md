#React y MySQL
##Descripción General
Este proyecto es una aplicación de front para ejecutar CRUD (Crear, Leer, Actualizar, Eliminar) simple que gestiona 
empleados y sus solicitudes relacionadas. 

Está construido utilizando Node.js y Express para el backend, React para el frontend y MySQL server de Microsoft para la base de datos. 
La aplicación permite a los usuarios realizar operaciones CRUD en empleados y solicitudes, asegurando que todas las interacciones con la base de datos sean seguras.

##Tecnologías Utilizadas

Backend
Node.js: Entorno de ejecución de JavaScript.
Express: Framework web para Node.js.
mssql: Cliente de Microsoft SQL Server para Node.js para interactuar con la base de datos SQL Server.
dotenv: Carga variables de entorno desde un archivo .env a process.env.

Frontend
React: Biblioteca de JavaScript para construir interfaces de usuario.
React Router: Enrutamiento declarativo para aplicaciones React.
Fetch API: Utilizado para realizar solicitudes HTTP desde el frontend al backend.

Base de Datos
MySQL: Sistema de gestión de bases de datos relacional.


Requisitos Previos
Asegúrate de tener instalados los siguientes programas en tu sistema:
Node.js (v14 o superior)
npm (Node Package Manager)


###IMPORTANTE

Crea un archivo .env (Variables de Entorno) en el directorio del backend con el siguiente contenido RECOMENDADO:

PORT=3000 (O el de tu elección)
DB_USER=tuUsuarioDeBaseDeDatos
DB_PASSWORD=tuContraseñaDeBaseDeDatos
DB_SERVER=tuServidorDeBaseDeDatos
DB_DATABASE=tuNombreDeBaseDeDatos

NOTA: Configuración de entorno no obligatoria

NOTA: OPERACIONES CRUD - NO OLVIDAR ADECUAR LA NAVEGACIÓN AL ENTORNO REQUERIDO - Predeterminado como http://localhost:3000/ (Configuraciones CORS)






