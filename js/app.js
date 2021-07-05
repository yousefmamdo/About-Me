'use strict';
let username = prompt('What is your name?');
alert('Hello ' + username);

let a = prompt('What is your name?');
a.toLowerCase();
if (a == 'y' || a == 'yes') {
    alert('Hello ' + username);
} else {
    alert('Hello ' + username);
}

let b = prompt('Is red my favorite color?');
b.toLowerCase();
if (b == 'y' || b == 'yes') {
    alert('Yes it is red ' + username);
} else {
    alert('Sorry, I guessed wrong' + username);
}
let c = prompt('Do you have to get up in the morning?');
c.toLowerCase();
if (c == 'y' || c == 'yes') {
    alert('Nobody likes to get up in the morning, and I think you do ' + username);
} else {
    alert('correct guess' + username);
}
let d = prompt('Do I like coffee?');
d.toLowerCase();
if (d == 'y' || d == 'yes') {
    alert('correct guess ' + username);
} else {
    alert('Sorry, I guessed wrong ' + username);
}
let f = prompt('Do I want to fly?');
f.toLowerCase()
if (f == 'y' || f == 'yes') {
    alert('Sorry, I guessed wrong ' + username);
} else {
    alert('Guess right I dont like heights ' + username);
}

alert('Thank you for visiting my site ' + username);