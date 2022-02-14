Syngrisi Cucumber Example
==========================

This project is based on [WebdriverIO Cucumber Boilerplate](https://github.com/webdriverio/cucumber-boilerplate) project, and it contains all features of this project and additional added [WDIO Syngrisi Cucumber Service](https://github.com/viktor-silakov/wdio-syngrisi-cucumber-service) and few step definition for Syngrisi visual checks.

## Quick start
- clone the repo
- install dependencies: via `npm install` command
- set up your local environment variables `SYNGRISI_HOST`, `SYNGRISI_PORT`, `SYNGRISI_API_KEY` and `SYNGRISI_PROJECT`
- run certain test feature:
```sh
npx wdio wdio.conf.ts --spec src/features/syngrisi/simpleDemo.feature
```
- check results via Syngrisi
