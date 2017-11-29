var currentIndex = 0;
var images = new Array();
var submenuIndices = new Array();

var slideshow = document.getElementById("slideshow");
var description = document.getElementById("description");

var indexDictionary = {};

function startSlideshow(startIndex) {
    slideshow = document.getElementById("slideshow");
    while (slideshow.firstChild) {
        var image = slideshow.removeChild(slideshow.firstChild);
        $(image).hide()
        if (image.tagName == "IMG")
            images.push(image);
        
    }
    updateDescription(images[startIndex]);
    switchToIndex(startIndex, submenuIndices);
}

function switchToIndex(imageIndex, indices) {
    if (slideshow.firstChild) {
        updateDescription(images[imageIndex]);
        $(images[imageIndex]).hide().fadeOut(500);
        slideshow.removeChild(slideshow.firstChild)
    }
    slideshow.appendChild(images[imageIndex])
    $(images[imageIndex]).hide().fadeIn(500);
    currentIndex = imageIndex;
    submenuIndices = indices;
}

function updateDescription(imageElement) {
    var imageDesc = imageElement.getAttribute('data-desc')
     $(description).text(imageDesc);
}

function next() {
    if (submenuIndices.length > 0) {
        submenuIndex = (submenuIndices.indexOf(currentIndex) + 1) % submenuIndices.length
        nextIndex = submenuIndices[submenuIndex];
    } else {
        nextIndex = (currentIndex + 1) % images.length;
    }
    switchToIndex(nextIndex, submenuIndices)
}

function prev() {
    if (submenuIndices.length > 0) {
        prevIndex = submenuIndices.indexOf(currentIndex) - 1
        if (prevIndex < 0)
            prevIndex += prevIndex + submenuIndices.length;
    } else {
        prevIndex = currentIndex - 1;
        if (prevIndex < 0) 
            prevIndex += images.length;
    }
    switchToIndex(prevIndex, submenuIndices)
}

function buildIndexDict() {
    for (i = 0; i < images.length; i++) {
        indexDictionary[images[i].getAttribute('src')] = i;
    } 

}