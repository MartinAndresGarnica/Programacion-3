FROM node:18-alpine

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Exponer puerto
EXPOSE 3001

# Comando por defecto
CMD npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && node server.js
