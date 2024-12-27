var isFullScreen = false;
var resume=document.querySelector('.Resume')
function fullscreenToggle() {
    isFullScreen ?
    full_exit()
        :
    full()
}
function full() {
    document.querySelector('.screenToggle').innerHTML = `
        <img src="assets/fullscreen_exit.svg" alt="">
        `
    isFullScreen = true;
    resume.style.transform="scale(1)";
    resume.style.borderRadius="0";
    resume.style.width="100%";
}
function full_exit() {
    document.querySelector('.screenToggle').innerHTML = `
    <img src="assets/fullscreen.svg" alt="">
    `
    isFullScreen = false;
    resume.style.transform="scale(0.8)";
    resume.style.borderRadius="4px";
    resume.style.width="80%";
}

function printIt() {
    window.print();
}

// check if width is less than 1100px then redirect to https://rampanpalia.github.io/Resume/Ram%20Panpalia.pdf

window.location.href = "https://rampanpalia.github.io/Resume/Ram Panpalia Resume 07.pdf";
if (window.innerWidth < 1100) {
}   