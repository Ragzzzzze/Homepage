var play = function audio() {
    const audio_rain = new Audio("stat/audio/rainSound.mp3");
    const audio_gilneas = new Audio("stat/audio/gilneas.mp3");

    let pressedKeys = [];

    document.addEventListener("keydown", function(event) {
        pressedKeys.push(event.key);

        if (pressedKeys.join('').endsWith('gilneas')) {
            audio_gilneas.play();
        }

        if (pressedKeys.join('').endsWith('rain')) {
            audio_rain.play();
        }

        if (pressedKeys.join('').endsWith('stop')) {
            audio_gilneas.pause();
            audio_rain.pause();
        }

        if (pressedKeys.length > 6) {
            pressedKeys.shift();
        }
    });

}

play();