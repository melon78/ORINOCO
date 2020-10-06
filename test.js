

// lien vers API
const url = 'http://localhost:3000/api/cameras';


fetch(url + "/" +localStorage.getItem("idArticleSelectionne"))
.then((res)=> res.json())
.then((data) =>{  

    console.log(data);

    const article = document.getElementById("production")



    //création des éléments 
    const section = document.createElement("section");
    const produit= document.createElement("div");
    const formulaire = document.createElement("form");
    const selection = document.createElement("select");
    const choix = document.createElement("a");


    //définition des attibuts
    section.setAttribute("id","prod");
    formulaire.setAttribute("name","form1");
    selection.setAttribute("id","lentilles");
    choix.setAttribute("href","panier.html");
    

    choix.textContent = "Détail du produit"


    // affichage dans la page dans cet ordre.
   
    section.appendChild(formulaire);
    article.appendChild(section);
    formulaire.appendChild(selection);
    formulaire.appendChild(choix);

    choix.addEventListener("click",()=>{
        console.log("45");
    } )
});

