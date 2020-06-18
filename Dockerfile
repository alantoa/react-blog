FROM docker.io/nginx:latest
MAINTAINER toa
COPY build/ /usr/share/nginx/html/
