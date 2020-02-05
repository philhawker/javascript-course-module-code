var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
];

for (var i = 0; i < players.length; i++) {       //must have ; in this situation. this is saying to loop through players until it hits 0
    console.log(players[i])
}

var morePlayers = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
];

for (player in morePlayers) {
    console.log(morePlayers[player])    // This is the modern way to format a for loop. its the same as above
}

var myFamily = [
    'phil',
    'kelsey',
    'sadie',
];

myFamily.forEach(function(element) {    // This is the forEach loop. should use this more
    console.log(element)
})