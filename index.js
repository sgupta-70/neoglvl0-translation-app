var inputBox = document.querySelector("#input-box");
var btnTranslate = document.querySelector("#btn-translate");
var outputBox = document.querySelector("#output-box");

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with server! Try again after some time")
}

function clickHandler() {
    var inputTxt = inputBox.value;
    fetch(getTranslationURL(inputTxt))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputBox.innerText = translatedText; 
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);

