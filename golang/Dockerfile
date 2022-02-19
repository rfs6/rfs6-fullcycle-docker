FROM golang:1.17 AS builder
WORKDIR /go
COPY hello.go hello.go
RUN go build hello.go

FROM scratch as binary
WORKDIR /usr/bin
COPY --from=builder /go/hello /usr/bin
CMD ["./hello"] 
