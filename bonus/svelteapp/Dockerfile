FROM node:14.17.3

RUN mkdir -p /usr/src/svelteapp

COPY build /usr/src/svelteapp/build/
COPY data.json /usr/src/svelteapp/
COPY server.js /usr/src/svelteapp/
COPY deploy-package.json /usr/src/svelteapp/package.json

WORKDIR /usr/src/svelteapp

RUN echo 'package-lock=false' >> .npmrc
RUN npm install

EXPOSE 4005

CMD ["node", "server.js"]