FROM node

WORKDIR /

COPY ./ /

EXPOSE 80

CMD ["npm","run","start:docker"]
