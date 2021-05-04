let imageSource =""

$("#gallery .simple-ajax-popup-align-top").each(function () {
  $(this).click(function () {
    imageSource = $(this).attr("imagesrc");
  });
});
