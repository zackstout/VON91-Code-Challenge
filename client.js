
// Global variables:
var picIndex = 0;
var pics = ['https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-img.instyle.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F684xflex%2Fpublic%2Fimages%2F2017%2F12%2Fgettyimages-539573922.jpg%3Fitok%3Dao0lroMk&w=700&q=85', 'http://www.betootaadvocate.com/wp-content/uploads/2016/10/stock-photo-model.jpg', 'https://i.imgur.com/MaoFf8i.jpg'];

// Click handlers:
$(document).ready(() => {
  console.log('we in');

  // You can't pass parameters to these:
  $('.goBack').click(goBack)
  $('.goForward').on('click', goForward);
  $('#textScroll').click(function(){
    $('html, body').animate({
      scrollTop: $("#text").offset().top
    }, 500);
  });
  $('#contactScroll').click(function(){
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 1000);
  });
});

function goBack() {
  var len = pics.length;
  picIndex = (picIndex - 1) % len;
  if (picIndex === -1) {
    picIndex = len - 1;
  }
  $('#pics').css('background-image', 'url(' + pics[picIndex] + ')');
}

function goForward() {
  var len = pics.length;
  picIndex = (picIndex + 1) % len;
  $('#pics').css('background-image', 'url(' + pics[picIndex] + ')');
}
