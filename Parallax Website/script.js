let title = document.querySelector(".title");
let wrapper = document.querySelector(".wrapper");
let left = document.getElementById("side-1");
let right = document.getElementById("side-2");
wrapper.addEventListener("scroll", () => {
  let scrollPosition = wrapper.scrollTop*0.5;
  title.style.transform = `translateY(-${scrollPosition}px) translateX(-50%)`;
  right.style.transform = `translateX(${scrollPosition}px)`;
  left.style.transform = `translateX(-${scrollPosition}px)`;
});
