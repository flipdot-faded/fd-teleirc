FROM node:latest

RUN apt update && apt install -y nginx supervisor
RUN npm install -g teleirc

ADD docker /

CMD ["/usr/bin/supervisord"]
