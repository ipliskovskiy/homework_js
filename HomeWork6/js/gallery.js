var small = ["img/small/s1.png", "img/small/s2.png", "img/small/s3.png", "img/small/s4.png"];
var big = ["img/big/b1.jpeg", "img/big/b1.jpeg", "img/big/b1.jpeg"];

function initialize() {
    for(var image of small){
        var img = document.createElement("img");
        img.src = image;
        img.onclick = showBigImage;
        showImage('small', img);
    }
}


function showBigImage(e) {
    var bigImage = document.createElement("img");
    bigImage.src = "img/big/b1.jpeg";
    showImage('big', bigImage);
}

function showImage(place, image){
    var div = document.getElementById(place);
    div.append(image);
}

initialize()