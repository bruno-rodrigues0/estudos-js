const html = [...document.querySelectorAll(".curso")]

html.map(el => el.addEventListener("click", (event) => {
    const item = event.target
    item.classList.toggle("strong")
}))