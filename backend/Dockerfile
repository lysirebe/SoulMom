# Dockerfile for React client 

#Build react client
FROM node:18-alpine

# create a directory to store the images application code 
WORKDIR /app

# copies files from host machine to container image
COPY package.json .
COPY . .

# install dependencies
RUN npm install

# used to start project
CMD ["node", "app.js"]

# expose tells Docler which port to run on at runtime
EXPOSE 5000