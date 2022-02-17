FROM node:14
WORKDIR /dsgm-backend
COPY package*.json /dsgm-backend
RUN npm install
COPY .env /dsgm-backend/.env
ADD . /dsgm-backend
EXPOSE 5000
CMD npm run start