const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "red";
    myBox.textContent = "Reagan Otieno";
    myBox.style.color = "black";
    myBox.style.fontFamily = "verdana";
    myBox.style.fontStyle = "italic";
    myBox.style.font = "bold";
    myBox.style.fontSize = "3rem";
});

myBtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "green";
    myBox.textContent = "I'm 21yrs Old";
    myBox.style.color = "blue";
    myBox.style.fontFamily = "monospace";
    myBox.style.font = "2rem";
});
myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "I'm Single😎";
    myBox.style.color = "red";
    myBox.style.font = "2.5rem";
});