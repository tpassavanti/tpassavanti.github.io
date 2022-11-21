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
let myHeading = document.getElementById("welcome");

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}!`;
  }


function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName()
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome, ${myName}!`;
    }
    
}