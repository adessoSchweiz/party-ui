#!/usr/bin/env bash

ng build
cd dist
zip -r jsar.zip .
cd ..
mv dist/jsar.zip .
