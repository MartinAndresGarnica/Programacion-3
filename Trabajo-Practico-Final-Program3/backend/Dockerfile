FROM node:18-alpine

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Exponer puerto
EXPOSE 3001

# Dar permisos de ejecución al entrypoint
RUN chmod +x ./entrypoint.sh
# Usar entrypoint personalizado
ENTRYPOINT ["./entrypoint.sh"]