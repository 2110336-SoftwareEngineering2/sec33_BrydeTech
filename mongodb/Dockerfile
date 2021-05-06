FROM mongo
#FROM : อ้างอิงถึง parent image ชื่อ mongo ติด tag version 3.4.7 

ENV MONGO_INITDB_ROOT_USERNAME admin
ENV MONGO_INITDB_ROOT_PASSWORD 1234
ENV MONGO_INITDB_DATABASE BrydeTech
# กำหนด ENV ให้มัน 
ADD ./data/data.js /docker-entrypoint-initdb.d
#กรณีที่ต้องการ Set initial db ให้มัน

EXPOSE 27017