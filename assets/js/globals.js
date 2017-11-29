var pages = {};
var currentPage = "#index";

var currentIndex = 0;
var submenuIndices = new Array();

var hidden = new Array();
var currentYear = "";


function getImages() {
    return $("#slideshow").find("img");
}
var images = getImages();

function buildIndexDict() {
    var indexDictionary = {}
    for (i = 0; i < images.length; i++) {
        indexDictionary[images[i].getAttribute('src')] = i;
    } 
    return indexDictionary;
}
var indexDictionary = buildIndexDict();

function getCurrentImageIndices() {
    var currentImages = new Array();
    var col1 = $(currentPage).find(".col1").find('img');
    var col2 = $(currentPage).find(".col2").find('img');

    for (i=0; i < col1.length; i++) {
        currentImages.push(col1[i].getAttribute('src'));
    }
    for (i=0; i < col2.length; i++) {
        currentImages.push(col2[i].getAttribute('src'));
    }

    var currentIndices = new Array();
    for (i=0; i < currentImages.length; i++) {
        currentIndices.push(indexDictionary[currentImages[i]]);
    }

    return currentIndices;
}
