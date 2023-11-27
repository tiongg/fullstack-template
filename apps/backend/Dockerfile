FROM node:20-alpine3.18 AS builder
WORKDIR /app
# To allow calls to sudo in postinstall scripts to run
# TODO: look for alternate solution
RUN apk add sudo
ENV NX_DAEMON false
COPY . .
RUN npm ci
RUN npx nx run backend:build:production
RUN node trace.js dist/apps/backend ./traced-deps
# tslib doesn't get installed
# https://github.com/nrwl/nx/issues/2625
#RUN npm i tslib

FROM  node:20-alpine3.18 as runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 backend
# COPY --from=builder --chown=backend:nodejs /app/traced-deps ./
# COPY --from=builder --chown=backend:nodejs /app/dist/apps/backend/ ./
COPY --from=builder --chown=backend:nodejs . .
USER backend

ENV NODE_ENV production
EXPOSE 2000

CMD [ "node", "app/dist/apps/backend/main.js" ]