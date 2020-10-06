

// lien vers API
const url = 'http://localhost:3000/api/cameras';




fetch(url + "/" + localStorage.getItem("idArticleSelectionne")).then(function(res){
    res.json().then(function(data){
        console.log(data);
    
        const article = document.getElementById("production")

           
// création des éléments
const section = document.createElement("section")
const produit= document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const image = document.createElement("img");
const name  = document.createElement("p");
const price = document.createElement("p");
const description = document.createElement("p");
const lienProduit = document.createElement("a");
const selection = document.createElement("select");
const label = document.createElement("label");
const br = document.createElement("br");
const formulaire = document.createElement("form");
const choix = document.createElement("input");
const firstoption = document.createElement("option");



//définition des attibuts
section.setAttribute("id","prod");
produit.setAttribute( "id","photo");
div2.setAttribute("id","cote");
image.setAttribute("src",data.imageUrl);
image.setAttribute("class","img");
selection.setAttribute("id","lentilles");
div3.setAttribute("type","button")
div3.setAttribute("id","bouton");
formulaire.setAttribute("name","form1");
formulaire.setAttribute("id","formu")
choix.setAttribute("type","submit");
choix.setAttribute("value","Ajouter au Panier");
firstoption.setAttribute("value","");




// affectation des données
description.textContent= data.description;
name.textContent = data.name;
price.textContent = data.price/100+"€";
lienProduit.textContent ="";
label.textContent = "Personalisez votre objectif :";



// affichage dans la page dans cet ordre. 
section.appendChild(produit);
produit.appendChild(image);
div2.appendChild(name);
div2.appendChild(price);
div2.appendChild(description);
div2.appendChild(lienProduit);
div2.appendChild(label);
div2.appendChild(br);
div2.appendChild(formulaire);
formulaire.appendChild(selection);
section.appendChild(div2);
article.appendChild(section);
article.appendChild(div3);
selection.appendChild(firstoption);
formulaire.appendChild(choix);

const selectionLentilles = document.getElementById("lentilles");


      data.lenses.forEach(objectif => {

         const option = document.createElement("option");
         selectionLentilles.appendChild(option);
         option.textContent=objectif;
         option.setAttribute("value",objectif);
     });


   


document.getElementById("lentilles").addEventListener("change",function (e){
console.log("type de lentille : " +e.target.value);
})

document.getElementById("lentilles").addEventListener("change",function (e){
localStorage.setItem("type de lentilles",e.target.value);});



choix.addEventListener("click",()=>{
    location.href="panier.html"
    event.preventDefault();
})


})


})
   
; 



