

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
const choix = document.createElement("label");
const br = document.createElement("br");
const bouton = document.createElement("button")

//définition des attibuts
section.setAttribute("id","prod");
produit.setAttribute( "id","photo");
div2.setAttribute("id","cote");
image.setAttribute("src",data.imageUrl);
image.setAttribute("class","img");
selection.setAttribute("id","lentilles");
selection.setAttribute("name","lentilles");
div3.setAttribute("type","button")
div3.setAttribute("id","bouton");






// affectation des données
description.textContent= data.description;
name.textContent = data.name;
price.textContent = data.price/100+"€";
lienProduit.textContent ="";
choix.textContent = "Personalisez votre objectif :";
bouton.textContent = "Ajouter au panier";


// affichage dans la page dans cet ordre. 
section.appendChild(produit);
produit.appendChild(image);
div2.appendChild(name);
div2.appendChild(price);
div2.appendChild(description);
div2.appendChild(lienProduit);
div2.appendChild(choix);
div2.appendChild(br);
div2.appendChild(selection);
div3.appendChild(bouton);
section.appendChild(div2);
article.appendChild(section);
article.appendChild(div3);




const selectionLentilles = document.getElementById("lentilles");

    data.lenses.forEach(objectif =>{

    const option = document.createElement("option");
    selectionLentilles.appendChild(option);
    option.textContent= objectif;
    option.setAttribute("value","Type de lentilles")


    bouton.addEventListener("click",()=>{
        localStorage.setItem("idArticleSelectionne",data_id);
        location.href="panier.html";});

        
    bouton.addEventListener("click",()=>{
        localStorage.setItem("lentilles",option.textContent);
        location.href="panier.html";});

     

}); 


})
})


