FROM node:14-alpine AS builder
ENV NODE_ENV production

#Añadimos el directorio raiz
WORKDIR /App

#Dependencias del proyecto

COPY package.json .
COPY package-lock.json .
RUN npm install --production 

#Copia los archivos de la app
COPY . . 

# Levanta la app
RUN npm run build 

# Empaqueta los archivos estaticos con nginx 
FROM nginx:1.21.1-alpine as production 
ENV NODE_ENV production 

COPY --from=builder /App/build /usr/share/nginx/html

#Agregamos la configuracion de nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

#Exponemos el puerto
EXPOSE 80

#Iniciamos nginx
CMD ["nginx", "-g", "daemon off;"]