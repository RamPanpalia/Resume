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