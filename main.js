function buyvinyl() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "accuracyv1.wav", true);
    xhr.responseType = "blob";
    xhr.onload = function() {
        var urlCreator = window.URL || window.webkitURL;
        var wavUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = wavUrl;
        tag.download = "accuracyv1.wav";
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();

    alert("Music purchased! Check your downloads folder for the WAV file!")
}

function buybook() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "book.pdf", true);
    xhr.responseType = "blob";
    xhr.onload = function() {
        var urlCreator = window.URL || window.webkitURL;
        var pdfUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = pdfUrl;
        tag.download = "book.pdf";
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();

    alert("Book purchased! Check your downloads folder for the PDF!")
}   

function buyalbum() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "ACCURACY IS DEAD.zip", true);
    xhr.responseType = "blob";
    xhr.onload = function() {
        var urlCreator = window.URL || window.webkitURL;
        var zipUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = zipUrl;
        tag.download = "ACCURACY IS DEAD.zip";
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();

    alert("Album purchased! Check your downloads folder for the ZIP file!")
}