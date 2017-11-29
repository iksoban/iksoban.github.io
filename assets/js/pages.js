var pages = {};
var currentPage = "#index";

function initIndex() {
    $("#paintings").hide();
    $("#drawings").hide();
    $("#about").hide();
}
initIndex();

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

function getCurrentImageIndices() {
    var currentImages = new Array();
    var pageChildren = $(currentPage).find('img');
    for (i=0; i < pageChildren.length; i++) {
        currentImages.push(pageChildren[i].getAttribute('src'))
    }

    var currentIndices = new Array();
    for (i=0; i < currentImages.length; i++) {
        currentIndices.push(indexDictionary[currentImages[i]])
    }

    return sortIndices(currentIndices)
}

function sortIndices(indices) {
    var sorted = new Array();
    for (i=0, j=indices.length/2; j < indices.length; i++, j++) {
        sorted.push(indices[i]);
        sorted.push(indices[j]);
    }
    return sorted;
}

function showPage(page) {
    // Reset Years
    resetYear();
    
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