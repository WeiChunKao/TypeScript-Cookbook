let myObject = {
    greeting: "Hi, there",

    writeMessage(message) {
        console.log(`${this.greeting}, ${message}`);
    }
}

// myObject.writeMessage = myObject.writeMessage.bind(myObject);

myObject.writeMessage("It is sunny today");

greeting = "Hello";
let myFunction = myObject.writeMessage;
myFunction("It is sunny today");