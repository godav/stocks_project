FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY ./dist /app

EXPOSE 3002

CMD ["npm","run","prod"]