FROM node:16
WORKDIR /usr/src/app
COPY ./api .
COPY ./api/package*.json .
RUN npm install
RUN npm install nodemon -g
CMD [ "npm", "start" ]
