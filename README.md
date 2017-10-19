# KuhookGallery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

# Command:
ng new kuhook-gallery
npm install @angular/flex-layout --save
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations
npm install --save hammerjs
npm install nanogallery2

# Module:
    import { FlexLayoutModule } from '@angular/flex-layout';
    import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

    imports: [FlexLayoutModule],
    imports: [BrowserAnimationsModule],

    	src/main.ts
        import 'hammerjs'; 

# Theme:
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

# Links:
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

Nanogallery2
----------------------------------
<!-- jQuery -->
<script  type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<!-- nanogallery2 -->
<link    href="css/nanogallery2.min.css" rel="stylesheet" type="text/css">
<script  type="text/javascript">src="jquery.nanogallery2.min.js"></script>

------------------------------------------

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
