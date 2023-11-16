# Usa la imagen oficial de Node como base
FROM node:14-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y package-lock.json para instalar dependencias de manera eficiente
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el contenido del directorio actual al directorio de trabajo en el contenedor
COPY . .

# Construye la aplicación React
RUN npm run build

# Expón el puerto 80
EXPOSE 80

# Comando para iniciar la aplicación
CMD ["npm", "start"]
