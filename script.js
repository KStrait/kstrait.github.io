// Wait for the document to load before running the script 
(function ($) {
  
  // We use some Javascript and the URL #fragment to hide/show different parts of the page
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page
  $(window).on('load hashchange', function() {
    
    // First hide all content regions, then show the content-region specified in the URL hash 
    // (or if no hash URL is found, default to first menu item)
    $('.content-region').hide();
    
    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');
    
    // If a hash is present in the URL, use it, otherwise default to the first menu item
    var region = location.hash.toString() || '#home'; // Default to '#home' if no hash is present
    
    // Show the region specified in the URL hash
    $(region).show();
    
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
