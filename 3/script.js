const cardTemplate = document.querySelector("#card-template").content;

for (let i = 0; i < 6; i++) {
	const card = cardTemplate.cloneNode(true);
	const cardTitle = card.querySelector(".card-title");
	const cardDescription = card.querySelector(".card-description");
	const cardImg = card.querySelector(".card-img");

	cardTitle.textContent = `Card ${i + 1}`;
	cardDescription.textContent = `This is card number ${i + 1}. very cool!`;
	cardImg.src = `https://picsum.photos/200/300?random=${i + 1}`;

	document.querySelector(".cards").appendChild(card);
}
