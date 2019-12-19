# image to build from
FROM node:10.13-alpine

# labels
LABEL version="1.0"
LABEL author="kolade"

# enviromental variables
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# create app directory
WORKDIR /app

# install app dependencies
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# install dependencies
RUN npm install

# bundle app source
COPY . .

EXPOSE 3000 5432

# start app
CMD [ "npm" , "run", "dev"]