function Lighthouse ( name ) {
    this.name = name;
    this.history = [];
    
    this.update = function ( data ) {
        this.history.push(JSON.stringify(data));
    };
}

module.exports = Lighthouse;