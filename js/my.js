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
  var $slider = $('.car-list');
  var $slider2 = $('.car-main');
  var transitionTime = 1000;

  function slide($newPhoto) {
    var $img = $('<img />', {
      class: 'car-main-img',
      src: $newPhoto.find('img').attr('src'),
      alt: 'MyAlt'
    });
    $img.appendTo($slider2).hide().fadeIn(transitionTime);
    $slider2.find(':first-child').fadeOut(transitionTime, function() {
      $(this).remove();
    });
  }

  function changePhoto(direction) {
    return function() {
      var newI;
      var $slides = $slider.find('li');
      var i = $slider.find('li.active').index();
      $slides.eq(i).removeClass('active');
      if (direction === 'next') {
        newI = $slides.length === i + 1 ? 0 : i + 1;
      } else {
        newI = i === 0 ? $slides.length - 1 : i - 1;
      }
      var $newPhoto = $slides.eq(newI);
      $newPhoto.addClass('active');
      slide($newPhoto);
    };
  }

  $('#next').click(changePhoto('next'));
  $('#prev').click(changePhoto('prev'));
})();