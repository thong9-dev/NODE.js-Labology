const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('pdf.pdf');
 
pdf(dataBuffer).then(function(data) {
 
    // console.log("// number of pages");
    // console.log(data.numpages);

    // console.log("// number of rendered pages");
    // console.log(data.numrender);

    // console.log("// PDF info");
    // console.log(data.info);

    // console.log("// PDF metadata");
    // console.log(data.metadata); 

    // console.log("// PDF.js version");
    // check https://mozilla.github.io/pdf.js/getting_started/
    // console.log(data.version);

    console.log("// PDF text");
    console.log(data.text); 
        
});