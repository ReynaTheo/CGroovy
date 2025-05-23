$(document).ready(function() {
    const $albumGrid = $('.album-grid');
    const $albumCards = $('.album-card');
    const $prevBtn = $('#prev-album');
    const $nextBtn = $('#next-album');
    
    const totalAlbums = $albumCards.length;
    const visibleAlbums = 5;
    let currentIndex = 0;
    
    // Initialize slider
    function initSlider() {
        updateNavigation();
        // Set initial position
        moveSlider();
    }
    
    // Move slider to current position
    function moveSlider() {
        const cardWidth = $albumCards.outerWidth(true);
        const moveDistance = -currentIndex * cardWidth;
        $albumGrid.css('transform', `translateX(${moveDistance}px)`);
    }
    
    // Update navigation buttons visibility
    function updateNavigation() {
        $prevBtn.toggle(currentIndex > 0);
        $nextBtn.toggle(currentIndex < totalAlbums - visibleAlbums);
    }
    
    // Next button click handler
    $nextBtn.on('click', function() {
        if (currentIndex < totalAlbums - visibleAlbums) {
            currentIndex++;
            moveSlider();
            updateNavigation();
        }
    });
    
    // Previous button click handler
    $prevBtn.on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            moveSlider();
            updateNavigation();
        }
    });
    
    // Handle window resize
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            moveSlider();
            updateNavigation();
        }, 250);
    });
    
    // Initialize the slider
    initSlider();
});