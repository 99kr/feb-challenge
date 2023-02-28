const cardTemplate = document.querySelector("#card-template").content;

function createCard(title, description, imgSrc) {
	const card = cardTemplate.cloneNode(true);
	const cardTitle = card.querySelector(".card-title");
	const cardDescription = card.querySelector(".card-description");
	const cardImg = card.querySelector(".card-img");

	cardTitle.textContent = title;
	cardDescription.textContent = description;
	cardImg.src = imgSrc;

	document.querySelector(".cards").appendChild(card);
}

fetch("https://randomuser.me/api/?results=6&noinfo")
	.then((resp) => resp.json())
	.then((data) => {
		console.log(data);
		const users = data.results;
		for (let i = 0; i < users.length; i++) {
			const user = users[i];
			createCard(
				`${user.name.first} ${user.name.last}`,
				`${user.login.username} - pw: ${user.login.password}`,
				user.picture.large
			);
		}
	});
