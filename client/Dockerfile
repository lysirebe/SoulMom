# Dockerfile for React client 

#Build react client
FROM node:18-alpine

# create a directory to store the images application code 
WORKDIR /app

# copies files from host machine to container image
COPY package.json .

# install dependencies
RUN npm install

COPY . .

# expose tells Docler which port to run on at runtime
EXPOSE 3000

# used to start project
CMD ["npm", "start"]

