const readButton = document.querySelector(".read-button");

readButton.addEventListener("click", () => {
	const allUnreadNotification = document.querySelectorAll(".unread");
	const redDot = document.querySelectorAll(".red-dot");
	const notifNumber = document.querySelector("body > main > div > h1 > span");

	notifNumber.remove();

	allUnreadNotification.forEach((notif)=> {
		notif.style.backgroundColor = "#fff";
	})

	redDot.forEach((dot) => {
		dot.remove()
	})
	console.log(allUnreadNotification)
})