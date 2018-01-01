
function query() {
    // var searchWord = "x" + document.getElementById("text").value + "x";
    console.log("dasf");
    var searchWord = document.getElementById("inputtext").value;
    console.log(searchWord);
    var xhr = new XMLHttpRequest();
    //xhr.open('GET', 'https://api.unsplash.com/search/photos?page=1&query=' + searchWord + '+&client_id=de1f8c5683779bffc967130fe47d4cdfd75bf8cc2bfc0e550df44e8dc2ee5c47');
    xhr.open('GET', 'https://api.unsplash.com/search/photos?page=1&query=' + searchWord + '+&client_id=e71e4ad73bad44ff5c2a8d1b6e674e59aa8a64a01b1bd49dfa61872149e47c3d');
    xhr.onload = function () {
        var ourdata = JSON.parse(xhr.responseText);
        console.log("1111");
        console.log(ourdata);
        renderOutputHtml(ourdata);
    };
    xhr.send();
}
function renderOutputHtml(ourdata) {
    var results = ourdata["results"];
    var htmlstring = "";
    for (var i= 0; i < 10;i++){
        htmlstring += "<img src=" + results[i]["urls"]["small"] + " style='padding:10px 10px 10px 10px'>";
        
    }
    $("#list").append(htmlstring);
}

function main() {
    
    $('#search').click(query());
}
$(document).ready(main);