FROM node:12-alpine as base
#RUN apk add --no-cache python2 g++ make
WORKDIR ./

COPY package*.json  ./

RUN npm install --omit=dev
RUN npm run build
COPY . .

CMD ["node", "dist/index.js"]
EXPOSE 3000