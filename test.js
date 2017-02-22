import test from 'ava';
var Nightmare = require('nightmare'),
    nightmare = Nightmare();

let port = 8080; // Your testing port number

test('homescreen loads', async t => {
    // Convert first homescreen box promise to string and
    // see if it contains the first Gurdwara
    function chk(homescreenbox){
        homescreenbox = homescreenbox.toString();
        if (homescreenbox.includes("Akal Takht")) {
            return true;
        }

    }

    t.true(chk(await loadPageCall));
});


// Promise for homescreen loads test
var loadPageCall = new Promise(function(resolve, reject) {
    nightmare.goto('http://localhost:'+ port)
        .evaluate(function(){
            return document.querySelector('body span').innerHTML;
        })
        .end()
        .then(function(title){
            resolve(title);
        })
        .catch(function(e) { reject(e.details); });
});