function resetYear(page) {
    for (i=0; i < hidden.length; i++) {
        $(hidden[i]).show(300);
    }
    hidden = new Array();
    currentYear = ""
}

var hidden = new Array();
var currentYear = ""
function showYear(page, year) {
    // Show Grid
    if (currentPage == "#index") {
        showPage(page)
    }
    if (year == currentYear)
        return;
    if (currentYear != "") {
        return transitionYear(page, currentYear, year)
    }
    var pageChildren = $(page).find('img');
    for (i=0; i < pageChildren.length; i++) {
        var child = pageChildren[i];
        if (child.getAttribute('data-year') != year) {
            $(child).hide(350);
            hidden.push(child);
        }
    }
    currentYear = year;
}

function transitionYear(page, startYear, endYear) {
    var newhidden = new Array();
    var pageChildren = $(page).find('img');
    for (i=0; i < pageChildren.length; i++) {
        var child = pageChildren[i];
        if (child.getAttribute('data-year') == startYear) {
            $(child).hide(350);
            newhidden.push(child);
        }
    }
    for (i=0; i < hidden.length; i++) {
        if (hidden[i].getAttribute('data-year') == endYear) {
            $(hidden[i]).show(300);
        } else {
            $(hidden[i]).hide(350);
            newhidden.push(hidden[i])
        } 
    }
    hidden = newhidden;
    currentYear = endYear;
}