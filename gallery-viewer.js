let imageSource =""


$("#gallery .simple-ajax-popup-align-top").each(function () {
  $(this).click(function () {
    imageSource = $(this).attr("imagesrc");
    console.log($(this).innerHTML)
  });
});

function getGalleryItem(galleryImage) {
  let galleryString = `<div class="container project-view">
  <div class="row">
    <div class="col-md-12 project-images">
      <img
        src="images/gallery/${galleryImage}.jpg"
        alt=""
        class="img-responsive"
      />
    </div>
  </div>
</div>`;

  return galleryString;
}

// export default imageSource
