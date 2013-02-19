function handleMessage(msgEvent) {
    var messageName = msgEvent.name;
    var messageData = msgEvent.message;

    if (messageName === "info") {
        if (messageData === "nouserdata") {
            alert("You need to set your userdata!");
        }
        if (messageData === "saving") {
            alert("saving...");
        }
    }

    if (messageName === "api") {
        if (messageData === "403") {
            alert("Invalid username or password.");
        }
        if (messageData === "201") {
            alert("saved");
        }
        if (messageData === "400") {
            alert("Rate limit exceeded.");
        }

    }


}




safari.self.addEventListener("message", handleMessage, false);