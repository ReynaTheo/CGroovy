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
    const $slider = $('#album-slider');
    const $albumCards = $('.album-card');
    const cardWidth = $albumCards.outerWidth(true);
    const $container = $('.slider-container');
    let currentPosition = 0;
    
    // Calculate how many cards are visible
    function getVisibleCards() {
        return Math.floor($container.width() / cardWidth);
    }
    
    // Update slider position
    function updateSliderPosition() {
        $slider.css('transform', `translateX(-${currentPosition * cardWidth}px)`);
        
        // Disable/enable buttons based on position
        $('#prev').prop('disabled', currentPosition === 0);
        $('#next').prop('disabled', currentPosition >= $albumCards.length - getVisibleCards());
    }
    
    // Next button click
    $('#next').on('click', function() {
        const visibleCards = getVisibleCards();
        if (currentPosition < $albumCards.length - visibleCards) {
            currentPosition++;
            updateSliderPosition();
        }
    });
    
    // Previous button click
    $('#prev').on('click', function() {
        if (currentPosition > 0) {
            currentPosition--;
            updateSliderPosition();
        }
    });
    
    // Initialize
    updateSliderPosition();
    
    // Handle window resize
    $(window).on('resize', function() {
        const visibleCards = getVisibleCards();
        currentPosition = Math.min(currentPosition, $albumCards.length - visibleCards);
        updateSliderPosition();
    });
});

$(document).ready(function() {
    $('#next').on('click', function() {
        console.log('Next button clicked');
        $('#album-slider').css('transform', 'translateX(-100px)');
    });
    
    $('#prev').on('click', function() {
        console.log('Prev button clicked');
        $('#album-slider').css('transform', 'translateX(0)');
    });
});