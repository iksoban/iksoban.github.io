// Hide Everything
function initIndex() {
    $("#index").find("img").each( function() {
        $(this).hide();
    });
    $("#paintings").hide();
    $("#drawings").hide();
    $("#about").hide();

    slideshowWithOptions(0, getAllImageIndices());
}
initIndex();

// Get references to pages
function initPages() {
    var docPages = document.getElementById("pages");
    for (var i = 0; i < docPages.childNodes.length; i++) {
        var node = docPages.childNodes[i];
        if (node.tagName == "SECTION") {
            pages["#" + node.id] = node;
        }
    }
}
initPages();

function showIndexWithImage(src) {
    var page = "#index"
    var image = getImageIndexFromSrc(src);
    var galleryImages = getCurrentImageIndices();

    $(currentPage).fadeOut(100, function() {
        $(page).fadeIn(300);
        slideshowWithOptions(image, galleryImages);
    });
    $(".img-navigation").show()

    currentPage = page;
    toggleSubmenus();
}

function showPage(page, options) {
    resetYear();
    loadPageImages(page);
    
    $(currentPage).fadeOut(100, function() {
        $(page).fadeIn(300);
    });

    // Hide Navigation
    $(".img-navigation").hide()

    currentPage = page
    toggleSubmenus();
}

function loadPageImages(page) {
    var images = $(page).find("img").toArray();
    lazyload(images);
}