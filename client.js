
// Global variables:
var pics = [ 'https://i.ytimg.com/vi/o4PDgTV2WhA/hqdefault.jpg', 'https://i.imgur.com/MaoFf8i.jpg', 'https://www.dogbreedinfo.com/images8/PUGtubbs.jpg'];
var picIndex = 0;

// Click handlers:
$(document).ready(() => {
  console.log('we in');
  // You can't pass parameters to these:
  $('#goBack').click(goBack)
  $('#goForward').on('click', goForward);
});

function goBack() {
  var len = pics.length;
  picIndex = (picIndex - 1) % len;
  if (picIndex === -1) {
    picIndex = len - 1;
  }
  $('#pics').css('background-image', 'url(' + pics[picIndex] + ')');
  // console.log('back', picIndex);
}

function goForward() {
  var len = pics.length;
  picIndex = (picIndex + 1) % len;
  $('#pics').css('background-image', 'url(' + pics[picIndex] + ')');
  // console.log('go', picIndex);
}
