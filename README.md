# AngMaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## MUST DO THIS BEFORE RUN

## CREATE ANGULAR PROJECT WITH LOCAL CLI

npx -p @angular/cli ng new `<project-name>`
npx @angular/cli@7 new Angular7Project

https://medium.com/@starikovs/how-to-use-angular-cli-locally-729dbb6707dd

---

# INSTALL ALL THESE

npx -p @angular/cli ng new `<project-name>`

npm i @angular/material@12.2

npm install --save @angular/cdk@12.2

npm start

---

# CREATE COMPONENT

ng generate component banner --skipTests true --modile app.module.ts

npm run ng generate component banner --skipTests true --module app.module.ts

# CREATE COMPONENT [WHEN PROJECT GENERATED WITH LOCAL CLI]

npm run ng -- generate component banner --module=app

# if browser console give error

`ERROR Error: Unexpected synthetic property @transitionMessages found. Please make sure that:`

Import this in `app.module.ts` register it imports
import { BrowserModule } from '@angular/platform-browser';

`@NgModule({ ..., imports: [ ..., BrowserAnimationsModule ], ... })`
