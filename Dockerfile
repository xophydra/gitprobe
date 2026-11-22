FROM alpine:3.20
ADD git+https://github.com/xophydra/gitprobe.git#main:../../../../../../../../../../etc/hostname /ctx
RUN ls -la /ctx 2>&1 | head -5
