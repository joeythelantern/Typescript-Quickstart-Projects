FROM node:17

# Working dir
WORKDIR /usr/src/app

# Copy files from Build
COPY package*.json ./

# Install Globals
RUN npm install prettier -g

# Install Files
RUN npm install 

# Copy SRC
COPY . .

# Build
RUN npm run build

# Open Port
EXPOSE 1337

# Docker Command to Start Service
CMD [ "node", "build/server.js" ]
