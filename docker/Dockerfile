FROM node:14-slim as builder

COPY package.json yarn.lock* ./
RUN yarn install

COPY . .
RUN yarn && yarn cache clean --force

RUN NODE_ENV=production yarn build

FROM node:14-alpine
WORKDIR /app
COPY --from=builder package.json tsconfig.json yarn.lock ./
COPY --from=builder build/ ./build
COPY --from=builder node_modules/ ./node_modules

EXPOSE 3000
ENTRYPOINT [ "yarn", "start"]
CMD [ "yarn start" ]