#!/usr/bin/env bash

npm install
ng build
cd dist
zip -r jsar.zip .
cd ..
mv dist/jsar.zip .
