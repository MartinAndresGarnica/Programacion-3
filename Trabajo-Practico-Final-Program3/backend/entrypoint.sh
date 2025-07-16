#!/bin/sh
# Esperar a que la base de datos esté lista
apk add --no-cache netcat-openbsd
until nc -z "$DB_HOST" "$DB_PORT"; do
  echo "Esperando a la base de datos en $DB_HOST:$DB_PORT..."
  sleep 2
 done

# Crear la base de datos (ignorar error si ya existe)
npx sequelize-cli db:create || true
# Ejecutar migraciones y seeds
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# Iniciar el servidor en modo desarrollo
npm run dev
