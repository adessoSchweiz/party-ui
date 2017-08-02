FROM tomaskral/nonroot-nginx

USER root
RUN yum install unzip -y
ADD jsar.zip /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
RUN rm index.html
RUN unzip jsar.zip
USER 997
