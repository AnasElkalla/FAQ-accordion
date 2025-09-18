// const arr = [1, 2, 3, 4];
const one = document.querySelector(".answer_1");
const two = document.querySelector(".answer_2");
const three = document.querySelector(".answer_3");
const four = document.querySelector(".answer_4");
const arr = [one, two, three, four];
const sections = document.querySelectorAll("section img");

sections.forEach((section, i) => {
  section.addEventListener("click", () => {
    if (arr[i].querySelector("p").classList.contains("hidden")) {
      arr.forEach((el) => {
        el.querySelector("p").classList.add("hidden");
      });
      sections.forEach((img) => {
        img.src = "./assets/images/icon-plus.svg";
      });
      arr[i].querySelector("p").classList.toggle("hidden");
      section.src = "./assets/images/icon-minus.svg";
    } else {
      arr.forEach((el) => {
        el.querySelector("p").classList.add("hidden");
      });
      sections.forEach((img) => {
        img.src = "./assets/images/icon-plus.svg";
      });
    }
  });
});
