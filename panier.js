

// lien vers API
const url = 'http://localhost:3000/api/cameras';


fetch(url + "/" +localStorage.getItem("idArticleSelectionne"))
.then((res)=> res.json())
.then((data) =>{  


    const article = document.getElementById("production")
    




    // création des éléments
    const section1 = document.createElement("section");
    const section2 = document.createElement("section");
    const name  = document.createElement("h2");
    const image = document.createElement("img");
    const description = document.createElement("p");
    const formulaire = document.createElement("form")
    const nomp =document.createElement("p");
    const nom = document.createElement("label");
    const nomtext= document.createElement("input");
    const prenomp =document.createElement("p");
    const prenom = document.createElement("label");
    const prenomtext = document.createElement("input");
    const adressep =document.createElement("p");
    const adresse = document.createElement("label");
    const adressetext = document.createElement("input");
    const villep =document.createElement("p");
    const ville = document.createElement("label");
    const villetext = document.createElement("input");
    const codep =document.createElement("p");
    const code = document.createElement("label");
    const codetext = document.createElement("input");
    const mailp =document.createElement("p");
    const mail = document.createElement("label");
    const mailtext = document.createElement("input");
    const valid = document.createElement("input");
    const annule = document.createElement("input");



    // affectation des attributs 
   
    image.setAttribute("src",data.imageUrl);
    image.setAttribute("class","img");
    nom.setAttribute("for","nom");
    nomtext.setAttribute("type","text");
    nomtext.setAttribute("name","nom");
    nomtext.setAttribute("id","required");
    prenom.setAttribute("for","prénom");
    prenomtext.setAttribute("type","text");
    prenomtext.setAttribute("name","prénom");
    prenomtext.setAttribute("id","required");
    adresse.setAttribute("for","adresse");
    adressetext.setAttribute("type","text");
    adressetext.setAttribute("name","adresse");
    adressetext.setAttribute("id","required");
    ville.setAttribute("for","ville");
    villetext.setAttribute("type","text");
    villetext.setAttribute("name","ville");
    villetext.setAttribute("id","required");
    code.setAttribute("for","code");
    codetext.setAttribute("type","text");
    codetext.setAttribute("name","code");
    codetext.setAttribute("id","required");
    mail.setAttribute("for","mail");
    mailtext.setAttribute("type","text");
    mailtext.setAttribute("name","mail");
    mailtext.setAttribute("id","required");
    valid.setAttribute("type","submit");
    annule.setAttribute("type","reset");


    // affectation des données

    name.textContent = data.name;
    description.textContent= data.description;
    nom.textContent ="Nom : ";
    prenom.textContent ="Prénom : ";
    adresse.textContent = "Adresse : ";
    ville.textContent = "ville : ";
    code.textContent = "Code postal : ";
    mail.textContent = "Courriel : ";


    // incrémentation des éléments dans la page 
    section1.appendChild(name);
    section1.appendChild(image);
    section1.appendChild(description);
    article.appendChild(section1);
    nomp.appendChild(nom);
    nomp.appendChild(nomtext);
    formulaire.appendChild(nomp);
    prenomp.appendChild(prenom);
    prenomp.appendChild(prenomtext);
    formulaire.appendChild(prenomp);
    adressep.appendChild(adresse);
    adressep.appendChild(adressetext);
    formulaire.appendChild(adressep);
    villep.appendChild(ville);
    villep.appendChild(villetext);
    formulaire.appendChild(villep);
    codep.appendChild(code);
    codep.appendChild(codetext);
    formulaire.appendChild(codep);
    mailp.appendChild(mail);
    mailp.appendChild(mailtext);
    formulaire.appendChild(mailp);
    formulaire.appendChild(valid);
    formulaire.appendChild(annule);
    section2.appendChild(formulaire);
    article.appendChild(section2);
    
   






});

