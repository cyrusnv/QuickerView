console.log('Hello from TypeScript!');


document.addEventListener("DOMContentLoaded", (event) => {
    // Initialize Event Handling
    buttons();
});

function buttons() {
    // Make sure there's only one button! There should be though.
    const button = document.querySelector("button");
    if (!(button instanceof HTMLButtonElement)) {
        console.log("Element is not a button: ", button);
        return;
    }

    const controller = new AbortController();

    button.addEventListener("click", (event: MouseEvent) => {
        takeText();
        console.log("Click event on: ", event.target);
    });
}

function takeText() {

    console.log("takeText running!");

    const btitle = document.querySelector("#btitle");
    const quotes = document.querySelector("#quotes");
    const output = document.querySelector("#output");

    if (!(output instanceof HTMLParagraphElement)) {
        console.log("Element is not a p: ", output);
        return;
    }

    if (!(quotes instanceof HTMLInputElement)) {
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

function reformatText(str: string, title: string): string {
    let rstr = str;
    let rightTitle = "<em>" + title + "</em>";
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