# Stage 1 - the build process
FROM node:10.16-alpine as build-deps
WORKDIR /client
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-deps /client/build /var/www
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]