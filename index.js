//Funciones bienvenido
/*function Bienvenido(){
    let valor=true;
    do{
        var nombre=prompt('Por favor ingrese nombre y apellido');
        if(nombre!=''){
            valor=false;
        }else{
            valor=true;
        }
    }while(valor);
    alert('Bienvenido '+nombre);
}

//clase producto
class Producto{
    constructor(id, nombreP, precio){
        this.id=id,
        this.nombreP=nombreP,
        this.precio=precio;
    }
}
const cuadro=new Producto(1, 'Cuadro', 1200);
const mate=new Producto(2, 'Mate', 1000);
const promocion=new Producto(3, 'Promoción', 800);
const Productos=[cuadro,mate,promocion];

//funcion compra
function Compra(produc){
    let precio=0;
    let i=0;
    let articulos=[];
    while(produc>0 || produc!=0){
        let ProductosCL=Productos.find(elem=>elem.id==produc)
        if(ProductosCL){
            precio+=ProductosCL.precio;
            produc=prompt('Articulo agregado: '+ProductosCL.nombreP+'. Ingrese numero de otro producto que desee comprar, caso contrario presione 0');
            articulos.push(ProductosCL.nombreP);
            i++;
        }else{
            produc=prompt('El valor ingresado no se encuentra en stock, por favor vuelva a ingresar un valor que este disponible, caso contrario presione 0 para salir, muchas gracias')
        }
    }
    if(i>0){
        alert('Monto total a pagar: $'+precio+', cantidad de articulos: '+i+' y articulos comprados: '+articulos)
        alert('Gracias por su compra!')
    }else{
        alert('Gracias por su visita!');
    }
}

Bienvenido();
let producto=parseInt(prompt('Ingrese numero de producto que desea comprar: 1-Cuadro(Precio: $1.200) 2-Mate(Precio:$1.000) 3-promoción(Precio:$800) - Caso contrario presione 0 para salir'));
Compra(producto);*/

//clases y funciones
class Producto{
    constructor(id, nombreP, precio){
        this.id=id,
        this.nombreP=nombreP,
        this.precio=precio;
    }
}
function addID(div1, div2, div3){
    let precio1=document.querySelectorAll(div1)
    let precio2=document.querySelectorAll(div2)
    let precio3=document.querySelectorAll(div3)
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
}

function AsignacionM(Produc1, prec1){
    let i=0;
    let Precio1 = document.querySelector(prec1);
    let Precios1 = document.querySelectorAll(prec1);
    let getclass1=Precio1.getAttribute("class")
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

function AsignacionC(Produc2, prec2, prec3){

    let Precio2 = document.querySelector(prec2);
    let Precios2 = document.querySelectorAll(prec2);
    let getclass2=Precio2.getAttribute("class")
    let Prodcl2=Produc2.filter(elm=>elm.id==getclass2)
    if(Precio2!=null){
        let i=0;        
        Prodcl2.forEach(element =>{
            Precios2[i].innerText=`Precio: $ ${element.precio}`;
            Precios2[i].setAttribute("value", element.precio);
            Precios2[i].setAttribute("title", element.nombreP)
            i++;
        });       
    }

    let Precio3 = document.querySelector(prec3);
    let Precios3 = document.querySelectorAll(prec3);
    let getclass3=Precio3.getAttribute("class")
    let Prodcl3=Produc2.filter(elm=>elm.id==getclass3)
    if(Precio3!=null){
        i=0;
        Prodcl3.forEach(element =>{
            Precios3[i].innerText=`Precio: $ ${element.precio}`;
            Precios3[i].setAttribute("value", element.precio);
            Precios3[i].setAttribute("title", element.nombreP)
            i++;
        });
    }
}


//Agisnacion precios
const Mate1=new Producto("precio-mate", "Mate de wolverine", 1400,00);
const Mate2=new Producto("precio-mate", "Mate de spiderman", 1400,00);
const Mate3=new Producto("precio-mate", "Mate de madre/hija", 1200,00);
const Mate4=new Producto("precio-mate", "Mate de kakashi", 1400,00);
const Mate5=new Producto("precio-mate", "Mate de gojo", 1400,00);
const Cuadro1=new Producto("precio-cuadro", "Cuadro de Naruto", 600,00);
const Cuadro2=new Producto("precio-cuadro", "Cuadro de Shoto", 600,00);
const Cuadro3=new Producto("precio-cuadro", "Cuadro de kakashi y gai", 1200,00);
const Oferta1=new Producto("precio-oferta", "Promo cuadro de levi", 1400,00);
const Oferta2=new Producto("precio-oferta", "Promo cuadro de megumi", 2100,00);
const Oferta3=new Producto("precio-oferta", "Promo cuadro de pain", 2600,00);

let ProductosM=[Mate1, Mate2, Mate3, Mate4, Mate5, Cuadro1, Cuadro2, Cuadro3, Oferta1, Oferta2, Oferta3];

if(document.querySelector(".precio-mate")!=null && document.querySelector(".precio-cuadro")!=null){
    AsignacionC(ProductosM, ".precio-mate", ".precio-cuadro")
}else if(document.querySelector(".precio-mate")!=null){
    AsignacionM(ProductosM, ".precio-mate");
}else if(document.querySelector(".precio-cuadro")!=null){
    AsignacionM(ProductosM, ".precio-cuadro");
}else{
    AsignacionM(ProductosM, ".precio-oferta");
}
//Asignacion id
addID(".precio-mate", ".precio-cuadro", ".precio-oferta");

//Agregar evento onclick button comprar
let buttonComprar=document.querySelectorAll("body .btn-success");
let btnPrecio=document.querySelectorAll(".precio")
let c=0;
let totl=[ ];
let tot=0;
for(const property of buttonComprar){
    let total=parseInt(btnPrecio[c].getAttribute('value'));
    let titulo=btnPrecio[c].getAttribute("title");
    const compra={
        Producto:titulo,
        precio:total
    }
    //property.setAttribute("onclick", "localStorage.setItem('Compra','"+JSON.stringify(compra)+"'); localStorage.setItem('Monto total','"+compra.precio+"'); "+totl.push(compra.precio)+"");
    //property.setAttribute("onclick", "console.log('"+acumular(total, totl)+"')");
    property.onclick=()=>{
        localStorage.setItem('Compra',JSON.stringify(compra));
        totl.push(titulo);
        localStorage.setItem('Productos',totl);
        tot+=total
        localStorage.setItem('Monto total',tot);
        console.log("Productos Adquiridos ahsta el momento: "+ localStorage.getItem("Productos"))
        console.log("Monto acumulado hasta el momento: $"+localStorage.getItem("Monto total"))
    }
    c++;
}

