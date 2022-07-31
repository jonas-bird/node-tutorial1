const fs = require('fs');
const path = require('path');

// Filesystem operastions can be either synchronous or asynchronous
// In most cases we want the async version
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//   if(err) throw err;
//   console.log('Folder created...');
// });
// Here we passed in a callback function that lets us throw an error
// or prints a msg to the console


// We can also perform typical file operations:
// Here we will open/create a file for writing
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//             'Hello World!',
//             err => {
//               if (err) throw err;
//               console.log('Greeting written to file');

//             });

// To append to a file, rather than overwrite it we need to use
// fs.appendFile, also since these are async operations we need
// to call fs.append as part of the callback for fs.write
// fs.writeFile(
//   path.join(__dirname,'/test', 'hello.txt'), 'Hello World!',
//   err => {
//     if (err) throw err;
//     console.log("File created");

//     // We can safely append as this will not run till after the
//     // file has been created
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       ' I am more text',
//       err => {
//         if (err) throw err;
//         console.log('File appended');
//       }
//     )
//   }
// )

// To read from a file we provide the text encoding as the second parameter
// In this case we are using the text data from the read operation in the
// callback.
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Renaming a file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'hello2.txt'),
  (err) => {
  if (err) throw err;
  console.log('File renamed...');
});
