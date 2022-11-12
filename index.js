//Funciones bienvenido y Comprar
function Bienvenido(){
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

function Compra(produc){
    let precio=0;
    let i=0;
    let articulo;
    let articulos=[];
        while(produc>0 || produc!=0){
            if(produc==cuadro.id){
                produc=prompt('Articulo agregado: '+cuadro.nombreP+'. Ingrese numero de otro producto que desee comprar, caso contrario presione 0');
                precio+=cuadro.precio;
                articulos.push(cuadro.nombreP)
                i++;
            }else if(produc==mate.id){
                produc=prompt('Articulo agregado: '+mate.nombreP+'. Ingrese numero de otro producto que desee comprar, caso contrario presione 0');
                precio+=mate.precio;
                articulos.push(mate.nombreP)
                i++;
            }else if(produc==promocion.id){
                produc=prompt('Articulo agregado: '+promocion.nombreP+'. Ingrese numero de otro producto que desee comprar, caso contrario presione 0');
                precio+=promocion.precio;
                articulos.push(promocion.nombreP)
                i++;
            }else{
                produc=prompt('El valor ingresado no se encuentra en stock, por favor vuelva a ingresar un valor que este disponible, caso contrario presione 0 para salir, muchas gracias');
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
Compra(producto);
