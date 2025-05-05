# Etapa 1: Construcción del sitio
FROM node:18-alpine as builder-node

# Establece el directorio de trabajo
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

# Instala Git
RUN apk add --no-cache git

# Copia los archivos de configuración
COPY package.json .
COPY pnpm-lock.yaml .
COPY .npmrc .

# Instala las dependencias
RUN pnpm install

# Copia el resto del proyecto
COPY . .

# Construye el sitio VitePress
RUN pnpm run docs:build

# Etapa 2: Servir con Nginx
FROM nginx:stable-alpine

# Copia el archivo de configuración personalizado de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copia los archivos estáticos generados por VitePress a la carpeta de Nginx
COPY --from=builder-node /app/docs/.vitepress/dist /app

# Expone el puerto en el que Nginx servirá la aplicación
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]