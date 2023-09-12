const sections = document.querySelectorAll("section");

const navList = document.querySelector(".navList");


function showMenu() {
  navList.classList.toggle("show");
  document.querySelector(".contactList").classList.toggle("show");
}

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
