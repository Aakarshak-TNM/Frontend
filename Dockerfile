# Use Node.js image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY . /app/ 

# Install dependencies using npm
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose port 5000 (or any port your Vite server runs on)
EXPOSE 5172

# Command to run the production server
CMD node run dev
