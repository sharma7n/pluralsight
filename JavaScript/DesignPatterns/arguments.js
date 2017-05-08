function numbers() {
    for ( var arg of arguments ) {
        console.log(arg);
    }
}

numbers();
numbers(1);
numbers(1, 2, 3);