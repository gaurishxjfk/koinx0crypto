FROM node:20.10.0-bullseye

RUN mkdir -p /app
WORKDIR /app

COPY package* .
RUN npm install

COPY . .


RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]