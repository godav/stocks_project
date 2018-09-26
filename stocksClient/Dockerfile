FROM node:alpine

WORKDIR /app

# COPY package.json package-lock.json ./app

# RUN npm install

COPY ./dist /app

RUN npm i -g http-server

EXPOSE 8080

CMD http-server ./stocksClient