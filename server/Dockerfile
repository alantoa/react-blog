FROM node:latest
RUN mkdir -p /home/Service
WORKDIR /home/Service   
COPY . /home/Service
RUN yarn
EXPOSE 3001
CMD [ "yarn", "pm2" ]