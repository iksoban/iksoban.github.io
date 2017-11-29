function initIndex() {
    $("#paintings").hide();
    $("#drawings").hide();
    $("#about").hide();
}
initIndex();
buildIndexDict();

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

function loadPageImages(page) {
    console.log(page)
    var images = $(page).find("img").toArray();
    console.log(images);
    lazyload(images);
}

function showIndexWithImage(imagePath) {
    var index = indexDictionary[imagePath];
    var galleryIndices = getCurrentImageIndices()
    switchToIndex(index, galleryIndices);
    $(currentPage).fadeOut(100, function() {
        $("#index").fadeIn(300);
    });

    currentPage = "#index"
    $(".img-navigation").show()
}

function showPage(page) {
    // Reset Years
    resetYear();
    loadPageImages(page);
    
    $(currentPage).fadeOut(100, function() {
        $(page).fadeIn(300);
    });

    if (page != "#index") {
        $(".img-navigation").hide()
    }
    currentPage = page
    toggleSubmenus();
}

function toggleSubmenus() {
    var currentPageSubmenu = currentPage + "-submenu"
    $(".submenu").each(function() {
        var id = "#" + $(this).attr('id')
        if (id == currentPageSubmenu &&  $(this).is(":hidden"))
            $(this).toggle(100);
        else if (id != currentPageSubmenu && $(this).is(":visible"))
            $(this).toggle(100);
    });
}