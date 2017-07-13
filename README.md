# party-ui

## Dependencies

* [Node.js with npm](http://nodejs.org), Node >= 6.9.0, npm >= 3
* [angular-cli](https://github.com/angular/angular-cli), rc.0

## Installation

* Clone this project
* In `app.module.ts` under `api-key` add your personal Google Maps API Key
  * AgmCoreModule.forRoot({ apiKey: 'YOUR_KEY_HERE', libraries: ["places"] })
* Run `$ npm install` in the root

## Server

Run `$ ng serve` to serve the project at [http://localhost:4200/party-ui](http://localhost:4200/party-ui).

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section.

## Author

Sascha Rüsing - adesso Schweiz AG

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
