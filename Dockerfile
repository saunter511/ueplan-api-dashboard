FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

COPY . ./


RUN npm ci

RUN npm run build



CMD [ "npm", "run", "serve" ]
