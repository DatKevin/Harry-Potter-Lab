

let container = document.querySelector("#container")
console.log(container)

let h1 = document.createElement("h1")
console.log(h1)
h1.innerText = "Hogwarts"
container.append(h1)

let h2 = document.createElement("h2")
h2.innerText = "Dat"
container.append(h2)

let h3 = document.createElement("h3")
h3.innerText = "Hufflepuff"
container.append(h3)

let h4 = document.createElement("h4")
h4.className = "badger"
h4.innerText = "Tyko"
container.append(h4)

let wand = document.createElement("h4")
wand.innerText = "Birch Wand with Pheonix Feather Core"
container.append(wand)