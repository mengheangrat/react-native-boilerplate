# React Native Boilerplate with Typescript

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1ca9724768c5406e8c2a0b7cf7ffc2dd)](https://www.codacy.com/manual/mengheangrat/react-native-boilerplate?utm_source=github.com&utm_medium=referral&utm_content=mengheangrat/react-native-boilerplate&utm_campaign=Badge_Grade)

## Overview 
This React Native template for building solid applications through SOC(separation of concerns) between the View, state management and business logic.

## Using the boilerplate

To create a new project:

- Clone this repository `git@github.com:mengheangrat/react-native-boilerplate.git`
- Remove the previous git history: `rm -rf .git/`
- Install the npm dependencies by running `yarn`
- Rename the project to your project name: `yarn run rename -- <YourProjectName>` (the default name is MyApp)

## Content

The boilerplate contains:
* React Native (v0.63.4)
* Redux (v4.0.5) to help manage state
* Redux Persist (v6.0.0) to persist the Redux state
* Redux Sagas (v1.1.3) to separate side-effects and logic from state and View
* React Navigation (v5) 
* apisauce (1.1.1)
* reduxsauce (v1.0.1) to facilitate using Redux
* reselect (v4.0.0)

## Directory

* [`App/Components`](App/Components): presentational components
* [`App/Config`](App/Config): configuration of the application
* [`App/Containers`](App/Containers): container components, i.e. the application's screens
* [`App/Assets`](App/Assets): assets (image, audio files, ...) used by the application
* [`App/Navigators`](App/Navigators): react navigation navigators 
* [`App/Sagas`](App/Sagas): redux sagas
* [`App/Services`](App/Services): application services, e.g. API clients
* [`App/Redux`](App/Redux): redux [actions, reducers and stores] merge into a file(https://redux.js.org/basics)
* [`App/Theme`](App/Theme): base styles for the application

## Contributors
- Mengheang RAT - [GitHub](https://github.com/mengheangrat)
- [YOUR NAME HERE] - Feel free to contribute to the codebase by resolving any open issues, refactoring, adding new features, writing test cases or any other way to make the project better and helpful to the community. Feel free to fork and send pull requests.


## License

This project is released under the [MIT License](LICENSE).

## Todo

<p>Config react-native-localize</p>
<p>Config react-native-config</p>
<p>Config End-to-End with Detox</p>
<p>Storybook</p>
