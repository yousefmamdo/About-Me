'use strict';
let username = prompt('What is your name?');
alert('Hello ' + username);
let score = 0;

let a = prompt('Is bmw my favorite car?');
a.toLowerCase();
if (a == 'y' || a == 'yes') {
    alert('Yes it is bmw' + username);
    score++;
} else {
    alert('Sorry, I guessed wrong ' + username);
}

let b = prompt('Is red my favorite color?');
b.toLowerCase();
if (b == 'y' || b == 'yes') {
    alert('Yes it is red ' + username);
    score++;
} else {
    alert('Sorry, I guessed wrong' + username);
}
let c = prompt('Do you have to get up in the morning?');
c.toLowerCase();
if (c == 'y' || c == 'yes') {
    alert('Nobody likes to get up in the morning, and I think you do ' + username);
} else {
    alert('correct guess' + username);
    score++;
}
let d = prompt('Do I like coffee?');
d.toLowerCase();
if (d == 'y' || d == 'yes') {
    alert('correct guess ' + username);
    score++;
} else {
    alert('Sorry, I guessed wrong ' + username);
}
let f = prompt('Do I want to fly?');
f.toLowerCase()
if (f == 'y' || f == 'yes') {
    alert('Sorry, I guessed wrong ' + username);
} else {
    alert('Guess right I dont like heights ' + username);
    score++;
}

for (let i = 0; i < 4; i++) {
    let g = prompt('Guess the number between 1 and 10?');
    parseInt(g);
    if (g == 5) {
        alert('is Yes, your guess is correct');
        score++;
        break;
    } else if (g > 5) {
        alert('too high');
    } else {
        alert('too low');
    }
    if (i == 3) {
        alert('the correct anser is 5');
    }

}
let food = ['burger', 'steak', 'pizza', 'mansaf'];
for (let i = 0; i < 6; i++) {
    let c = 0;
    let k = prompt('Guess one of my favorite foods?');
    for (let j = 0; j < food.length; j++) {
        if (k === food[j]) {
            alert('is Yes, your guess is correct');
            score++;
            c = 1;
            break;

        }

    }
    if (c == 1) { break; }
}
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}
alert('Thank you for visiting my site ' + username + 'your score is ' + score);