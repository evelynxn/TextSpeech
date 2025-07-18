
function getText () {
    var text = document.body.innertext;
    return text;
}

function readtext () {
    const text = getText();
    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}


