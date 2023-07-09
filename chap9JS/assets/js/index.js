    const review = document.getElementById("view");
    
    function produit(){
    let x=prompt("veuillez entrer un nombre");
    let y=prompt("veuillez entrer un multiplicateur");

    let result2 = x*x*x;
    let result = x*y;
    document.getElementById("result1").innerHTML = ("le cube de "+ x + " est: " + result2);
    document.getElementById("result2").innerHTML = (x +"x" + y + " est egale à: "+ result);
    }
  
    function afficheImg(){
        document.getElementById('butterfly');
        butterfly.innerHTML = `<img src="assets/images/papillon.jpg">`
        }

    

    produit();
    afficheImg();