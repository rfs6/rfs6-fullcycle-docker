FROM node:16 AS builder
WORKDIR /app
COPY ./app .
RUN npm init -y && \
    npm install express mysql --prefix .

FROM node:alpine as main
RUN apk add --no-cache openssl
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz
WORKDIR /usr/src/app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node", "index.js"]
