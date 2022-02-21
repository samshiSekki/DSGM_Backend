FROM node:14
WORKDIR /dsgm-backend
ENV DB_url ${{secrets.DATABASE_URL}}
COPY package*.json /dsgm-backend
RUN npm install
COPY DB_url /dsgm-backend/.env
ADD . /dsgm-backend
EXPOSE 5000
CMD npm run start
