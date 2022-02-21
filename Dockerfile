FROM node:14
WORKDIR /dsgm-backend
# ENV DB_url ${{secrets.DATABASE_URL}}
COPY package*.json /dsgm-backend
RUN npm install
COPY env.yml /dsgm-backend/.env
ADD . /dsgm-backend
EXPOSE 5000
CMD npm run start
