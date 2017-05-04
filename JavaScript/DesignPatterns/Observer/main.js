var Vessel = require('./vessel');
var Lighthouse = require('./lighthouse');

var titanic = new Vessel("titanic");
titanic.chartCourse("starboard 300 meters");

var venusLighthouse = new Lighthouse("Venus Lighthouse");
titanic.registerObserver(venusLighthouse);
titanic.chartCourse("port 200 meters");

var mercuryLighthouse = new Lighthouse("Mercury Lighthouse");
titanic.registerObserver(mercuryLighthouse);
titanic.chartCourse("yarr!");
console.log(titanic.history);
console.log(venusLighthouse.history);
console.log(mercuryLighthouse.history);