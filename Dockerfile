FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install


COPY . .

# Expose the port the app runs on
EXPOSE 5000

CMD ["node", "app.js"]
