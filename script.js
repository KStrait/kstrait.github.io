(function ($) {
  
  // Wait for the document to load before running the script
  $(window).on('load hashchange', function() {
    
    // First, remove both 'show' and 'hide' classes from all content regions
    $('.content-region').removeClass('show').addClass('hide');
    
    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');
    
    // If a hash is present in the URL, use it, otherwise default to the first menu item
    var region = location.hash.toString() || '#home'; // Default to '#home' if no hash is present
    
    // Show the region specified in the URL hash by adding the 'show' class and removing the 'hide' class
    $(region).removeClass('hide').addClass('show');
    
    // Highlight the menu link associated with this region by adding the .active CSS class
    $('.main-menu a[href="'+ region +'"]').addClass('active');
  });

  // Add event listeners to the navigation links
  $('#home-link').on('click', function (e) {
    e.preventDefault();
    // Change the URL hash and trigger hashchange
    window.location.hash = 'home';
  });

  $('#about-link').on('click', function (e) {
    e.preventDefault();
    // Change the URL hash and trigger hashchange
    window.location.hash = 'about';
  });

  $('#contact-link').on('click', function (e) {
    e.preventDefault();
    // Change the URL hash and trigger hashchange
    window.location.hash = 'contact';
  });

})(jQuery);
