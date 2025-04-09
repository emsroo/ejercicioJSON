console.log("soy un script externo");

// apuntar a datos en campo txt despues de guardar 
// evento click registrar

// guardar archivos y desplegarlos en consola

window.addEventListener("load", function (event) {
    console.log("Se termino de cargar la pagina");
    let txtNombre= document.getElementById("txtNombre");
    let btnMostrar = document.getElementById("btnMostrar");
    btnMostrar.addEventListener("click", function(event){
        event.preventDefault();
        console.log("yei you clicked")
        inputName=txtNombre.value
        localStorage.setItem( "name",inputName)
    }); //btn mostrar
}); //load 







// localStorage.setItem("email", "jperez@hotmail.com")