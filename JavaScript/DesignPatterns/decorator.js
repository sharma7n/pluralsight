// should be called sub-classing instead of decorator

function Queue () {
    this.toBePoppedFrom = [];
    this.toBePushedTo = [];
}

Queue.prototype.push = function ( item ) {
    this.toBePushedTo.push(item);
};

Queue.prototype.pop = function () {
    if ( this.toBePoppedFrom.length > 0 ) {
        return this.toBePoppedFrom.pop();
    } else {
        while ( this.toBePushedTo.length > 0 ) {
            var item = this.toBePushedTo.pop();
            this.toBePoppedFrom.push(item);
        }
        return this.toBePoppedFrom.pop();
    }
};

function PizzaShop () {
    this.orders = new Queue();
}

PizzaShop.prototype.receiveOrder = function ( customer, pizza ) {
    this.orders.push({
        customer: customer,
        pizza: pizza
    });
};

PizzaShop.prototype.deliver = function () {
    var order = this.orders.pop();
    var pizza = order.pizza;
    var customer = order.customer;
    console.log("Delivering " + pizza + " pizza to " + customer + " in 30 minutes or less!");
};

function FranchisedPizzaShop ( franchise ) {
    PizzaShop.call(this);
    this.franchise = franchise;
}

FranchisedPizzaShop.prototype = Object.create(PizzaShop.prototype);

FranchisedPizzaShop.prototype.receiveOrder = function ( customer, pizza ) {
    console.log(this.franchise + " guarantees top quality pizza pies!");
    PizzaShop.prototype.receiveOrder.call(this, customer, pizza);
};

var louMalnatis = new FranchisedPizzaShop("Lou Malnati's");
louMalnatis.receiveOrder("nik", "pepperoni");
louMalnatis.deliver();

