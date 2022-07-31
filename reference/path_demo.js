const path = require('path');

// Entire path with filename and extension
console.log(__filename);

// To just get the filename and extension
console.log(path.basename(__filename));

// Directory name, could also just use __dirname
consol.log(path.dirname(__filename));

// Just the extension
console.log(path.extname(__filename));

// Using the parse method we can get an object that represents
// the path/filename
console.log(path.parse(__filename));

// To concatenate paths we can use the join method
console.log(path.join(__dirname,'test', 'hello.html'))
// This can be used to avoid issues with delimiters that can
// come up on windows machines
