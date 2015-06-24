var listeArticle = [];
function ajouterArticle() {
	console.log("lancement ajouter article");
	var nomArticle = document.getElementById("nom").value;
	if (nomArticle == "") {
		alert("Pas d'article");
		return;
	}
	var nombreArticle = document.getElementById("nombre").value;
	console.log("nom article:" + nomArticle + "nombre" + nombreArticle);
	var unArticle = {};
	unArticle.nom = nomArticle;
	unArticle.nombre = nombreArticle;
	listeArticle.push(unArticle);
	console.log(listeArticle);
	creeListeArticle();
}
function creeListeArticle() {
	var divListeArticle = document.getElementById("listeArticle");
	var articlesHTML = "<tr><th>Article</th><th>Quantite</th><th></th><th>Supprimer</th></tr>";
	var i = 0;
	for (i in listeArticle) {
		var article = listeArticle[i];
		var imageHTML = "<img class=\"petiteImage\" src=\"image/"+article.nom+".jpg\">";
		articlesHTML = articlesHTML
				+ "<TR><TD>"
				+ article.nom
				+ "</TD><TD>"
				+ article.nombre
				+ "</TD><TD>"+imageHTML+"</TD><TD><button class=\"btn btn-danger\" onclick=\"supprArticle("
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
function positif() {
	var input = document.getElementById("nombre");
	var nombre = input.value;
	console.log(nombre);
	nombre++;
	input.value = nombre;
}
function negatif() {
	var input = document.getElementById("nombre");
	var nombre = input.value;
	console.log(nombre);
	nombre--;

	if (nombre < 1) {
		nombre = 1;
	}
	input.value = nombre;
}
function afficherImage(){
	var value = document.getElementById("nom").value;
	console.log("afficherImage"+value);
	var imageHTML = "<img class=\"grandeImage\" src=\"image/"+value+".jpg\">"; 
	var divafficherImage = document.getElementById("image");
	divafficherImage.innerHTML = imageHTML;
}