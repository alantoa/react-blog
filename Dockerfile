from nginx
label maintainer "toa"
copy ./build/ /usr/share/nginx/html/
copy ./nginx.conf /etc/nginx/conf.d/default.conf
expose 20500