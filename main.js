const body = document.querySelector("body")
const container = document.querySelector(".container")
const textColor = document.querySelector(".text_color")
const colors = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
]

const randomColor = () => {
    let color = "#"
    for (let i = 0; i < 6; i++) {
        const randomNum = Math.trunc(Math.random() * colors.length)
        color += colors[randomNum]
    }
    return color
}

const changeColor = () => {
    const colorOne = randomColor()
    const colorTwo = randomColor()
    const randomDeg = Math.floor(Math.random() * 360)
    const bgColor = `linear-gradient(
        ${randomDeg}deg,
        ${colorOne},
        ${colorTwo}
    )
    `
    body.style.background = bgColor
    textColor.textContent = bgColor

}

changeColor()
container.addEventListener("click", changeColor)