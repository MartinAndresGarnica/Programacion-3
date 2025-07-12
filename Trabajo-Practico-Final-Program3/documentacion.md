# Documentación del Proyecto: Gestión de Libros

## Descripción General

Este proyecto es una aplicación web para la gestión de libros, desarrollada con un backend en Node.js (Express, Sequelize, PostgreSQL) y un frontend en React. Permite agregar, editar, eliminar, buscar y listar libros, así como filtrar por género.

## Estructura del Proyecto

- **backend/**: API REST con Express y Sequelize.
  - Modelos, controladores, rutas, migraciones y seeders.
- **frontend/**: Aplicación React para la gestión visual de libros.
- **database/**: Scripts SQL de inicialización.
- **nginx/**: Configuración para servir la aplicación y hacer proxy al backend.
- **pgadmin/**: Configuración para administración de la base de datos.
- **docker-compose.yml**: Orquestación de servicios con Docker.

## Funcionalidades Principales

- Alta, baja, modificación y consulta de libros.
- Búsqueda de libros por género.
- Calificación y reseña de libros.
- Filtros por estado (Leído, Leyendo, Por leer).
- Interfaz amigable y validaciones en frontend.

## Instalación y Ejecución

1. **Clonar el repositorio**
2. **Configurar variables de entorno** en backend y frontend si es necesario.
3. **Levantar los servicios con Docker Compose:**
   ```sh
   docker-compose up --build
   ```
4. Acceder a la app en `http://localhost:3000` (frontend) y `http://localhost:3001` (backend).

## Estructura de Carpetas

```
backend/    # API Node.js
frontend/   # React app
nginx/      # Configuración Nginx
pgadmin/    # Configuración PgAdmin
```

## Endpoints Principales (Backend)

- `GET /api/libros` — Listar libros
- `GET /api/libros/:id` — Obtener libro por ID
- `POST /api/libros` — Crear libro
- `PUT /api/libros/:id` — Actualizar libro
- `DELETE /api/libros/:id` — Eliminar libro
- `GET /api/libros/genero/:genero` — Buscar libros por género

## Componentes Destacados (Frontend)

- **libroForm.js**: Formulario para alta y edición de libros.
- **libroTraer.js**: Listado y búsqueda de libros.
- **libroList.js**: (opcional) Listado simple de libros.
- **libroView.js**: (opcional) Vista detallada de un libro.

## Consideraciones Técnicas

- **Backend:** Node.js, Express, Sequelize, PostgreSQL
- **Frontend:** React, fetch API
- **Docker:** Contenedores para backend, frontend, base de datos y pgAdmin
- **Nginx:** Proxy reverso y servidor estático

## Autores

- Garnica Martin Andres
- Ivo Depari
- Camilo Dietrich
- Imanol Mirant Borde
- Micaela Rocio Zubiel

---

> Para dudas o mejoras, contacta al autor o crea un issue en el repositorio.
