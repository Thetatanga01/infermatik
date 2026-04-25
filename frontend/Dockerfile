# build
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Source after lockfile so `npm ci` layer caches when only app code changes
COPY . .
# Set only for the build so devDependencies from `npm ci` stay (Vite, TypeScript, etc.)
ENV NODE_ENV=production
RUN npm run build

# production
FROM nginx:alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
