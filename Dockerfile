from nginx
label maintainer "toa"
copy ./build/ /usr/share/nginx/html/
copy ./nginx.conf /etc/nginx/conf/conf.d/blog.conf
expose 20500