
//clases y funciones
class Producto{
    constructor(id, classe, nombre, precio){
        this.id=id,
        this.classe=classe,
        this.nombre=nombre,
        this.precio=precio;
    }
}
function addID(div1, div2, div3, button){
    let precio1=document.querySelectorAll(div1)
    let precio2=document.querySelectorAll(div2)
    let precio3=document.querySelectorAll(div3)
    let buttons=document.querySelectorAll(button)
    num=0;
    precio1.forEach(prod => {
        prod.setAttribute("class", precio1[num].getAttribute("class")+" precio");
        num++;
    });
    num=0;
    precio2.forEach(prod => {
        prod.setAttribute("class", precio2[num].getAttribute("class")+" precio");
        num++;
    });
    num=0;
    precio3.forEach(prod => {
        prod.setAttribute("class", precio3[num].getAttribute("class")+" precio");
        num++;
    });
    num=0;
    buttons.forEach(but => {
        but.setAttribute("id", num);
        num++;
    });
}

function AsignacionC(Produc2, prec1, prec2, prec3){

    let Precio1 = document.querySelector(prec1);
    let Precios1 = document.querySelectorAll(prec1);
    let getclass1=Precio1.getAttribute("class");
    let Prodcl1=Produc2.filter(elm=>elm.classe==getclass1)
    if(Prodcl1!=null){
        let i=0;
        Prodcl1.forEach(element =>{
            Precios1[i].innerText=`Precio: $ ${element.precio}`;
            Precios1[i].setAttribute("value", element.precio);
            Precios1[i].setAttribute("title", element.nombre);
            i++;
        });
    }

    let Precio2 = document.querySelector(prec2);
    let Precios2 = document.querySelectorAll(prec2);
    let getclass2=Precio2.getAttribute("class")
    let Prodcl2=Produc2.filter(elm=>elm.classe==getclass2)
    if(Precio2!=null){
        let i=0;        
        Prodcl2.forEach(element =>{
            Precios2[i].innerText=`Precio: $ ${element.precio}`;
            Precios2[i].setAttribute("value", element.precio);
            Precios2[i].setAttribute("title", element.nombre)
            i++;
        });       
    }

    let Precio3 = document.querySelector(prec3);
    let Precios3 = document.querySelectorAll(prec3);
    let getclass3=Precio3.getAttribute("class")
    let Prodcl3=Produc2.filter(elm=>elm.classe==getclass3)
    if(Precio3!=null){
        i=0;
        Prodcl3.forEach(element =>{
            Precios3[i].innerText=`Precio: $ ${element.precio}`;
            Precios3[i].setAttribute("value", element.precio);
            Precios3[i].setAttribute("title", element.nombre)
            i++;
        });
    }
}

function addCarr(titulo, precio, total, cantidades){
    const nudiv=document.createElement("div");
    nudiv.setAttribute("class", "row justify-content-between align-items-center content_prod elegido")
    nudiv.setAttribute("style", "border:none");
    let div=`
    <div class="d-flex flex-row col-lg-12 col-md-12 col-sm-12 agregado">
        <h7 class="col-lg-6 col-md-6 col-sm-6">${titulo}</h7>
        <div class="precio-oferta col-lg-4 col-md-4 col-sm-4">Precio: $${precio}</div>
        <button type="button" class="btn btn-success col-lg-2 col-md-2 col-sm-2 delete">X</button>
    </div>
    `
    nudiv.innerHTML=div;
    divcarrito.append(nudiv)

    nudiv.querySelector(".delete").addEventListener("click", removeItem)
    divTotal.innerText=`Total: $${total}`
    span.innerText=`${cantidades}`
    mostrarCompras();
    ocultarYmostrarP();
}
function finalizarCompra(title, cash, all){
    const nudiv2=document.createElement("div");
    nudiv2.setAttribute("class", "row justify-content-between align-items-center content_prod elegido")
    nudiv2.setAttribute("style", "border:none");
    let div2=`
    <div class="d-flex flex-row col-lg-12 col-md-12 col-sm-12 agregado text-left">
        <h7 class="col-lg-6 col-md-6 col-sm-6">${title}</h7>
        <div class="precio-oferta col-lg-4 col-md-4 col-sm-4">Precio: $${cash}</div>
    </div>
    <hr>
    `
    nudiv2.innerHTML=div2;
    comprado.insertAdjacentElement("afterbegin",nudiv2)

    montoT.innerText=`Total: $${all}`
}
function removeItem(event){
    const buttonRemoved=event.target;
    let h7 =buttonRemoved.closest(".elegido").querySelector("h7").textContent;
    
    let removerI=carrito.findIndex((obj)=>obj.nombre==h7)
    let remover=carrito.find((obj)=>obj.nombre==h7)
    if(remover){
        totl=totl-carrito[removerI].precio;
        canti=canti-1
        carrito.splice(removerI, 1)
        Pnombres.splice(removerI, 1)
        valores.splice(removerI, 1)

        buttonRemoved.closest(".elegido").remove()
        localStorage.clear()
        localStorage.setItem("carrito", JSON.stringify(carrito))
        localStorage.setItem("producto", JSON.stringify(Pnombres))
        localStorage.setItem("valores", JSON.stringify(valores))
        localStorage.setItem("cantidad", JSON.stringify(canti))
        localStorage.setItem("monto", JSON.stringify(totl))
        divTotal.innerText=`Total: $${totl}`
        if(canti>0){
            span.innerText=`${canti}`
        }else{
            span.innerText=``
            localStorage.clear()
        }
    }
    mostrarCompras();
    ocultarYmostrarP();
}

function mostrarCompras(){
    if(totl>0){
        document.querySelector("#Compras").setAttribute("style", "display:block");
    }else{
        document.querySelector("#Compras").setAttribute("style", "display:none");
    }
}

function botonFinalizar(){
    let inputs=document.querySelectorAll("#FinalizacionCompra input")
    let mail=document.querySelector("#mail").value
    for (const inp of inputs) {
        if(totl>0 && inp.value!=""){
            swal("Compra realizada con exito!", "Monto gastado: $"+totl+"\n Se envio mail a "+mail+" para retiro de producto \n Muchas gracias!", "success", {closeOnEsc: false, button: "Aceptar", closeOnClickOutside: false,});
            document.querySelector(".swal-button").style.background="#8e5445";
         }else{
            swal("Atención!", "Complete los campos faltantes para finalizar la compra", "info", {closeOnEsc: false, button: "Aceptar", closeOnClickOutside: false,});
            document.querySelector(".swal-button").style.background="#8e5445";
        }
    }

}
function ocultarYmostrarP(){
    let txtp=document.querySelector(".vacio");
    if(totl>0){
        txtp.innerText=``
    }else{
        txtp.innerText=`Sin productos agregados... Agrega algun producto que desees comprar`
    }
}
function botoncomprar(buttonss){
    buttonss.forEach((boton)=>{
        boton.onclick =()=>{
            let cant=1;
            let seleccion=ProductosM.find((producto)=>producto.id==parseInt(boton.id))
            //const ProducCarrito={...seleccion, cantidad: 1}
            const ProducCarrito={...seleccion}
            const indexCar=carrito.findIndex((carro)=>carro.id==ProducCarrito.id)
            //if(indexCar==-1){
                carrito.push(ProducCarrito);
           // }else{
           //     carrito[indexCar].cantidad++;
           // }
            Pnombres.push(ProducCarrito.nombre)
            valores.push(ProducCarrito.precio)
            totl+=ProducCarrito.precio;
            canti+=cant;
            localStorage.setItem("carrito", JSON.stringify(carrito))
            localStorage.setItem("producto", JSON.stringify(Pnombres))
            localStorage.setItem("valores", JSON.stringify(valores))
            localStorage.setItem("cantidad", JSON.stringify(canti))
            localStorage.setItem("monto", JSON.stringify(totl))
            addCarr(ProducCarrito.nombre, ProducCarrito.precio, totl, canti)
            
        }
    })
}
function filtro(){
    if(input1.value!="" && input1.value!=" "){
        seccion.innerHTML=``;
        seccion.innerHTML=`
        <div class="container">
            <div class="row content_tabla justify-content-center">
            </div>
        </div>
        `
        let row=document.querySelector(".content_tabla")
        row.innerHTML=``;
        let texto=input1.value.toLowerCase();
        for (let pro of contentProd) {
            let name=pro.textContent.toLowerCase();
            let name1=pro.textContent;
            let img1=pro.closest(".content_prod, .content_ofertas").querySelector("img").src;
            let prec1=pro.closest("div").querySelector("div").textContent;
            let ids=pro.closest(".content_prod, .content_ofertas").querySelector("button").id;
            if(name.indexOf(texto)!==-1){
                row.innerHTML+=`
                <div class="col-lg-3 col-md-6 col-sm-12 content_prod text-center">
                <h3>${name1}</h3>
                <img class="col-12" src="${img1}" alt="${name1}" title="${name1}">
                <div class="precio-mate">${prec1}</div>
                <button type="button" class="btn btn-success col-12" id="${ids}">Agregar al carrito</button>
                </div>
            `
            }
        }
        if(row.innerHTML==''){
            row.innerHTML+=`
                <h3>Producto no encontrado...</h3>
            `
        }
        let buttons=document.querySelectorAll("body .btn-success.col-12")
        botoncomprar(buttons);
    }else{
        document.querySelector("#Productos").click()
    }
}

//Agisnacion precios
const Mate1=new Producto(0, "precio-mate", "Mate de wolverine", 1400,00);
const Mate2=new Producto(1, "precio-mate", "Mate de spiderman", 1400,00);
const Mate3=new Producto(2, "precio-mate", "Mate de madre/hija", 1200,00);
const Mate4=new Producto(3, "precio-mate", "Mate de kakashi", 1400,00);
const Mate5=new Producto(4, "precio-mate", "Mate de gojo", 1400,00);
const Cuadro1=new Producto(5, "precio-cuadro", "Cuadro de Naruto", 600,00);
const Cuadro2=new Producto(6, "precio-cuadro", "Cuadro de Shoto", 600,00);
const Cuadro3=new Producto(7, "precio-cuadro", "Cuadro de kakashi", 1200,00);
const Oferta1=new Producto(8, "precio-oferta", "Promo 1", 1400,00);
const Oferta2=new Producto(9, "precio-oferta", "Promo 2", 2100,00);
const Oferta3=new Producto(10, "precio-oferta", "Promo 3", 2600,00);

const ProductosM=[Mate1, Mate2, Mate3, Mate4, Mate5, Cuadro1, Cuadro2, Cuadro3, Oferta1, Oferta2, Oferta3];

if(document.querySelector(".precio-mate")!=null){
    AsignacionC(ProductosM, ".precio-mate", ".precio-cuadro", ".precio-oferta");
}

//Asignacion id
addID(".precio-mate", ".precio-cuadro", ".precio-oferta", "body .btn-success.col-12");

//Agregar evento onclick button comprar
let buttonComprar=document.querySelectorAll("body .btn-success.col-12");
let btnPrecio=document.querySelectorAll(".precio");
let divcarrito=document.querySelector(".offcanvas-body");
let divTotal=document.querySelector("#total");
let span=document.querySelector(".cantidad");

const carrito= JSON.parse(localStorage.getItem("carrito")) || [];
const Pnombres=JSON.parse(localStorage.getItem("producto")) || [];
const valores=JSON.parse(localStorage.getItem("valores")) || [];
let totl;
let canti=0;
    if(divTotal!=null){
        if(JSON.parse(localStorage.getItem("monto"))){
            totl=JSON.parse(localStorage.getItem("monto"));
            canti=JSON.parse(localStorage.getItem("cantidad"));
            span.innerText=`${canti}`
            divTotal.innerText=`Total: $${totl}`
            let car=JSON.parse(localStorage.getItem("carrito"))
            for (const ca of car) {
                addCarr(ca.nombre, ca.precio, totl, canti)
            }
        }else{
            totl=0;
            canti=0;
            divTotal.innerText=`Total: $${totl}`
            span.innerText=``
            localStorage.clear();
        }
    }
botoncomprar(buttonComprar);

//aparicion de boton comprar de carrito
let butonFinalizar=document.querySelector("#Compras");
if(butonFinalizar){
    if(totl>0){
        document.querySelector("#Compras").setAttribute("style", "display:block");
    }else{
        document.querySelector("#Compras").setAttribute("style", "display:none");
    }
}

//Buscador
let input1=document.querySelector("#buscador");
let button1=document.querySelector("#buscar");
let seccion=document.querySelector(".tabla");
let divs=document.querySelectorAll(".tabla .container");
let article=document.querySelector(".tabla article");
let contentProd=document.querySelectorAll("section .container>.row>div>h3");

if(button1){
    button1.addEventListener("click", filtro);
    //input1.addEventListener("keyup", filtro)
}

//Finalizar compra
let comprado=document.querySelector(".comprado")
let buttonF=document.querySelector("#FinCompra")
let montoT=document.querySelector(".montototal")
if(comprado){
    if(JSON.parse(localStorage.getItem("monto"))){
        totl=JSON.parse(localStorage.getItem("monto"));
        let car=JSON.parse(localStorage.getItem("carrito"))
        for (const ca of car) {
            finalizarCompra(ca.nombre, ca.precio, totl)
        }
    }
    buttonF.addEventListener("click", botonFinalizar)
}