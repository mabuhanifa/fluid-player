const input = document.getElementById("input");
const btn = document.getElementById("btn");
const src = document.getElementById("source");
const video = document.getElementById("video-id");

video.style.display = "none";

btn.addEventListener("click", () => {
  src.src = input.value;
  video.style.display = "block";
  console.log(src.src, "input",input.value);
});
