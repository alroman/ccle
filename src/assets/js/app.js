$(document).foundation();

$(window).resize(function() {
  if ($(window).width() > 1024) {
          $('#ccle-menu').addClass('menu-centered');
     }
  else {$('#ccle-menu').removeClass('menu-centered')}
});
