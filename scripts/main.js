
const myBtn = document.querySelector('button');
const myHeading = document.querySelector('h1');
const myImage = document.querySelector('img');

function setUserName() {
    const myName = prompt('Enter your name');
    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem('user', myName);
        myHeading.textContent = `Bike is cool ${myName}`;
    }
}

myBtn.onclick = () => {
    setUserName();
}

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === 'images/bikers-logo.png'){
        myImage.setAttribute("src", "images/bikers-logo1.png")
    }
    else{
        myImage.setAttribute("src", "images/bikers-logo.png")
    }
}

