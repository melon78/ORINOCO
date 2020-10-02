
// lien vers API
const url = 'http://localhost:3000/api/cameras';


fetch(url)
.then((res)=> res.json())
.then((data) =>{  


const article = document.getElementById("production")

data.forEach(data => 
{
    
// création des éléments
const section = document.createElement("section")
const produit= document.createElement("div");
const div2 = document.createElement("div");
const image = document.createElement("img");
const name  = document.createElement("p");
const price = document.createElement("p");
const lienProduit = document.createElement("a");


//définition des attibuts
section.setAttribute("id","prod");
produit.setAttribute( "id","photo");
div2.setAttribute("id","cote");
image.setAttribute("src",data.imageUrl);
image.setAttribute("class","img");
lienProduit.setAttribute("href","camera.html");

// affectation des données
name.textContent = data.name;
price.textContent = data.price/100+"€";
lienProduit.textContent = "Détail du produit"


// affichage dans la page dans cet ordre. 
section.appendChild(produit);
produit.appendChild(image);
div2.appendChild(name);
div2.appendChild(price);
div2.appendChild(lienProduit);
section.appendChild(div2);
article.appendChild(section);


console.log(data._id);


    lienProduit.addEventListener("click",()=>{
    localStorage.setItem("idArticleSelectionne",data._id);
    location.href="camera.html";});
    

});

    });