// Zombie Text Adventure

alert("It is the zombie apocalypse. A zombie appears!");
var weapon = prompt("Choose your weapon.");
var attack_roll = Math.round(Math.random());

alert("You attack with the " + weapon);
if (attack_roll === 0) {
    alert("You have died.");
} else {
    alert("You win!");
};