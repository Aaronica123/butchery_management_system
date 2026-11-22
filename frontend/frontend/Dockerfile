FROM node:latest as build
COPY . .
EXPOSE 3000
RUN npm install
RUN npm run build
RUN npm start

