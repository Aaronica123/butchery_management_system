FROM node:latest
WORKDIR /app
COPY package*.json ./
COPY . .
EXPOSE 3001
RUN npm install
RUN npm run build
RUN npm run start
