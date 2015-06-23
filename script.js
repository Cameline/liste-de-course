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
	var articles = "";
	var i = 0;
	for (i in listeArticle) {
		var article = listeArticle[i];
		articles = articles + article + " <button onclick=\"supprArticle(" + i
				+ ")\">X</button> <br>";
	}
	console.log(articles);
	divListeArticle.innerHTML = articles;
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