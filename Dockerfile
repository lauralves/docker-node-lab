FROM nginx:latest

COPY index.html .
COPY /assets /assets

EXPOSE 80