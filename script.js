var listeArticle = [];
function ajouterArticle() {
	console.log("lancement ajouter article");
	var nomArticle = document.getElementById("nom").value;
	console.log("nom article:" + nomArticle);
	listeArticle.push(nomArticle);
	console.log(listeArticle);
	creeListeArticle();
}
function creeListeArticle() {
	var divListeArticle = document.getElementById("listeArticle");
	var articlesHTML = "";
	var i = 0;
	for (i in listeArticle) {
		var article = listeArticle[i];
		articlesHTML = articlesHTML
				+ "<TR><TD>"
				+ article
				+ "</TD><TD><button class=\"btn btn-danger\" onclick=\"supprArticle("
				+ i + ")\">X</button></TD></TR>";
	}
	console.log(articlesHTML);
	divListeArticle.innerHTML = articlesHTML;
}
function supprArticle(numArticle) {
	listeArticle.splice(numArticle, 1);
	creeListeArticle();
}
function sauv(e) {
	localStorage.setItem("listeArticle", JSON.stringify(listeArticle));
}
window.onbeforeunload = sauv;
window.onload = charger;
function charger() {
	if (localStorage.getItem("listeArticle") !== null) {
		listeArticle = JSON.parse(localStorage.getItem("listeArticle"));
	}
	creeListeArticle();
}