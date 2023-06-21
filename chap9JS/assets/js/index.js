    function produit(){
    let x=prompt("veuillez entrer un nombre")
    let y=prompt("veuillez entrer un multiplicateur")
    let output
    console.log("le produit de " + x + y " est egal à " + x*y , function(val){output = val});        
    }

    function afficheImg(){
    let butterfly = document.getElementById('butterfly');
    butterfly.innerHTML = `<img src="assets/images/papillon.jpg">`
    }
            
    produit();
    afficheImg();       
