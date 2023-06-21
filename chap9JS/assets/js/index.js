    function produit(){
    let x=prompt("veuillez entrer un nombre")
    let y=prompt("veuillez entrer un multiplicateur")
        //stocker le console.log dans une variable pour ensuite l'inserer sous l'image.....
    let output
    console.log("le produit de " + x + y " est egal à " + x*y , function(val){output = val});        
    }

    function afficheImg(){
    let butterfly = document.getElementById('butterfly');
    butterfly.innerHTML = `<img src="assets/images/papillon.jpg">`
    }
            
    produit();
    afficheImg();       
