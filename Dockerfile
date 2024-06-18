FROM node:18-alpine

WORKDIR /website/

COPY public/ /website/public
COPY src/ /website/src
COPY package.json / /website/

RUN npm install

CMD ["npm", "start"]