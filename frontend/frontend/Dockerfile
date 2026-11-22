FROM node:latest as build
WORKDIR /app
COPY package*.json ./
COPY . .
EXPOSE 3000
RUN npm install
RUN npm run build
RUN npm start

