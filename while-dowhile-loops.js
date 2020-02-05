const players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
];

var i = 0                   // VAR must be used here
while (i < players.length) {
    console.log(players[i])
    i++
}


var n = 4;
do {                                    // "do something once, then check the while. the DO code will always run first"
    console.log(players[n]);    // Do/While looop is common in making a game
    n++;
} while (n < players.length);