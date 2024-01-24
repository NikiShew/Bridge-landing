window.addEventListener('scroll', scrolles)
function scrolles() {
	if (this.scrollY >= 6900) {
		total(one, 100, 24, oneBlock, 1)
		total(two, 6, 980, twoBlock)
		total(three, 15, 920, threeBlock)
	}
}

let one = 10
let two = 80
let three = 80

let oneBlock = document.querySelector('.one')
let twoBlock = document.querySelector('.two')
let threeBlock = document.querySelector('.three')

function total(elem, sek, coins, block, added) {
	added = coins / elem
	let interval = setInterval(() => {
		if (Math.round(elem) == coins) {
			window.removeEventListener('scroll', scrolles)
			clearInterval(interval)
		} else {
			elem += Math.round(added)
			block.innerHTML = elem
		}
	}, sek)
}
