FROM node:latest


WORKDIR /app

COPY . /app

RUN npm install --no-package-lock --no-shrinkwrap
RUN npm run build
RUN npm prune --production

RUN rm -rf src

CMD ["npm", "start"]
