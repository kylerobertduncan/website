const navList = document.querySelector(".navList")
function showMenu() {
  navList.classList.toggle("show")
  document.querySelector(".contactList").classList.toggle("show")
}

const sections = document.querySelectorAll("section")
sections.forEach((s) => {
  if (s.className.includes("hero")) return
  const li = document.createElement("li")

  const button = document.createElement("button")
  button.innerText = s.className.replaceAll("-", " ")

  li.appendChild(button)
  navList.appendChild(li)

  button.addEventListener("click", () => {
    if (navList.className.includes("show")) showMenu()
    setTimeout(() => {
      s.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
      })
    }, 500)
  })
})

const contactButton = document.querySelector(".contactButton")
const navButton = document.querySelector(".navButton")
contactButton.addEventListener("click", showMenu)
navButton.addEventListener("click", showMenu)

document.addEventListener("click", (event) => {
  const isClickInside =
    navList.contains(event.target) ||
    event.target.classList.contains("navButton") ||
    event.target.classList.contains("contactButton")
  if (!isClickInside && navList.classList.contains("show")) {
    showMenu()
  }
})

function goToSection(name) {
  const s = document.querySelector(`.${name}`)
  s.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start"
  })
}

const links = document.querySelectorAll(".link")
links.forEach((l) => {
  l.ariaLabel = `Go to ${l} section`
  l.tabIndex = 0
  l.addEventListener("click", () => {
    goToSection(l.innerText.replaceAll(" ", "-"))
  })
})
