
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
/*
function AsignacionM(Produc1, prec1){
    let i=0;
    let Precio1 = document.querySelector(prec1);
    let Precios1 = document.querySelectorAll(prec1);
    let getclass1=Precio1.getAttribute("class");
    let Prodcl1=Produc1.filter(elm=>elm.id==getclass1)
    if(Prodcl1!=null){
        Prodcl1.forEach(element =>{
            Precios1[i].innerText=`Precio: $ ${element.precio}`;
            Precios1[i].setAttribute("value", element.precio);
            Precios1[i].setAttribute("title", element.nombreP);
            i++;
        });
    } 
}
*/

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
/*
if(document.querySelector(".precio-mate")!=null && document.querySelector(".precio-cuadro")!=null){
    AsignacionC(ProductosM, ".precio-mate", ".precio-cuadro")
}else if(document.querySelector(".precio-mate")!=null){
    AsignacionM(ProductosM, ".precio-mate");
}else if(document.querySelector(".precio-cuadro")!=null){
    AsignacionM(ProductosM, ".precio-cuadro");
}else if(document.querySelector(".precio-oferta")!=null){
    AsignacionM(ProductosM, ".precio-oferta");
}else{
    console.log("no hay precios")
}
*/
//Asignacion id
addID(".precio-mate", ".precio-cuadro", ".precio-oferta", "body .btn-success.col-12");

//buscador
/*document.querySelector("header input").setAttribute("id", "Buscador");
document.querySelector("header button.btn").setAttribute("id", "Buscar");
if(document.querySelector("section h2")!=null){
    document.querySelector("section h2").setAttribute("id", "titulares");
}
let input1=document.querySelector("#Buscador");
let button1=document.querySelector("#Buscar");
let seccion=document.querySelector("section");
let divs=document.querySelectorAll("section>div");
let article=document.querySelector("section article");
let filtro=()=>{
    seccion.innerHTML=``;
    seccion.innerHTML=`
    <div class="row content_tabla justify-content-center">
    </div>
    `
    let row=document.querySelector(".content_tabla")
    row.innerHTML=``;
    let texto=input1.value.toLowerCase();
    for (let pro of ProductosM) {
        let name=pro.nombreP.toLowerCase();
        if(name.indexOf(texto)!==-1){
            row.innerHTML+=`
            <div class="col-lg-3 col-md-6 col-sm-12 content_prod text-center">
            <h3>${pro.nombreP}</h3>
            <img class="col-12" src="${pro.img}" alt="${pro.nombreP}" title="${pro.nombreP}">
            <div class="precio-mate">Precio: $${pro.precio}</div>
            <button type="button" class="btn btn-success col-12">Comprar</button>
            </div>
          `
        }    
    }
    if(row.innerHTML==''){
        row.innerHTML+=`
            <h3>Producto no encontrado...</h3>
        `
    }
}
button1.addEventListener("click", filtro);
*/

//Agregar evento onclick button comprar

    let buttonComprar=document.querySelectorAll("body .btn-success.col-12");
    let btnPrecio=document.querySelectorAll(".precio")
    let divcarrito=document.querySelector(".carrito");
    let divTotal=document.querySelector("#total");

    const carrito= JSON.parse(localStorage.getItem("carrito")) || [];
    const Pnombres=JSON.parse(localStorage.getItem("producto")) || [];
    const valores=JSON.parse(localStorage.getItem("valores")) || [];
    let totl;
    if(JSON.parse(localStorage.getItem("monto"))){
        totl=JSON.parse(localStorage.getItem("monto"));
        divTotal.innerText=`Total: $${totl}`
        let car=JSON.parse(localStorage.getItem("carrito"))
        console.log(car)
        for (const ca of car) {
            addCarr(ca.nombre, ca.precio, totl)
        }
    }else{
        totl=0;
        divTotal.innerText=`Total: $${totl}`
    }
    buttonComprar.forEach((boton)=>{
        boton.onclick =()=>{
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
            
            localStorage.setItem("carrito", JSON.stringify(carrito))
            localStorage.setItem("producto", JSON.stringify(Pnombres))
            localStorage.setItem("valores", JSON.stringify(valores))
            localStorage.setItem("monto", JSON.stringify(totl))
            addCarr(ProducCarrito.nombre, ProducCarrito.precio, totl)
        }
    })
 
function addCarr(titulo, precio, total){
    const nudiv=document.createElement("div");
    nudiv.setAttribute("class", "col-lg-3 col-md-6 col-sm-12 content_prod elegido")
    div=`
    <div class="col-lg-12 col-md-12 col-sm-12 agregado">
        <h3>${titulo}</h3>
        <div class="precio-oferta ">Precio: $${precio}</div>
        <button type="button" class="btn btn-success col-4 delete">X</button>
    </div>
    `
    nudiv.innerHTML=div;
    divcarrito.append(nudiv)

    nudiv.querySelector(".delete").addEventListener("click", removeItem)
    divTotal.innerText=`Total: $${total}`
}

function removeItem(event){
    const buttonRemoved=event.target;
    let h3 =buttonRemoved.closest(".elegido").querySelector("h3").textContent;
    
    let removerI=carrito.findIndex((obj)=>obj.nombre==h3)
    let remover=carrito.find((obj)=>obj.nombre==h3)
    if(remover){
        totl=totl-carrito[removerI].precio;
        carrito.splice(removerI, 1)
        Pnombres.splice(removerI, 1)
        valores.splice(removerI, 1)

        buttonRemoved.closest(".elegido").remove()
        localStorage.clear()
        localStorage.setItem("carrito", JSON.stringify(carrito))
        localStorage.setItem("producto", JSON.stringify(Pnombres))
        localStorage.setItem("valores", JSON.stringify(valores))
        localStorage.setItem("monto", JSON.stringify(totl))
        divTotal.innerText=`Total: $${totl}`
    }
}
let butonFinalizar=document.querySelector("#Compras");
butonFinalizar.addEventListener("click", botonFinalizar);

function botonFinalizar(){
    if(totl>0){
        alert("Compra realizada, Monto gastado: $"+totl);
    }else{
        alert("No se han agregado productos para comprar, por favor seleccione alguno para poder proseguir con la compra")
    }
    
}
/*   for(const property of buttonComprar){
        let total=parseInt(btnPrecio[c].getAttribute("value"));
        let titulo=btnPrecio[c].getAttribute("title");
        const compra={
            Producto:titulo,
            precio:total
        }
        property.onclick=()=>{
            carrito.push(JSON.stringify(compra));
            localStorage.setItem("Carrito",carrito);
            totl.push(titulo);
            localStorage.setItem("Productos",totl);
            tot+=total
            localStorage.setItem("Monto total",tot);
            console.log("Productos Adquiridos ahsta el momento: "+ localStorage.getItem("Carrito"))
           // console.log("Monto acumulado hasta el momento: $"+localStorage.getItem("Monto total"))
        }
        c++;
    }
    /*----------------------------------------------*/
/*
let buttonsComprar=document.querySelectorAll("body .btn-success");
buttonsComprar.forEach(buttonComprar => {
    buttonComprar.addEventListener("click", clickear);
});


function clickear(event){
    const boton=event.target;
    const detalle=boton.closest(".content_prod, .content_ofertas");
    const titulo=detalle.querySelector("h3").textContent;
    const Monto=detalle.querySelector(".precio").textContent;
    const valor=detalle.querySelector(".precio").getAttribute("value");
    console.log(titulo, Monto)
}*/