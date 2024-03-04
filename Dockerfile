# Fetching the latest node image on Alpine Linux
FROM node:latest AS builder

# Declaring env
ENV NODE_ENV=development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY package*.json ./
RUN npm install
RUN npm i @rollup/rollup-linux-arm64-musl
# Copying source code
COPY . .

# Building the application
RUN npm run build

# Final image stage
FROM node:alpine

# Setting the work directory
WORKDIR /react-app

# Copying built artifacts from the builder stage
COPY --from=builder /react-app/dist ./dist

# Expose port if necessary
# EXPOSE 3000

# Start the application
CMD ["npm", "run", "preview"]
