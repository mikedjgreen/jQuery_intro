const baseURL = "https://ci-swapi.herokuapp.com/api/";
var xhr = new XMLHttpRequest();
var data;

xhr.open("GET",baseURL);

xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("data").innerHTML = this.responseText;
        data = JSON.parse(this.responseText);
        console.log(data);
    } 
};

setTimeout( function(){console.log(data);},500);