// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Global javascript
// * Browser condition
// * Modal close
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

// Browser condition
// ============================================================
$(function() {
  if(is.ie()) {
    $('html').addClass('ie');
  } else if (is.edge()) {
    $('html').addClass('edge');
  } else if (is.mac() && is.safari()) {
    $('html').addClass('safari');
  } else if (is.firefox()) {
    $('html').addClass('firefox');
  } else if ((is.iphone() || is.ipad()) && is.safari()) {
    $('html').addClass('safari-mobile');
  } else if (is.android() && is.chrome()) {
    $('html').addClass('chrome-mobile');
  }
});

// Modal close
// ============================================================
$(function() {
  $('.button-modal-close, .modal-overlay').on("click", function() {
      $('.modal').removeClass('is-open');
  });
});
