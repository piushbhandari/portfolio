/** Stop referrer Phishing hack + ADA */

(function () {
	const newTabAnchors = [
		...document.querySelectorAll("a[target=_blank], a[target=new]"),
	];

	if (newTabAnchors.length !== 0) {
		newTabAnchors.forEach((newTabAnchor) => {
			newTabAnchor.setAttribute("rel", "noopener noreferrer");

			const newElement = document.createElement("span");
			newElement.setAttribute("class", "visually-hidden");
			newElement.innerHTML = "(Opens in a new window)";

			newTabAnchor.appendChild(newElement);
		});
	}
})();
