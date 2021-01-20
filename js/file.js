document.querySelector(".menu").addEventListener("click", function () {
    'use strict';
    document.querySelector(".links").classList.add("open");
});
document.querySelector(".links i").addEventListener("click", function() {
    this.parentElement.classList.remove("open");
});
window.onscroll = function () {
    document.querySelector(".navbar").classList.add("fixed");
    if(window.scrollY === 0) {
        document.querySelector(".navbar").classList.remove("fixed");
    }
}
let mySpan = document.getElementById("span-click1");
let myParagraph = document.querySelector(".paragraph1");
//mySpan.onclick = readmore(mySpan, myParagraph);
mySpan.onclick = function  () {
    if(mySpan.className === "read-more") {
        myParagraph.style.display = "block";
        mySpan.classList.remove("read-more");
        mySpan.classList.add("read-less");
        mySpan.textContent = "[Read Less...]";
    } else {
        myParagraph.style.display = "none";
        mySpan.classList.remove("read-less");
        mySpan.classList.add("read-more");
        mySpan.textContent = "[Read More...]";
    }
};
let mySpan2 = document.getElementById("span-click2");
let myParagraph2 = document.querySelector(".paragraph2");
//mySpan.onclick = readmore(mySpan, myParagraph);
mySpan2.onclick = function  () {
    if(mySpan2.className === "read-more") {
        myParagraph2.style.display = "block";
        mySpan2.classList.remove("read-more");
        mySpan2.classList.add("read-less");
        mySpan2.textContent = "[Read Less...]";
    } else {
        myParagraph2.style.display = "none";
        mySpan2.classList.remove("read-less");
        mySpan2.classList.add("read-more");
        mySpan2.textContent = "[Read More...]";
    }
};
let myBox = document.querySelector(".gellary .flex-cont");
let li1 = document.querySelector(".first");
let li2 = document.querySelector(".second");
li2.addEventListener("click", function () {
    myBox.classList.remove("trans1");
    myBox.classList.add("trans2");
});
li1.addEventListener("click", function () {
    myBox.classList.remove("trans2");
    myBox.classList.add("trans1");
});

