function goToDetail(songID){
    if(songID === '1'){
        window.location.href = 'song-detail.html'
    }
}

function toggleDropdown() {
      const menu = document.getElementById("menuDropdown");
      menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    }

    // Optional: tutup dropdown saat resize ke besar
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        document.getElementById("menuDropdown").style.display = "none";
      }
    });