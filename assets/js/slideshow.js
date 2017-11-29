var currentIndex = null;
var galleryIndices = new Array();

var slideshow = document.getElementById("slideshow");
var description = document.getElementById("description");
var numToLoad = 3;

function slideshowWithOptions(startIndex, imageIndices) {
    lazyload(images);
    showIndex(startIndex);
    galleryIndices = imageIndices;
    currentIndex = startIndex;
}

function loadGalleryImages(numToLoad, currentIndex) {
    var sliceStart = currentIndex - (numToLoad/2)
    var sliceEnd = currentIndex + (numToLoad/2) + 1
    var imagesToLoad = images.slice(sliceStart, sliceEnd);
    lazyload(images);
}

function showIndex(imageIndex) {
    loadGalleryImages(numToLoad, currentIndex);

    $(images[currentIndex]).hide();
    $(images[imageIndex]).fadeIn(500);
    currentIndex = imageIndex;
    updateDescription(currentIndex);
}

function updateDescription(index) {
    var desc = images[index].getAttribute('data-desc');
     $(description).text(desc);
}

function next() {
    galleryIndex = (galleryIndices.indexOf(currentIndex) + 1) % galleryIndices.length
    nextIndex = galleryIndices[galleryIndex]
    showIndex(nextIndex)
}

function prev() {
    galleryIndex = galleryIndices.indexOf(currentIndex) - 1
    if (galleryIndex < 0)
        galleryIndex += galleryIndex + galleryIndices.length;
    prevIndex = galleryIndices[galleryIndex]
    showIndex(prevIndex)
}