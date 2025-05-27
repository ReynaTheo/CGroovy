function toggleDropdown() {
      const menu = document.getElementById("menuDropdown");
      menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        document.getElementById("menuDropdown").style.display = "none";
      }
    });



$(document).ready(function() {
    const $albumGrid = $('.album-grid');
    const $albumCards = $('.album-card');
    const $prevBtn = $('#prev-album');
    const $nextBtn = $('#next-album');
    
    const totalAlbums = $albumCards.length;
    const visibleAlbums = 5; 
    let currentIndex = 0;
    
    $albumGrid.css('width', 'calc(100% * ' + totalAlbums + ')');
    
    function initSlider() {
        updateNavigation();
        positionSlider();
    }
    
    function positionSlider() {
        const cardWidth = $albumCards.first().outerWidth(true);
        const moveDistance = -currentIndex * cardWidth;
        $albumGrid.css('transform', `translateX(${moveDistance}px)`);
    }
    
    function updateNavigation() {
        $prevBtn.prop('disabled', currentIndex === 0);
        $nextBtn.prop('disabled', currentIndex >= totalAlbums - visibleAlbums);
    }
    
    $nextBtn.on('click', function() {
        if (currentIndex < totalAlbums - visibleAlbums) {
            currentIndex++;
            positionSlider();
            updateNavigation();
        }
    });
    
    $prevBtn.on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            positionSlider();
            updateNavigation();
        }
    });
    
    $(window).on('resize', function() {
        positionSlider();
    });
    
    initSlider();
});


function goToDetail(songID){
    if(songID === '1'){
        window.location.href = 'song-detail.html'
    }
}
