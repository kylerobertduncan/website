const navList = document.querySelector(".navList");
function showMenu() {
  navList.classList.toggle("show");
  document.querySelector(".contactList").classList.toggle("show");
}

const sections = document.querySelectorAll("section");
sections.forEach(s => {
  const li = document.createElement("li");
  
  const button = document.createElement("button");
  button.innerText = s.className.replaceAll("-", " ");

  li.appendChild(button);
  navList.appendChild(li);

  button.addEventListener("click", () => {
    showMenu();
    setTimeout(() => {
      s.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }, 500);
  });
})

const contactButton = document.querySelector(".contactButton");
const navButton = document.querySelector(".navButton");
contactButton.addEventListener("click", showMenu);
navButton.addEventListener("click", showMenu);

function goToSection(name) {
  const s = document.querySelector(`.${name}`);
  s.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
}
const links = document.querySelectorAll(".link");
links.forEach(l => {
  l.addEventListener("click", () => {
      goToSection(l.innerText.replaceAll(" ", "-"));
  });
});
