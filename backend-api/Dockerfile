FROM golang:1.20-alpine AS build
WORKDIR /app
COPY go.mod .
RUN go mod download
COPY . .
RUN go build -o server ./

FROM alpine:3.18
WORKDIR /app
COPY --from=build /app/server .
COPY .env.example .env
EXPOSE 8080
CMD ["./server"]
