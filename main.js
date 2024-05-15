function buyvinyl() {
    alert("Music pre-ordered! Come back at a later date to pick it up!")
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

    // download book.pdf to the user's computer
    alert("Book purchased! Check your downloads folder for the PDF!")
}   