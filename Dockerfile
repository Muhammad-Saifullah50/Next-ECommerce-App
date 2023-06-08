FROM node

WORKDIR /app

COPY package.json package-lock.json /app/ 

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run" , "start" ]