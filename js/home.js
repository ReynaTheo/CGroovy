// document.addEventListener('DOMContentLoaded', function() {
//     const albumCards = document.querySelectorAll('.album-card');
//     const prevButton = document.getElementById('prev-album');
//     const nextButton = document.getElementById('next-album');
    
//     let currentIndex = 0;
//     const cardsPerPage = 5;
//     const totalPages = Math.ceil(albumCards.length / cardsPerPage);
        
//     function showAlbums() {
//         albumCards.forEach(card => {
//             card.style.display = 'none';
//         });
        
//         for (let i = 0; i < cardsPerPage; i++) {
//             const index = (currentIndex * cardsPerPage + i) % albumCards.length;
//             if (albumCards[index]) {
//                 albumCards[index].style.display = 'block';
//             }
//         }
//     }
//         nextButton.addEventListener('click', function() {
//             currentIndex = (currentIndex + 1) % totalPages;
//             showAlbums();
//         });
        
//         prevButton.addEventListener('click', function() {
//             currentIndex = (currentIndex - 1 + totalPages) % totalPages;
//             showAlbums();
//         });
        
//         showAlbums();
// });

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

// document.addEventListener('DOMContentLoaded', function() {
//     const albumGrid = document.querySelector('.album-grid');
//     const albumCards = document.querySelectorAll('.album-card');
//     const prevButton = document.getElementById('prev-album');
//     const nextButton = document.getElementById('next-album');
    
//     let currentIndex = 0;
//     const cardsPerPage = 5;
//     const totalPages = Math.ceil(albumCards.length / cardsPerPage);
        
//     function showAlbums() {
//         albumCards.forEach(card => {
//             card.style.display = 'none';
//         });
        
//         for (let i = 0; i < cardsPerPage; i++) {
//             const index = (currentIndex * cardsPerPage + i) % albumCards.length;
//             if (albumCards[index]) {
//                 albumCards[index].style.display = 'block';
//             }
//         }
//     }
//         nextButton.addEventListener('click', function() {
//             currentIndex = (currentIndex + 1) % totalPages;
//             showAlbums();
//         });
        
//         prevButton.addEventListener('click', function() {
//             currentIndex = (currentIndex - 1 + totalPages) % totalPages;
//             showAlbums();
//         });
        
//         showAlbums();
// });


// $(document).ready(function() {
//     const slider = $('#album-slider');
//     const cardWidth = $('.album-card').outerWidth(true); // Width of a single album card (including margin)
//     let currentPosition = 0;
//     const totalCards = $('.album-card').length;
    
//     // Next button click handler - move RIGHT by one album
//     $('#next-album').click(function() {
//         if (currentPosition < totalCards - 1) { // Allow sliding until the last album
//             currentPosition++;
//             moveSlider();
//         }
//         updateButtonStates();
//     });
    
//     // Previous button click handler - move LEFT by one album
//     $('#prev-album').click(function() {
//         if (currentPosition > 0) { // Don't slide before the first album
//             currentPosition--;
//             moveSlider();
//         }
//         updateButtonStates();
//     });
    
//     // Move the slider by translating it
//     function moveSlider() {
//         const moveAmount = -currentPosition * cardWidth;
//         slider.css('transform', 'translateX(' + moveAmount + 'px)');
//     }
    
//     // Disable buttons when at the start/end
//     function updateButtonStates() {
//         $('#prev-album').prop('disabled', currentPosition === 0);
//         $('#next-album').prop('disabled', currentPosition >= totalCards - 1);
//     }
    
//     // Initialize button states
//     updateButtonStates();
// });

$(document).ready(function() {
    const $albumGrid = $('.album-grid');
    const $albumCards = $('.album-card');
    const $prevBtn = $('#prev-album');
    const $nextBtn = $('#next-album');
    
    const totalAlbums = $albumCards.length;
    const visibleAlbums = 5; // Always show 5 albums
    let currentIndex = 0;
    
    // Set initial width of grid to contain all albums
    $albumGrid.css('width', 'calc(100% * ' + totalAlbums + ')');
    
    // Initialize slider
    function initSlider() {
        updateNavigation();
        positionSlider();
    }
    
    // Position slider based on currentIndex
    function positionSlider() {
        const cardWidth = $albumCards.first().outerWidth(true);
        const moveDistance = -currentIndex * cardWidth;
        $albumGrid.css('transform', `translateX(${moveDistance}px)`);
    }
    
    // Update navigation buttons
    function updateNavigation() {
        $prevBtn.prop('disabled', currentIndex === 0);
        $nextBtn.prop('disabled', currentIndex >= totalAlbums - visibleAlbums);
    }
    
    // Next button click handler - move one card right
    $nextBtn.on('click', function() {
        if (currentIndex < totalAlbums - visibleAlbums) {
            currentIndex++;
            positionSlider();
            updateNavigation();
        }
    });
    
    // Previous button click handler - move one card left
    $prevBtn.on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            positionSlider();
            updateNavigation();
        }
    });
    
    // Handle window resize
    $(window).on('resize', function() {
        positionSlider();
    });
    
    // Initialize the slider
    initSlider();
});