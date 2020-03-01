FROM node:10.16.0

WORKDIR /server

COPY package.json /server/

RUN yarn

COPY . /server/

EXPOSE 4000

CMD ["yarn", "start"]