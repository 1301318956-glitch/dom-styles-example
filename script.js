console.log("Script started");

function changeStyle() {
    console.log("click");

    // Get the p element and store it in a variable
    let p = document.getElementByIdment("text");
    p.innerText = "The text has been changed";

    // Set some styles
    p.style.color = "red";
    p.style.fontSize = "50px";
    p.style.textAlign = "center";
    p.style.backgroundColor = "cornflowerblue";
}