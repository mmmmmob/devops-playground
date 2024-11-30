# base image of Alpine Linux
FROM alpine
# execute command to install dependency(ies)
RUN apk add --update redis
# command which came later can be built from cache
RUN apk add --update gcc
# run the command inside shell container to run redis-server
CMD [ "redis-server" ]

# tag the image created with 'docker built -t username/projectname:version .' (a convention for naming docker image)'