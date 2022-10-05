FROM node:12-alpine
#RUN apk add --no-cache python2 g++ make
WORKDIR ./

COPY package*.json  ./

RUN npm install

COPY . .

CMD ["node", "index.js"]
EXPOSE 3000