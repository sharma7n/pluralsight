function Subject() {
    this.observers = [];
}

Subject.prototype.registerObserver = function ( observer ) {
    this.observers.push(observer);
};

Subject.prototype.getObserver = function ( index ) {
    if ( index > -1 && index < this.observers.length ) {
        return this.observers[index];
    }
};

Subject.prototype.notify = function ( data ) {
    for ( var observer of this.observers ) {
        observer.update(data);
    }
};

function Vessel ( data ) {
    this.name = data.name;
    this.history = [];
    var course = null;
    
    Object.defineProperty(Vessel.prototype, 'course', {
        get: function() {
            return course;
        },
        set: function ( value ) {
            course = value;
            this.history.push(value);
        }
    });
}

function ObservableVessel ( data ) {
    Vessel.call(this, data);
    this.subject = new Subject();
}

ObservableVessel.prototype = Object.create(Vessel.prototype);
ObservableVessel.prototype.registerObserver = function ( obs ) { this.subject.registerObserver(obs); };
ObservableVessel.prototype.getObserver = function ( idx ) { this.subject.getObserver(idx); };
ObservableVessel.prototype.chartCourse = function ( newCourse ) {
    this.course = newCourse;
    this.subject.notify({name: this.name, course: newCourse, time: Date.now()});
};

module.exports = ObservableVessel;