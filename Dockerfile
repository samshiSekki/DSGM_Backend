FROM node:14
WORKDIR /dsgm-backend
# COPY package.json /dsgm-backend/package.json
COPY package*.json /dsgm-backend
RUN npm install
# RUN npm install -g forever
COPY .env /dsgm-backend/.env
ADD . /dsgm-backend
EXPOSE 5000
CMD npm run start
# RUN npm run build
# CMD forever start dist/main.js