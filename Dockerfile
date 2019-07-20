FROM node:10.16.0-slim

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn migrate-run

EXPOSE 5000

CMD [ "yarn", "start" ]
