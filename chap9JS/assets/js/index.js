    let result = x*y;
    document.getElementById("result1").innerHTML = "le produit de ces nombre est egal à: " + result;
    }
    
    
    function afficheImg(){
        let butterfly = document.getElementById('butterfly');
        butterfly.innerHTML = `<img src="assets/images/papillon.jpg">`
        }

    produit();
    afficheImg();
