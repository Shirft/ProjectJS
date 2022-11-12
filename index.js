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
function Compra(produc){
    let precio=0;
    let i=0;
    let articulo;
    let articulos;
    if(produc>0 || produc!=0){
        while(produc>0 || produc!=0){
            let sum=0;
            if(produc=='1'){
                articulo='Cuadro';
                sum=1200;
                produc=prompt('Articulo agregado: '+articulo+'. Ingrese numero de otro producto que desee comprar, caso contrario presione 0');
                i++;
            }else if(produc=='2'){
                articulo='Mate';
                sum=1000;
                produc=prompt('Articulo agregado: '+articulo+'. Ingrese numero de otro producto que desee comprar, caso contrario presione 0');
                i++;
            }else if(produc=='3'){
                articulo='Promoción';
                sum=800;
                produc=prompt('Articulo agregado: '+articulo+'. Ingrese numero de otro producto que desee comprar, caso contrario presione 0');
                i++;
            }else{
                produc=prompt('El valor ingresado no se encuentra en stock, por favor vuelva a ingresar un valor que este disponible, caso contrario presione 0 para salir, muchas gracias');
            }
            precio+=sum;
            if(i==1){
                articulos=articulo;
            }else if(produc<4){
                articulos=articulos+'-'+articulo;
            }else{
                articulos=articulos;
            }   
        }
        alert('Monto total a pagar: $'+precio+', cantidad de articulos: '+i+' y articulos comprados: '+articulos)
        alert('Gracias por su compra!')
    }else{
        alert('Gracias por su visita!');
    }
}

Bienvenido();
let producto=parseInt(prompt('Ingrese numero de producto que desea comprar: 1-Cuadro(Precio: $1.200) 2-Mate(Precio:$1.000) 3-promoción(Precio:$800) - Caso contrario presione 0 para salir'));
Compra(producto);

