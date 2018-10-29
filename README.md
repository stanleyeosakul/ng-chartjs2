# Angular Chart.js using ng2-charts
This project is based off of the YouTube tutorial [Angular & Chart.js](https://www.youtube.com/watch?v=1iW0KnEk6UM) by *CodingTheSmartWay.com*.  This app has been updated using Angular 7.

## Versions Used
* [Angular CLI](https://github.com/angular/angular-cli) v7.0.3
* Angular v7.0.1
* [Chart.js](https://www.chartjs.org) v2.7.3
* [ng2-charts](https://valor-software.com/ng2-charts) v1.6.0

## Cloning the Project for Personal Use
### Installation
1. Clone this repo `git clone https://github.com/stanleyeosakul/ng-chartjs2`
1. `cd` into the folder of the cloned repo
1. Run `yarn install` to install dependencies
1. Run `ng serve`, and navigate to `http://localhost:4200/`

# Changes to the Original Code
## Embedding Chart.js into `index.html`
The following code should be pasted into HTML to embed Chart.js into the application

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
```