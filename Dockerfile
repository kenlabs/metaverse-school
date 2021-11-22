FROM node

RUN mkdir /opt/web
ADD . /opt/web/
WORKDIR /opt/web
RUN npm install

CMD npm start