FROM node:12
COPY . /usr/src/app

RUN npm install && npm run-script build

FROM nginx

COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# tämä komento konsoliin = helpoin docker build kontti
# docker build -t koulutus .