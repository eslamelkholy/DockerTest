FROM node:latest

LABEL author="Eslam Elkholy"

WORKDIR /streams

RUN npm install -g pm2@latest
RUN pm2 install typescript
RUN yarn install

RUN mkdir -p /var/log/pm2

EXPOSE 3000

ENTRYPOINT ["/bin/bash", "./docker/scripts/streams.sh"]


# To build:
# docker build -f node.development.dockerfile --tag boilerplatetest ../

# To run:
# docker run -p 4000:4000 boilerplatetest