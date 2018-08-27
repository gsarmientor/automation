# Protractor Tests for Continuum

## Prerequisites

Node.js v6

For reporting:
- protractor-beautiful-reporter
- jasmine-reporters
- protractor-html-reporter

## Setup

### Install

The install all dependent modules and prepare Protractor to run tests execute the following commands from the root directory of the project:

```
npm install
npm run update
```

### Configuration

Copy the `config.ts` file from the `example` folder into the root folder of this project.  This file contains all of the configuration for running the tests.  There you can set what test (`.spec`) files should be run as well.

## Running Tests

In a terminal window run the following command to execute the tests:

```
npm test
```
