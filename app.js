const sounds = document.querySelectorAll("audio[data-key]");

document.onkeydown = function (e) {
    for (let sound of sounds) {
        if (e.code === sound.dataset.key) {
            sound.currentTime = 0; //resets the audio to 0 so it plays without having to finish
            sound.play();
            let box = document.querySelector(`div[data-key=${e.code}]`); //selects the pressed key box
            box.classList.add('playing');
        }
    }
}

document.onkeyup = function (e) {
    let box = document.querySelector(`div[data-key=${e.code}]`);
    box.classList.toggle('playing');
}
