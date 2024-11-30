# get base image from alpine with node
FROM node:22-alpine

# set work directory
WORKDIR /usr/app

# copy only package.json file from build directory to WORKDIR destination (if there's any changes next RUN will install new deps)
COPY ./package.json ./

# install dependencies
RUN npm install

# copy working code (to prevent deps install every time image file going to be built)
COPY ./ ./

# document the expose port (run with -p 8080:8080 to listen with localhost)
EXPOSE 8080

# default command to run when starting a container
CMD [ "npm", "start" ]
