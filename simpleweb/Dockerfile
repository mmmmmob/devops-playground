# get base image from alpine with node
FROM node:22-alpine
# set work directory
WORKDIR /usr/app
# copy all files from build directory to WORKDIR
COPY ./ /usr/app
# install dependencies
RUN npm install
# document the expose port (run with -p 8080:8080 to listen with localhost)
EXPOSE 8080
# default command to run when starting a container
CMD [ "npm", "start" ]
