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

class Producto{
    constructor(id, nombreP, precio){
        this.id=id,
        this.nombreP=nombreP,
        this.precio=precio;
    }
}
function addID(div1, div2, div3, name){
    let precio1=document.querySelectorAll(div1)
    let precio2=document.querySelectorAll(div2)
    let precio3=document.querySelectorAll(div3)
    let num=1;
    precio1.forEach(prod => {
        prod.setAttribute("id", "Precio"+num);
        num++;
    });
    precio2.forEach(prod => {
        prod.setAttribute("id", "Precio"+num);
        num++;
    });
    precio3.forEach(prod => {
        prod.setAttribute("id", "Precio"+num);
        num++;
    });
}

addID(".precio-mate", ".precio-cuadro", ".precio-oferta");

function AsignacionM(Produc1, prec1){
    let i=0;
    let Precio1 = document.querySelector(prec1);
    let Precios1 = document.querySelectorAll(prec1);
    let getclass1=Precio1.getAttribute("class")
    let Prodcl1=Produc1.filter(elm=>elm.id==getclass1)
    if(Prodcl1!=null){
        Prodcl1.forEach(element =>{
            Precios1[i].innerText=`Precio: $ ${element.precio}`;
            i++;
        });
    } 
}
function AsignacionC(Produc2, prec2, prec3){
    let i=0;
    let Precio2 = document.querySelector(prec2);
    let Precios2 = document.querySelectorAll(prec2);
    let getclass2=Precio2.getAttribute("class")
    let Prodcl2=Produc2.filter(elm=>elm.id==getclass2)
    if(Precio2!=null){
        Prodcl2.forEach(element =>{
            Precios2[i].innerText=`Precio: $ ${element.precio}`;
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
            i++;
        });
    }
}

const Mate1=new Producto("precio-mate", "wolverine", "1.400,00");
const Mate2=new Producto("precio-mate", "spiderman", "1.400,00");
const Mate3=new Producto("precio-mate", "madre/hija", "1.200,00");
const Mate4=new Producto("precio-mate", "kakashi", "1.400,00");
const Mate5=new Producto("precio-mate", "gojo", "1.400,00");
const Cuadro1=new Producto("precio-cuadro", "Naruto", "600,00");
const Cuadro2=new Producto("precio-cuadro", "Shoto", "600,00");
const Cuadro3=new Producto("precio-cuadro", "kakashi", "1.200,00");
const Oferta1=new Producto("precio-oferta", "levi", "1.400,00");
const Oferta2=new Producto("precio-oferta", "megumi", "2.100,00");
const Oferta3=new Producto("precio-oferta", "pain", "2.600,00");

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
