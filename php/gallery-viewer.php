<div class="container project-view">

        <div class="row">
                <div class="col-md-12 project-images gallery-image">

                        <?php
                        if (isset($_GET['item'])) :
                                $item = $_GET['item'];
                        ?>
                                <script>
                                        // console.log(imageSource)
                                        // `images/gallery/${imageSource}.jpg`
                                        imageString = `<img src="images/gallery/${imageSource}.jpg" alt="" class="img-responsive" />`
                                        localDom = $("div.container.project-view")
                                        localDom.append(imageString)
                                </script>


                        <?php endif; ?>
                </div>
        </div>
</div>