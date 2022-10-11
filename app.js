const sounds = document.querySelectorAll("audio[data-key]");

document.onkeydown = function (e) {
    for (let sound of sounds) {
        if (e.code === sound.dataset.key) {
            sound.currentTime = 0;
            sound.play();
            let box = document.querySelector(`div[data-key=${e.code}]`);
            box.classList.add('playing');
        }
    }
}

document.onkeyup = function (e) {
    let box = document.querySelector(`div[data-key=${e.code}]`);
    box.classList.toggle('playing');
}
