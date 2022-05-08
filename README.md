# Evaluate a News Article with Natural Language Processing Project

## Table of Contents
1. Description
2. Instructions
3. Running
4. Important Points


## Description
- Udacity front-end web development Advanced program project.
- Build a web tool that allows users to run ***Natural Language Processing (NLP)*** on articles or blogs found on other websites.
- The project prerequisites:
  1. Webserver - Node.
  2. Web application framework for routing - Express.
  3. Build tool - Webpack.
  4. External script - Service Worker.
  5. External API - MeaningCloud.
-The goal of this project is to give you practice with:
  - Setting up Webpack.
  - Sass styles.
  - Webpack Loaders and Plugins.
  - Creating layouts and page design.
  - Service workers.
  - Using APIs and creating requests to external urls.


# Instructions

- This repo (https://github.com/udacity/fend/tree/refresh-2019) is your starter code for the project.
- Install and configure Webpack.
- `cd` into your new folder and run : 
  1. `npm install`.
  2. get an API key from (https://www.meaningcloud.com/developer/sentiment-analysis):
     - signup for it.
     - install the dotenv package `npm install dotenv` will allow us to use ***Environment Variables*** we set in a new `.env` file create it in the root of the project.
     - add `.env` in `.gitignore` file to make sure that we don't push the environment variables to Github.
  3. modifying `server/index.js`, `client/index.js` ,`client/js/nameChecker.js`, 
  `client/js/formChecker.js` 
  4. modifying `client/views/index.html`.
  5. modifying all the style files and transfer their extension type.
  5. adding new files : 
    - `client/js/UrlChecker.js` to check for the input.
    - `testFormHandler.spec.js` to test handleSubmit function.
    - `testNameChecker.spec.js` to test checkForName function.
    - `testUrlChecker.spec.js` to test checkForUrl function.
  6. `npm install axios` use it instead of `fetch`
  7. `npm run test` to test functionality.
  8. `npm run build-dev` to make development stage of the project.
  9. `npm run build-prod` use it after finishing development to make the project.



# Running

- use `npm run start` to launch.
- open `localhost:8081` in the browser.


# Important Points

1. Natural Language Processing (NLP) :
  - is a subset of AI that provides computers ability to process or interact with natural human speech.
  - In NLP, machine learning and deep learning are used on massive amounts of data to obtain the rules and understanding of nuance in human speech.
2. Environment Variables :
  - are pretty much like normal variables in that they have a name and hold value.
  - are only belong to your local system and won't be visible when you push your code to a different environment like Github.
  