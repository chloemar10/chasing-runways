(function() {

  // style the navigation
  var path = /([^\/]*)\.html$/.exec(window.location.pathname)[1];
  $('.navigation a').each(function() {
    var $nav = $(this);
    if ($nav.attr('href') === path) {
      $nav.attr('id', 'currentPage');
    } else if($nav.attr('href') === 'index.html' && path === 'index') {
      $nav.attr('id', 'currentPage');
    } else {
      $nav.removeAttr('id');
    }
  });
})();