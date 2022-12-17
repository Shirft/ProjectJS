//Consulta fetch datos formulario
let formu=document.querySelectorAll("#FinalizacionCompra");
if(formu){
    function formul(){
        fetch("./json/datos.json")
        .then(response=>response.json())
        .then(({nombre,email,tel,direccion,partido})=>{
            document.querySelector("#nombre").value=nombre;
            document.querySelector("#mail").value=email;
            document.querySelector("#inputTel").value=tel;
            document.querySelector("#inputAddress").value=direccion;
            document.querySelector("#inputCity").value=partido;
        })
    }
    formul()
}
