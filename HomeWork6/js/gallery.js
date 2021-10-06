var small = ["img/small/s1.png", "img/small/s2.png", "img/small/s3.png", "img/small/s4.png"];

function initialize() {
    for(var image of small){
        var img = document.createElement("img");
        img.src = image;
        img.id = image.split('/')[2].split('.')[0];
        img.onclick = showBigImage;
        showImage('small', img);
    }
}


function showBigImage() {
    var bigImage = document.createElement("img");
    bigImage.src = "img/big/b" + this.id[1] + ".jpeg";
    bigImage.style.height='400px';
    bigImage.style.width='500px';
    showImage('big', bigImage);
}

function showImage(place, image){
    var div = document.getElementById(place);
    if (place == 'big'){
        while (div.firstChild){
            div.removeChild(div.firstChild);
        }
    }
    try {
        // image.onerror = function(){alert('картинка не существует')};
        image.onerror = function(){
            div.innerHTML = "<p>Картинка не существует!</p>"
        }
        image.onload = function(){
            div.append(image);
        };
    } catch (e){
        console.log("Картинка не существует")
    }
    
    
}

// initialize()

if (!("a" in window)) {
    var a =1;
}

console.log(a);
