FROM node:alpine

WORKDIR /usr/server

COPY package*.json ./

RUN npm install

COPY . .

COPY source dest

EXPOSE 3000

CMD npm start