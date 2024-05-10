// declare var document: any;
var input = document.getElementById("input");
var btn = document.querySelector(".btn");
var showContent = document.querySelector(".show-here");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function (e) {
    btn.textContent = input.value;
});
var show = document.querySelector(".show");
console.log(show.innerText, show.textContent, (show.textContent = "HMMMM"));
