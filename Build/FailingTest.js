var sass = require('node-sass');

console.log('Test');

var opts = {
    errLogToConsole: true,
    sourceComments: 'map',
    file: '../App/Main.scss',
    success: function(css, map) {
        console.log(map);
        JSON.parse(map);
        console.log("Succeeded.");
    }
};

sass.render(opts);
