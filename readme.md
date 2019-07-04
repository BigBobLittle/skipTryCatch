# @bigboblittle/skipTryCatch   ![npm-Version](https://img.shields.io/badge/npm-v4.0.0-blue.svg)
An npm package to skip chaining sequences of try-catch when dealing with async route in express applications

## Getting Started
The following instructions will get you a copy of this package

### Prerequisite
Make sure you have nodejs and npm installed on your machine

### Installing
use command `npm i @bigboblittle/skipTryCatch`

### Usage 
Require the package 

`const skipTryCatch = require('@bigboblittle/skiptrycatch').skipTryCatch;`

Example use case
wrap the module around your express routes
 
 `exports.bigboblittle = skipTryCatch(async(req,res,next) => { `

     //no need to call try catch here, the package will take care of it
 `}); `


## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Version
current v4.0.0

## Author 
Big Bob Little 
