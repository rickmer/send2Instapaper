function handleMessage(msgEvent) {
    var messageName = msgEvent.name;
    var messageData = msgEvent.message;

    if (messageName === "info") {
        if (messageData === "nouserdata") {
            showInstaInfo('You need to set your userdata!');
        }
        if (messageData === "saving") {
            showInstaInfo('saving...');
        }
    }

    if (messageName === "api") {
        if (messageData === "403") {
            showInstaInfo('Invalid username or password.');
        }
        if (messageData === "201") {
            showInstaInfo('saved');
        }
        if (messageData === "400") {
            showInstaInfo('Rate limit exceeded.');
        }
    }
}

function showInstaInfo(message) {
    setInstaDiv(message);
    setTimeout('setInstaDiv("")',800);
}

function setInstaDiv(text) {
    if (text === "") {
        document.getElementById('instapaper_info').setAttribute('class','inactive_insta_info');
        document.getElementById('instapaper_info').innerHTML = '<div id="instaButton">' + text + '</div>';
    } else {
        document.getElementById('instapaper_info').setAttribute('class','active_insta_info');
        document.getElementById('instapaper_info').innerHTML = '<div id="instaButton">' + text + '</div>'; 
    }
}

safari.self.addEventListener("message", handleMessage, false);

var newNode = document.createElement('div');
newNode.setAttribute('id','instapaper_info');
document.body.appendChild(newNode);

