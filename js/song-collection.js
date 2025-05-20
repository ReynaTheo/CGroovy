function goToDetail(songID){
    if(songID === '1'){
        window.location.href = 'song-detail.html'
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});