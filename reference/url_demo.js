const url = require('url');

// Example URL with parameters
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
// or
console.log(myUrl.toString());
// Host
console.log(myUrl.host);
// Hostname (will not include the TCP port)
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
// The query parameters (serialized query)
console.log(myUrl.search);
// To get the parameters in object form
console.log(myUrl.searchParams);

// It is also possible to append parameters on the URL
myUrl.searchParams.append('abc', '123');

// To loop over the parameters:
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
