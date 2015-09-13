(function() {
  var chloe = {
    carousel: function() {
      var $slider = $('#car-list');
      var $slider2 = $('#car-main');
      var transitionTime = 1000;

      function slide($newPhoto) {
        var $imgAttr = $newPhoto.find('img');
        var $img = $('<img />', {
          class: 'car-main-img',
          src: $imgAttr.attr('src'),
          alt: $imgAttr.attr('alt')
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
          } else if (Number.isInteger(direction)){
            newI = direction;
          } else {
            newI = i === 0 ? $slides.length - 1 : i - 1;
          }
          var $newPhoto = $slides.eq(newI);
          $newPhoto.addClass('active');
          slide($newPhoto);
        };
      }

      var changeNext = changePhoto('next');
      var changePrev = changePhoto('prev');
      $('#next').click(changeNext);
      $('#prev').click(changePrev);
      $slider.find('li').each(function(i) {
        $(this).click(changePhoto(i));
      });

      $('#carousel').keydown(function(e) {
        switch(e.which) {
          case 37: // left
          case 38: // up
            changePrev();
            break;

          case 39: // right
          case 40: // down
            changeNext();
            break;

          default: return;
        }
        e.preventDefault();
      });
    },

    navigation: function() {
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
    }
  };

  chloe.navigation();
  chloe.carousel();
})();
