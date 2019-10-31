

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

let storage = document.createElement("ul")
storage.setAttribute("storage", "trunk")
container.append(storage)

for (let i = 1; i <= 6; i++) {
	let listitem = document.createElement("li")
	listitem.innerText = ""
	storage.append(listitem)
}

document.querySelectorAll("li")[0].innerText = "Butterbeer"
document.querySelectorAll("li")[1].innerText = "Invisibility Cloak"
document.querySelectorAll("li")[2].innerText = "Magic Map"
document.querySelectorAll("li")[3].innerText = "Time Turner"
document.querySelectorAll("li")[4].innerText = "Leash"
document.querySelectorAll("li")[5].innerText = "Bertie Bott's Every Flavor [Jelly] Beans."

for (let i = 1; i <= 3; i++) {
	document.querySelectorAll("li")[i].className = "secret"
}

document.querySelectorAll("li")[4].className = "badger"

container.removeChild(wand)
storage.removeChild(document.querySelectorAll("li")[0])
let newWand = document.createElement("h4")
newWand.innerText = "Holly wand with Dragon Heartstring Core"
container.insertBefore(newWand, storage)
newWand.style.color = "indigo"

container.removeChild(h4)
storage.insertBefore(h4, document.querySelectorAll("li")[3])
storage.removeChild(h4)
container.insertBefore(h4, newWand)

let reappear = function() {
	for (let i = 0; i <= 2; i++) {
		let secret =  document.querySelectorAll(".secret")[i]
		secret.style.transition = "0.8s"
		secret.style.opacity = 0.5
	}
}
setTimeout(reappear, 2000)
let leash = document.querySelectorAll(".badger")[1]
leash.classList.add("cabbage")
leash.classList.remove("cabbage")

let semester = document.querySelector("caption")
semester.innerText = "Fall 2018"

storage.prepend(document.createElement("li"))
document.querySelectorAll("li")[0].innerText = "Butterbeer"
storage.setAttribute("storage","chest")