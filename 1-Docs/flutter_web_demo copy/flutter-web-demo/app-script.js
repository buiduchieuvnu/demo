  // To show Preloaded until the document is ready
  jQuery(document).ready(function() {
    //Preloader
    jQuery(window).on("load", function() {
      preloaderFadeOutTime = 500;

      function hidePreloader() {
        var wrapper = jQuery('.spinner-wrapper');
        var spinner = jQuery('.spinner');
        wrapper.fadeOut(preloaderFadeOutTime);
        spinner.fadeOut(preloaderFadeOutTime);
      }
      hidePreloader();
    });
  });
