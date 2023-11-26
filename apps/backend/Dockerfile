# Project name
ARG package_name=fullstack-template-backend

FROM node:16-alpine AS builder
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
RUN npm i -g turbo
COPY . .
RUN turbo prune --scope=$package_name --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:16-alpine AS installer
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./package-lock.json
COPY --from=builder /app/turbo.json ./turbo.json
#Skip husky when installing
ENV HUSKY_SKIP_INSTALL=1
RUN npm ci

FROM node:16-alpine AS sourcer
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
RUN yarn global add turbo
ENV HUSKY_SKIP_INSTALL=1
RUN turbo run build --scope=package_name --include-dependencies --no-deps

FROM node:16-alpine as runner
WORKDIR /app
COPY --from=sourcer /app/ .
CMD [ "node", "apps/backend/dist/main.js" ]