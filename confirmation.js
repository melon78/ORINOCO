

// lien vers API
const url = 'http://localhost:3000/api/cameras';


fetch(url + "/" +localStorage.getItem("panier"))
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
    const prix = document.createElement("p");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div2");
    const table = document.createElement("table");
    const trtable = document.createElement("tr");
    const trtable2= document.createElement("tr");
    const tdtable = document.createElement("td");
    const tdtable2= document.createElement("td");
    const tdtable3= document.createElement("td");
    const tdtable4 = document.createElement("td");
    const tdtable5= document.createElement("td");
    const tdtable6= document.createElement("td");
    const tdtable7= document.createElement("td");
    const tdtable8= document.createElement("td");
    const quantite = document.createElement("input");
    



    // affectation des attributs 
   
    image.setAttribute("src",data.imageUrl);
    image.setAttribute("class","img");
    nom.setAttribute("for","nom");
    nomtext.setAttribute("type","text");
    nomtext.setAttribute("name","nom");
    nomtext.setAttribute("required","required");
    nomtext.setAttribute("id","nom");
    nomtext.setAttribute("value","");
    prenom.setAttribute("for","prénom");
    prenomtext.setAttribute("type","text");
    prenomtext.setAttribute("name","prénom");
    prenomtext.setAttribute("required","required");
    prenomtext.setAttribute("id","prenom");
    adresse.setAttribute("for","adresse");
    adressetext.setAttribute("type","text");
    adressetext.setAttribute("name","adresse");
    adressetext.setAttribute("required","required");
    adressetext.setAttribute("id","adresse");
    ville.setAttribute("for","ville");
    villetext.setAttribute("type","text");
    villetext.setAttribute("name","ville");
    villetext.setAttribute("required","required");
    villetext.setAttribute("id","ville");
    code.setAttribute("for","code");
    codetext.setAttribute("type","text");
    codetext.setAttribute("name","code");
    codetext.setAttribute("required","required");
    codetext.setAttribute("pattern","[0-9]{5}");
    codetext.setAttribute("id","code");
    mail.setAttribute("for","mail");
    mailtext.setAttribute("type","email");
    mailtext.setAttribute("name","mail");
    mailtext.setAttribute("required","required");
    mailtext.setAttribute("placeholder","toto@exemple.com");
    mailtext.setAttribute("id","mail");
    valid.setAttribute("type","submit");
    annule.setAttribute("type","reset");
    formulaire.setAttribute("id","myForm");
    section1.setAttribute("id","bloc1");
    quantite.setAttribute("type","number");
    quantite.setAttribute("oninput","")
    quantite.setAttribute("id","nombre");
    quantite.setAttribute("min","1");
    quantite.setAttribute("max","5");
    tdtable8.setAttribute("id","totalprix");
    table.setAttribute("id","tableau");
    tdtable4.setAttribute("id","modele");
    tdtable5.setAttribute("id","quant");

    // affectation des données

    name.textContent = data.ville;
    description.textContent= data.description;
    nom.textContent ="Nom : ";
    prenom.textContent ="Prénom : ";
    adresse.textContent = "Adresse : ";
    ville.textContent = "ville : ";
    code.textContent = "Code postal (ex 75100): ";
    mail.textContent = "Courriel : ";
    prix.textContent = data.price/100+"€";
    tdtable.textContent = "MODELE";
    tdtable2.textContent = "QUANTITE";
    tdtable3.textContent = "PRIX UNITAIRE";
    tdtable4.textContent = data.name;
    tdtable6.textContent = data.price/100+" €";
    tdtable7.textContent = "TOTAL";
    //tdtable8.textContent = "0.00 €";
    

 
    

    // incrémentation des éléments dans la page 

    //div1.appendChild(name);
    //div1.appendChild(image);
    //div1.appendChild(description);
    //div1.appendChild(prix);
   // tdtable3.appendChild();
    trtable.appendChild(tdtable);
    trtable.appendChild(tdtable2);
    trtable.appendChild(tdtable3);
    trtable.appendChild(tdtable7);
    table.appendChild(trtable);
    
    trtable2.appendChild(tdtable4);
    trtable2.appendChild(tdtable5);
    tdtable5.appendChild(quantite);
    trtable2.appendChild(tdtable6);
    trtable2.appendChild(tdtable8);
    table.appendChild(trtable2);
    div1.appendChild(table);
    section1.appendChild(div1);
    section1.appendChild(div2);
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
   

    // stock la quantité sélecntionnée
    document.getElementById("nombre").addEventListener("change",function (e){
    localStorage.setItem("quantité",e.target.value);}); 

        
    // calcul du total
    quantite.addEventListener("click",()=> {
    console.log("quantite = " + localStorage.getItem("quantité"));
    var chiffre = localStorage.getItem("quantité")
    tdtable5.setAttribute("value",chiffre);
    console.log(chiffre);
    var resultat = chiffre*data.price/100;
    console.log(resultat);   
    tdtable8.textContent = resultat+' €';
    tdtable8.setAttribute("value",tdtable8.textContent);

    localStorage.setItem("totalisation",resultat+' €');

       })
       
      

       var modele = document.getElementById("modele");
       var quant  = document.getElementById("quant");

       

       


       // création des 2 tableaux. 

     

   

    //incrémentation  de la table contact
    


    
/*
    // Traitement des coordonnées. 
    // stockage des informations saisie par l'utilisateur dans le localStorage ( 6 champs)

    document.getElementById("nom").addEventListener("change",function (e){
    localStorage.setItem("nom",e.target.value);}); 

    document.getElementById("prenom").addEventListener("change",function (e){
    localStorage.setItem("prenom",e.target.value);}); 

    document.getElementById("adresse").addEventListener("change",function (e){
    localStorage.setItem("adresse",e.target.value);}); 

    document.getElementById("code").addEventListener("change",function (e){
    localStorage.setItem("code",e.target.value);}); 

    document.getElementById("ville").addEventListener("change",function (e){
    localStorage.setItem("ville",e.target.value);}); 

    document.getElementById("mail").addEventListener("change",function (e){
    localStorage.setItem("mail",e.target.value);}); 


// incrémentation des ces éléments dans un tableau. 
    information.contact.push({"nom":localStorage.getItem("nom"),
                           "prenom":localStorage.getItem("prenom"),
                           "adresse":localStorage.getItem("adresse"),
                           "code":localStorage.getItem("code"),
                           "ville":localStorage.getItem("ville"),
                           "mail":localStorage.getItem("mail"),
                        });



//Traitement du produit
//stockage des donées produits dans le local
  information.produit.push({"name":data.name,
                            "quantite":localStorage.getItem("quantité"),
                            "total":localStorage.getItem("totalisation"),
                            "id_order":data._id,

  })


    localStorage.setItem('information', JSON.stringify(information));

    var contact = JSON.parse(localStorage.getItem('information'));

    console.log(contact);

    //console.log(JSON.stringify(information));

    // console.log(JSON.stringify({"nom":data.price,"prenom":"","adresse":"","code postal":""}));


*/



    valid.addEventListener("click",()=>{
      
     
      
       if(formulaire.nom.value==""){
         alert("Vous avez oublié de remplir un champs obligatoire");
         
       }
       else if (formulaire.prenom.value==""){
         alert("Vous avez oublie de remplir un champs obligatoire")
       }
       else if (formulaire.adresse.value==""){
         alert("Vous avez oublie de remplir un champs obligatoire")
       }
       else if (formulaire.ville.value==""){
        alert("Vous avez oublie de remplir un champs obligatoire")
       }
       else if (formulaire.code.value==""){
        alert("Vous avez oublie de remplir un champs obligatoire")
       }
       else if (formulaire.mail.value==""){
        alert("Vous avez oublie de remplir un champs obligatoire")
       }
       else
       {

     
        var contact = JSON.stringify({"nom":formulaire.nom.value,
                                      "prenom":formulaire.prenom.value,
                                      "adresse":formulaire.adresse.value,
                                      "ville":formulaire.ville.value,
                                      "code":formulaire.code.value,
                                      "mail":formulaire.mail.value    
      })


      var prixTotal = localStorage.getItem("totalisation");
      var quantiteFinal = localStorage.getItem("quantité");


      var produit = JSON.stringify({"modele":modele.innerText,
                                    "quantiteFinal":quantiteFinal,
                                    "prixtotale": prixTotal,
                                 
})


    
      var panier = [
        [contact],
        [produit]
      ]
     
      alert(panier)

     fetch(localStorage.setItem("panier",panier),{
       method:'POST',
       headers:{
         'Content-Type':'application/json ; charset=UTF-8'
       },
       body:panier
     })
     .then(function(response){
      return response.json()
     })
     .then(function(data){
       alert(data);
       location.href="confirmation.html"
     })

       }
      
    })








});

