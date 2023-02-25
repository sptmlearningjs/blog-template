FROM node:18

SHELL ["/bin/bash", "-c"]
RUN if [[ $(dpkg --print-architecture) == 'arm64' ]]; then apt-get update && apt-get install -y build-essential && wget http://launchpadlibrarian.net/429226741/libc6_2.29-0ubuntu3_arm64.deb && dpkg -i libc6_2.29-0ubuntu3_arm64.deb && rm libc6_2.29-0ubuntu3_arm64.deb ; else echo 'not ARM' ; fi

RUN mkdir -p /usr/src/test_app
WORKDIR /usr/src/test_app

COPY package.json package-lock.json ./

RUN npm install
RUN npm install -g ts-node

COPY /. /usr/src/test_app
RUN rm -rf /usr/src/test_app/deploy

CMD npm run start:dev
