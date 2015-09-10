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

  // carousel
  var photos = ['posts/first/1.png', 'posts/first/2.png', 'posts/first/3.png'];
  var $carList = $('#car-list');
  photos.forEach(function(photo) {
    var $li = $('<li/>');
    var $img = $('<img />', {
      src: photo,
      alt: 'MyAlt'
    });
    $img.appendTo($li);
    $li.appendTo($carList);
  });

  var $img = $('<img />', {
    src: photos[0],
    alt: 'MyAlt'
  });
  $img.appendTo($('#car-main'));
})();