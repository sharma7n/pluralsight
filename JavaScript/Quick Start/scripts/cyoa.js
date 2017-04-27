/*
 * Choose your own adventure
*/

alert("You wake up in a room.");

var action = prompt("What do you do?");
if (action === "look around") {
    alert("You look around the room.");
} else if (action === "cry") {
    alert("Wahhhh");
} else if (action === "die") {
    alert("*** You are dead ***");
} else {
    alert("ok");
}