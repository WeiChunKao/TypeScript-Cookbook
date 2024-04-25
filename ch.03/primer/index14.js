function writeMessage(message) {
    console.log(`${this.greeting}, ${message}`);
}

greeting = "Hello";
writeMessage("It is sunny today");
writeMessage.call(globalThis, "It is sunny today");
