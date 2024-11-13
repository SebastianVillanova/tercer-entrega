let carrito = [];
let precioCarrito = 0;
const PRODUCTOS = [
    {   nombre: "guitarra",
        precio: 1111
    },
    {   nombre: "bateria",
        precio: 2222
    }
];
const precioTotalCarrito = document.getElementById("precioTotal");
const carritoUL = document.getElementById("carritoUL");
const liCard = document.getElementById("card");
const borrarCarritoVacio = document.getElementById("carritoVacio");
const btnGuitarra = document.getElementById("guitarrahtml");
const btnBateria = document.getElementById("bateriahtml");


localStorage.setItem("guitarra", PRODUCTOS[0].precio);
localStorage.setItem("bateria", PRODUCTOS[1].precio);
localStorage.setItem("precio-carrito", precioCarrito);

function agregarAlCarrito(a){
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        if (a === key){
            carrito.push(key);
            precioCarrito += parseInt(localStorage.getItem(key));
        }
    }
}

function cardCarrito(item){
    agregarAlCarrito(item);
    const li = document.createElement("li");
    li.setAttribute("id", "card");
    li.className = "cardCreada";
    li.innerHTML = `
            <h3>Producto</h3>
            <p>Guitarra </p>
            <p>Precio por unidad ${localStorage.getItem(item)} </p>
    `
    carritoUL.appendChild(li);
    li.appendChild(crearBtnBorrar());
    precioTotalCarrito.textContent = `Precio total ${precioCarrito}`;
    // puede ser que la linea de arriba haya que bajarla despues de crearBtnBorrar 
    
    function crearBtnBorrar(){
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "X";
        btnBorrar.className = "btn-borrar-de-carrito";
        btnBorrar.addEventListener("click", ()=>{ 
            carritoUL.removeChild(li);
            
        });
        return btnBorrar;
    }

    if(carrito.length > 0){
        return borrarCarritoVacio.remove();
    } 
    
    
}

btnGuitarra.addEventListener("click", ()=> {
    cardCarrito("guitarra");
    console.log(carrito);
});

btnBateria.addEventListener("click", ()=> {
    cardCarrito("bateria");
    console.log(carrito);
});


// revisar por que no se actualiza el precio del carrito cuando agrego o saco items 
// agregar un if para que aparezca carrito vacio si carrito.length == 0 despues de borrar todos los items 




/* 
Bueno, venís muy bien encaminado con tu aplicación.
Hay cosas que funcionan bien, otras que no y otras que faltan, vamos por parte.
Lo de acumular productos en el carrito funciona sin problemas; lo de eliminarlos, no.
Después, el storage prácticamente no lo estamos utilizando, ya que no tiene ninguna función relevante dentro de la aplicación, si tenemos un carrito, 
la idea sería justamente que en el storage se vaya actualizando ese carrito.
Después, también habría que tener en cuenta cuál es la tarea principal de tu aplicación, la venta de productos, entonces deberíamos poder completarla. 
Es decir, que una vez que el usuario seleccione los productos que quiere comprar, que pueda confirmar la compra, que se le de el ok de que salió todo bien 
y que luego de eso se vacíe el carrito volviendo al punto cero. En fin, la preentrega queda aprobada, pero a no dormirse que son puntos importantes para 
encarar la entrega final. Felicitaciones por el proyecto, la cursada y lo mejor para lo que sigue!
*/