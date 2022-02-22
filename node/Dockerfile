FROM node:16 AS builder
WORKDIR /app
COPY ./app .
RUN npm install

FROM node:alpine as main
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node", "index.js"]