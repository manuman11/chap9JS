    function produit(){
    let x=prompt("veuillez entrer un nombre")
    let y=prompt("veuillez entrer un multiplicateur")
            alert(x*y)         
    }

    function afficheImg(){
    let butterfly = document.getElementById('butterfly');
    butterfly.innerHTML = `<img src="assets/images/papillon.jpg">`
    }
            
    produit();
    afficheImg();       