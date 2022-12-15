FROM node:18-alpine3.16
WORKDIR /base
COPY ./apps/ /base/apps/
COPY ./.babelrc /base/
COPY ./.editorconfig /base/
COPY ./.eslintrc /base/
COPY ./.gitignore /base/
COPY ./.prettierrc /base/
COPY ./package.json /base/
COPY ./yarn.lock /base/
RUN yarn install
RUN yarn build
CMD ["yarn", "start"]
