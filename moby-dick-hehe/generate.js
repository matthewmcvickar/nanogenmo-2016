'use strict';

// Require filesystem.
var fs = require('fs');
var _ = require('underscore');

// The novel.
var mobyDick = fs.readFileSync('./source/moby-dick_no-text-wrap.txt').toString();
var mobyDickHeheFile = './output/moby-dick-hehe.txt';

// Our laughter.
var funnyWords = [
  'sperm whale',
  'sperm',
  'dick'
];

var laughter = [
  'hehe',
  'haha',
  'heh',
  'ha',
  'ha ha',
  'lol',
  '*snort*'
];

var uproariousLaughter = [
  'hehehe',
  'hahaha',
  'ahaha',
  'lolol',
  'heh heh',
  'heh heh heh',
  'haha lol',
  'haaaha'
];

// Our regex.
var funnyWordRegex = /((sperm[ \-']?[a-z]*|dick[\.'"\?!s]*))/gi;
var funnyWordMarker = '~LOL~';
var funnyWordMarkerRegex = /~LOL~/;

// First, run through the entire novel inserting markers where the laughter should go.
var mobyDickHehe = mobyDick.replace(funnyWordRegex, '$1 ' + funnyWordMarker);

// console.log(mobyDickHehe);

// Now run through the laughter-marked novel replacing the markers with laughter.
var mobyDickHeheWords = mobyDickHehe.split(' ');
var wordsSinceLastFunnyWord = 0;
var output = '';

for (var i = 0; i < mobyDickHeheWords.length; i++) {

  var word = mobyDickHeheWords[i];
  var laughterToAdd;

  // How many words since the last time?
  wordsSinceLastFunnyWord++;

  // If the word is one of our funny word markers, then append some laughter.
  if (word.match(funnyWordMarkerRegex)) {

    // If it's been less then 30 since the last marker, laugh really hard.
    if (wordsSinceLastFunnyWord < 30) {
      laughterToAdd = uproariousLaughter[_.random(uproariousLaughter.length-1)];
    }

    // Otherwise, just chuckle a little.
    else {
      laughterToAdd = laughter[_.random(laughter.length-1)];
    }

    // Output.
    output += word.replace(funnyWordMarkerRegex, '(' + laughterToAdd + ')');

    // Debug.
    // console.log(word.replace(funnyWordMarkerRegex, '$1 (' + laughterToAdd + ')'));
    // console.log('It has been ' + wordsSinceLastFunnyWord + ' words since the last time.');

    // Reset word counter.
    wordsSinceLastFunnyWord = 0;
  }

  // Otherwise pass the output through unchanged.
  else {
    output += word;
  }

  // Add the space back to the word.
  output = output + ' ';
}

// Output novel.
fs.writeFile(mobyDickHeheFile, output, function(error) {
  if (error) {
    return console.log(error);
  }

  console.log("Successfully generated 'Moby Dick (Hehe)' at " + mobyDickHeheFile);
});
