// npm init
// npm install
// npm install readline-sync

const readlineSync = require('readline-sync');
var player1 = 'Bad Motherfucker';
var hasHammer = false;
var hasSword = false;
console.log('You are in a dark cave and the path ahead forks in two ways.');
function entry (player) {
  var ways = ['left', 'right'];
  var way = readlineSync.keyInSelect(ways, 'Left or right?');
  console.log('You are heading to the ' + ways[way] + '.');
  // console.log(way);
  if (way === 0) {
    left(player);
  } else if (way === 1) {
    right(player);
  } else {
    end(player);
  }
}

function left (player) {
  var items = ['hammer', 'broken sword', 'rusty spoon'];
  var item = readlineSync.keyInSelect(items, 'You found a hammer, a broken sword and a spoon. Which one do you pick up?');
  console.log('You picked up a ' + items[item] + '.');
  // console.log(item);
  if (item === 0) {
    hammer(player);
  } else if (item === 1) {
    sword(player);
  } else if (item === 2) {
    spoon(player);
  } else {
    end(player);
  }
}

function hammer (player) {
  console.log('Its hammertime!');
  console.log('Now you have no other option, but going to the right side of the cave.');
  hasHammer = true;
  right(player);
}

function sword (player) {
  console.log('Its better than nothing.');
  console.log('Now you have no other option, but going to the right side of the cave.')
  hasSword = true;
  right(player);
}

function spoon (player) {
  console.log('Finally, you can eat your stew with something!');
  console.log('Oh no, you have contracted a bad infection from that rusty spoon you just found!');
  end(player);
}

function right (player) {
  console.log('As you were going down the path you have encountered Spooky McSkellington. He has a bone to pick with you!');
  if (hasHammer === true) {
    console.log('You bashed his head in with the hammer you found earlier.');
    light(player);
  } else if (hasSword) {
    console.log('You tried to fight him with that useless junk of a sword. Its not very effective.');
    end(player);
  } else {
    console.log('With no weapons to fight with, you accepted your fate.');
    end(player);
  }
}

function light (player) {
  console.log('You noticed a ray of light shining through the darkness.');
  var decisions = ['go', 'stay'];
  var decision = readlineSync.keyInSelect(decisions, 'Do you follow the light or stay in the dark');
  if (decision === 0) {
    console.log('You soon realized that the light was just an illusion cast by an evil cult of necromancers to trap you. Eternal suffering awaits you!');
    end(player);
  } else {
    console.log('You didnt venture forth, and was soon rescued by your BFF, Crippled Joe.');
    brothel(player);
  }
}

function brothel (player) {
  console.log('You decided to celebrate this adventure by getting drunk and visiting either the brothel or the library.');
  var finalDecisions = ['brothel', 'library'];
  var finalDecision = readlineSync.keyInSelect(finalDecisions, 'Do you go to the brothel or the library?');
  if (finalDecision === 0) {
    console.log('As you were having fun, the brothel suddenly burned down. Though luck.');
    end(player);
  } else {
    console.log('You read a good book and your INT attribute increased by 2. Today was a good day.');
  }
}

function end (player) {
  console.log('YOU DIED, ' + player + '!');
}

entry(player1);
