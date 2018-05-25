#!/usr/bin/env bash

CONTAINER_NAME=party-ui-angular

docker stop ${CONTAINER_NAME}
docker rm ${CONTAINER_NAME}

docker run -d \
  --name ${CONTAINER_NAME} \
  -p 8888:8080 \
  adesso/party-ui-angular:1.0.0
