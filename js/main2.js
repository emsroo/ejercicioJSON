console.log("estoy en weocome  un script externo");



window.addEventListener("load", function (event) {
    let name2 = localStorage.getItem("name");
    let bnv = document.getElementById("bnv");
    let btnEliminar = document.getElementById("btnEliminar");

    if (name2 !== null) {
        console.log(bnv);
        bnv.innerText = `Bienvenido de nuevo ${name2}`;
    }
    else {
        let bnv = document.getElementById("bnv");
        console.log(bnv);
        bnv.innerHTML = `Porfavor ve al index e ingresa tu nombre  
        
    <a href="index.html">Index</a>
    `;
    };


    btnEliminar.addEventListener("click", function(event){
        event.preventDefault();
        console.log("yei you clicked");
        localStorage.removeItem("name");
    }); //btn mostrar





}); //load 
