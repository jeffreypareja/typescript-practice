FROM node:12-alpine as ts-compiler
WORKDIR /usr/src/app
COPY package.json ./
COPY tsconfig.json ./
RUN npm install
COPY . ./
RUN npm run build 

FROM node:12-alpine as ts-remover
WORKDIR /usr/app
COPY --from=ts-compiler /usr/src/app/package*.json ./
COPY --from=ts-compiler /usr/src/app/dist ./
RUN npm ci --omit=dev


FROM gcr.io/distroless/nodejs:12
WORKDIR /usr/app
COPY --from=ts-remover /usr/app ./
CMD ["index.js"]
