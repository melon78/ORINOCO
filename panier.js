

// lien vers API
const url = 'http://localhost:3000/api/cameras';


fetch(url + "/" +localStorage.getItem("idArticleSelectionne"))
.then((res)=> res.json())
.then((data) =>{  

    
   
});

