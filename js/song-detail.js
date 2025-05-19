function goBack(){
    window.history.back();
}

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});

let currentMusic = 0;

const music = document.querySelector("#audio")

const seekBar = document.querySelector('.seek-bar')
const songName = document.querySelector('.music-name')
const artistName = document.querySelector('.artist-name')
const disk = document.querySelector('.disk')
const currentTime = document.querySelector('.current-time')
const musicDuration = document.querySelector('.song-duration')
const playBtn = document.querySelector('.play-btn')
const forwardBtn = document.querySelector('.forward-btn')
const backwardBtn = document.querySelector('.backward-btn')

playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('pause')
    disk.classList.toggle('play')
})


const setMusic = (i) => {
    seekBar.value = 0
    let song = songs[i]
    currentMusic = i
    music.src = song.path
}