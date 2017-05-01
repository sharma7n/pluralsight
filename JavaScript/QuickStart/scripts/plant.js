// Plant Text Adventure

var playing = true;

var plant = {
    height: 0,
    hydration: 0,
    happiness: 0,
};

while ( playing ) { 
    var action = prompt("Tend to your plant.").toLowerCase();
    if ( action === "quit" ) {
        playing = false;
        alert(JSON.stringify(plant));
    } else {
        if ( action === "water" ) {
            plant.hydration++;
        } else if ( action === "wait" ) {
            if ( plant.hydration > plant.height ) {
                plant.height++;
            }
        } else if (action === "sing" ) {
            plant.happiness++;
        } else if (action === "status" ) {
            alert(JSON.stringify(plant));
        } else {
            alert("Invalid command. water, wait, sing, or status.");
        }
    }
}