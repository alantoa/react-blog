FROM docker.io/nginx:latest
MAINTAINER toa
COPY build/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
expose 20500