FROM node:14
WORKDIR /dsgm
# ENV DB_url ${{secrets.DATABASE_URL}}
COPY package*.json /dsgm
RUN npm install
COPY .env /dsgm/.env
ADD . /dsgm
EXPOSE 5000
CMD npm run start