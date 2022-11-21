const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/blackjack-image.jpg") {
        myImage.setAttribute("src", "images/skyline.jpg");
        myImage.setAttribute("alt", "Austin Skyline")
    } else {
        myImage.setAttribute("src", "images/blackjack-image.jpg");
    }
};

let myButton = document.querySelector("button");
myButton.onclick = () => {
    setUserName();
};
let myHeading = document.querySelector("h1");

let storedName = localStorage.getItem("name");

alert(storedName)

if (!storedName) {
    setUserName();
} else {
    storedName = localStorage.getItem("name");
}
myHeading.textContent = `Mozilla is cool, ${storedName}`;

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName()
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
    
}