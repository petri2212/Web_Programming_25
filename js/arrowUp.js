
$(document).ready(function () {
  var contenitore = $('#contenuto');
  var link = $('.tornaSu');

  contenitore.scroll(function () {
    if (contenitore.scrollTop() > 100) {
      link.addClass('show');
    } else {
      link.removeClass('show');
    }
  });

  link.on('click', function (e) {
    e.preventDefault();
    contenitore.animate({ scrollTop: 0 }, 300);
  });
});




