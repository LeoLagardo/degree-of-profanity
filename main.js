const fs = require('fs');
let tweets = JSON.parse(fs.readFileSync('tweets.json', 'utf-8'));

const racialSlurs = ['chink', 'nigga', 'paki', 'whitey'];

const tweetArray = Object.values(tweets);
const tweetUser = Object.keys(tweets);

let res = [];
tweetArray.forEach(tweet => {
    res.push(tweet.split(",").toString().split(" "));
});

for(let i=0; i<res.length; i++){
    console.log(tweetUser[i], (res[i].filter(element => racialSlurs.includes(element)).length / res[i].length)* 100);
}




