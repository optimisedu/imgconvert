const fs = require('fs');
const path = require('path');
const glob = require("glob")
const sharp = require('sharp');

let files = //path - this is a bit rough and distructively changes the files in the directory. Checker could be used to improve this process, and sharp clone could be used to create a new directory. Sharp has a variety of tools, from bulk resizing and cropping to individual image manipulation tools (eg. make alll the files in a directory greyscale, orange tinted.).

const checker = (file)=> {
  return file.split(".").pop();
}

const toJpeg = (file) => {
	fs.readdirSync(files).forEach((file) => {
		sharp(file).jpeg({
			mozjpeg: true,
			quality: 100 /*compression 1 - 100 */,
			force: true,
		});
	});
};
const toPng = (file) => {
	fs.readdirSync(files).forEach((file) => {
		sharp(file).png({
			compressionLevel: 9 /*compression 1 - 9 */,
			force: true,
		});
	});
}
const toWebp = (file) => {
	fs.readdirSync(files).forEach((file) => {
		sharp(file).webp({ quality: 100 /*compression 1 - 100 */, force: true });
	});
};
