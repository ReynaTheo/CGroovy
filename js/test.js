//  function toggleDropdown() {
//       document.getElementById("menuDropdown").classList.toggle("show");
//     }

//     // Optional: Tutup dropdown kalau klik di luar
//     window.addEventListener('click', function (e) {
//       const menu = document.getElementById("menuDropdown");
//       const icon = document.querySelector(".menu-icon");
//       if (!icon.contains(e.target) && !menu.contains(e.target)) {
//         menu.classList.remove("show");
//       }
   
//     });
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

document.addEventListener('DOMContentLoaded', function() {
    const albumGrid = document.querySelector('.album-grid');
    const albumCards = document.querySelectorAll('.album-card');
    const prevButton = document.getElementById('prev-album');
    const nextButton = document.getElementById('next-album');
    
    let currentIndex = 0;
    const cardsPerPage = 5;
    const totalPages = Math.ceil(albumCards.length / cardsPerPage);
        
    function showAlbums() {
        albumCards.forEach(card => {
            card.style.display = 'none';
        });
        
        for (let i = 0; i < cardsPerPage; i++) {
            const index = (currentIndex * cardsPerPage + i) % albumCards.length;
            if (albumCards[index]) {
                albumCards[index].style.display = 'block';
            }
        }
    }
        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % totalPages;
            showAlbums();
        });
        
        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + totalPages) % totalPages;
            showAlbums();
        });
        
        showAlbums();
});