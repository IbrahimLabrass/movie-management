# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Build the React application
RUN npm run build

# Serve the React application using a static server
RUN npm install -g serve



# Expose port 5000 to the outside world
EXPOSE 5000

# Command to run the static server
CMD ["serve", "-s", "build", "-l", "5000"]
