"use strict";
console.log('Hello from TypeScript!');
document.addEventListener("DOMContentLoaded", function (event) {
    // Initialize Event Handling
    buttons();
});
function buttons() {
    // Make sure there's only one button! There should be though.
    var button = document.querySelector("button");
    if (!(button instanceof HTMLButtonElement)) {
        console.log("Element is not a button: ", button);
        return;
    }
    var controller = new AbortController();
    button.addEventListener("click", function (event) {
        takeText();
        console.log("Click event on: ", event.target);
    });
}
function takeText() {
    console.log("takeText running!");
    var btitle = document.querySelector("#btitle");
    var quotes = document.querySelector("#quotes");
    var output = document.querySelector("#output");
    if (!(output instanceof HTMLParagraphElement)) {
        console.log("Element is not a p: ", output);
        return;
    }
    if (!(quotes instanceof HTMLTextAreaElement)) {
        console.log("Element is not an input: ", quotes);
        return;
    }
    if (!(btitle instanceof HTMLInputElement)) {
        console.log("Element is not an input: ", btitle);
        return;
    }
    console.log(quotes.innerHTML);
    output.innerText = reformatText(quotes.value, btitle.value);
}
function reformatText(str, title) {
    var rstr = str;
    var rightTitle = "<em>" + title + "</em>";
    console.log(rstr);
    //rstr = rstr.trimStart();
    rstr = rstr.replaceAll(". . . .", "&#08230;");
    rstr = rstr.replaceAll(". . .", "&#08230;");
    rstr = rstr.replaceAll("....", "&#08230;");
    rstr = rstr.replaceAll("...", "&#08230;");
    rstr = rstr.replaceAll(title, rightTitle);
    rstr = rstr.replaceAll(" - ", "&mdash;");
    console.log(rstr);
    return rstr;
}
