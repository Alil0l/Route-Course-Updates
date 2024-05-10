// declare var document: any;

const input = document.getElementById("input") as HTMLInputElement;
const btn = document.querySelector(".btn") as HTMLInputElement;
const showContent = document.querySelector(".show-here") as HTMLInputElement;

btn?.addEventListener("click", (e) => {
  btn.textContent = input.value;
});
const show = document.querySelector(".show") as HTMLInputElement;
console.log(show.innerText, show.textContent, (show.textContent = "HMMMM"));
