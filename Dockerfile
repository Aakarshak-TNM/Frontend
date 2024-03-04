# Fetching the latest node image on alpine linux
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV development
# Setting up the work directory
WORKDIR /app

RUN npm create vite@latest react-app -- --template react

WORKDIR /app/react-app

# Installing dependencies
COPY ./package*.json /app/react-app

RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD ["npm","run","dev"]