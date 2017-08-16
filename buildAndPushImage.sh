#!/usr/bin/env bash

./buildJSAR.sh

docker build -t adesso/party-ui-angular:1.0.0 .
# docker push adesso/party-ui-angular:1.0.0
