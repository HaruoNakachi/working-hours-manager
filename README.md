# working-hours-manager

> A Vue.js project

## Setup

1. install [docker-compose](https://docs.docker.com/compose/install/)

2. start docker by docker-compose
``` bash
docker-compose up
```

3. acccess [localhost:8080](http://localhost:8080) after web server starts

## Build docker image

``` bash
docker-compose build
```

## Run unit tests
docker-compose run web npm run unit

## Run all tests
docker-compose run web npm test

## Run e2e tests
docker-compose run web npm run e2e

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
