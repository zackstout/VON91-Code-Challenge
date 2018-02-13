
// Global variables:
var pics = [ 'https://i.ytimg.com/vi/o4PDgTV2WhA/hqdefault.jpg', 'https://i.imgur.com/MaoFf8i.jpg', 'https://www.dogbreedinfo.com/images8/PUGtubbs.jpg'];
var picIndex = 0;

// var pic0 = pics[0];
// var pic1 = pics[1];
// var pic2 = pics[2];

// Click handlers:
$(document).ready(() => {
  console.log('we in');

  $('#pic1Container').hide();
  $('#pic2Container').hide();

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
  // $('#pics').css('background-image', 'url(' + pics[picIndex] + ')');
  console.log('back', picIndex);
  var pic = '#pic' + picIndex + 'Container';
  console.log($(pic).text());
  $(pic).show();
  for (var i=0; i < len; i++) {
    if (i != picIndex) {
      var picnow = '#pic' + i + 'Container';
      $(picnow).hide();
    }
  }
  $(pic).animate({
    left: "+= 500"
  }, 1000);
}

function goForward() {
  var len = pics.length;
  picIndex = (picIndex + 1) % len;
  $('#pics').css('background-image', 'url(' + pics[picIndex] + ')');
  // console.log('go', picIndex);
}
