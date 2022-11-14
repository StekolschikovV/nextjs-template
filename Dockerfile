FROM node:16-alpine as source

ENV BUILD_DEPS="git udev ttf-opensans chromium curl"  \
    NODE_ENV="production" \
    NODE_OPTIONS="--max_old_space_size=2048" \
    PORT="1338" \
    CHROME_BIN="/usr/bin/chromium-browser" \
    LIGHTHOUSE_CHROMIUM_PATH="/usr/bin/chromium-browser"

RUN set -x && \
    apk add --virtual build_deps $BUILD_DEPS

WORKDIR /home/source

COPY . .

# Install all dependencies build and delete devDependencies
RUN yarn --production=false --ignore-optional install && \
    yarn build


# -----------
# Production image

FROM node:16-alpine

LABEL authors="Waves Production" \
      org.label-schema.vendor="Waves Association Frontend" \
      org.label-schema.name="Waves Association Frontend Docker Image" \
      org.label-schema.description="Waves Association Frontend" \
      org.label-schema.url="https://wavesassociation.org" \
      org.label-schema.schema-version="1.0"

ENV NODE_ENV="production" \
    NODE_OPTIONS="--max_old_space_size=2048" \
    PORT="1338" \
    USER="app" \
    LABEL="Waves Association Frontend" \
    SERVICE_API_URL="" \
    SERVICE_PDF_URL="" \
    SERVICE_REDIS_URL=""

WORKDIR /home/$USER

RUN apk add curl && \
    addgroup -g 2000 app && \
    adduser -u 2000 -G app -s /bin/sh -D app

USER $USER

COPY --chown=$USER:$USER --from=source ["/home/source/dist/", "/home/$USER/dist/"]
COPY --chown=$USER:$USER --from=source ["/home/source/node_modules", "/home/$USER/dist/node_modules"]

EXPOSE 1338
ENTRYPOINT ["node", "./dist/desktop/server/main.js"]
