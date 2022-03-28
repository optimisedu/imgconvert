//node fileSystem.js --  this destructively turns a folder of PNGs in JPGs
const fs = require('fs');
const path = require('path');
const glob = require("glob")
const sharp = require('sharp');

let files = //path

function checker(file) {
  return file.split(".").pop();
}

fs.readdirSync(files).forEach(file => {
  sharp(file)
  .jpeg({ mozjpeg: true, quality: /*compression 1 - 100 */ , force: true })
});

