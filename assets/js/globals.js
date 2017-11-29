var pages = {};
var currentPage = "#index";

var hidden = new Array();
var currentYear = "";

function getImages() {
    return $("#slideshow").find("img").toArray();
}
var images = getImages()

function buildIndexDict() {
    var indexDictionary = {}
    for (i = 0; i < images.length; i++) {
        indexDictionary[images[i].getAttribute('data-src')] = i;
    } 
    return indexDictionary;
}
var indexDictionary = buildIndexDict();

function toggleSubmenus() {
    var currentPageSubmenu = currentPage + "-submenu"
    $(".submenu").each(function() {
        var id = "#" + $(this).attr('id')
        if (id == currentPageSubmenu &&  $(this).is(":hidden"))
            $(this).toggle(200);
        else if (id != currentPageSubmenu && $(this).is(":visible"))
            $(this).toggle(200);
    });
}

function getAllImageIndices() {
    var indices = new Array();
    for (i=0; i < images.length; i++) {
        indices.push(i);
    }
    return indices;
}

function getImageIndexFromSrc(src) {
    return indexDictionary[src];
}

function getCurrentImageIndices() {
    var currentImages = new Array();
    var col1 = $(currentPage).find(".col1").find('img:visible').toArray();
    var col2 = $(currentPage).find(".col2").find('img:visible').toArray();

    while (col1.length > 0 || col2.length > 0) {
        if (col1.length > 0)
            currentImages.push(col1.shift().getAttribute('data-src'));
        if (col2.length > 0)
            currentImages.push(col2.shift().getAttribute('data-src'));
    }

    var currentIndices = new Array();
    for (i=0; i < currentImages.length; i++) {
        currentIndices.push(indexDictionary[currentImages[i]]);
    }

    return currentIndices;
}
