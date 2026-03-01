const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
});

audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration;
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
    current.textContent = formatTime(audio.currentTime);
});

progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
}