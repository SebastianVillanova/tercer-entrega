let carrito = [];
let precioCarrito = 0;
const precioTotalCarrito = document.getElementById("precioTotal");
const PRODUCTOS = [
    {   nombre: "guitarra",
        precio: 1111
    },
    {   nombre: "bateria",
        precio: 2222
    }
];

localStorage.setItem("guitarra", PRODUCTOS[0].precio);
localStorage.setItem("bateria", PRODUCTOS[1].precio);

function agregarAlCarrito(a){
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        if (a === key){
            carrito.push(key);
            precioCarrito += parseInt(localStorage.getItem(key));
        }
    }
}




function agregarCard(item){
    agregarAlCarrito(item);

    const liCarrito = document.getElementById("carritoUL");
    const li = document.createElement("li");

    li.innerHTML = `
        <li id="card" class="cardCreada">
            <h3>Producto</h3>
            <p>Guitarra </p>
            <p>Precio por unidad ${localStorage.getItem(item)} </p>
            <button id="removerCarrito">X</button>
        </li>
    `
    liCarrito.appendChild(li);
    
    precioTotalCarrito.textContent = `Precio total ${precioCarrito}`;
    console.log(`Precio total: ${precioCarrito}`);

    const borrarCarritoVacio = document.getElementById("carritoVacio");
    if(carrito.length < 2){
        return borrarCarritoVacio.remove();
    }
}



const btnGuitarra = document.getElementById("guitarrahtml");
btnGuitarra.addEventListener("click", ()=> {
    agregarCard("guitarra")
    // agregarAlCarrito("guitarra");
    
    // const liCarrito = document.getElementById("carritoUL");
    // const li = document.createElement("li");
    // li.innerHTML = `
    //     <li id="card">
    //         <h3>Producto</h3>
    //         <p>Guitarra </p>
    //         <p>Precio por unidad ${localStorage.getItem("guitarra")} </p>
    //         <button id="removerCarrito">X</button>
    //     </li>
    // `
    // liCarrito.appendChild(li);

    // precioTotalCarrito.textContent = `Precio total ${precioCarrito}`;
    // console.log(`Precio total: ${precioCarrito}`);

    // const borrarCarritoVacio = document.getElementById("carritoVacio");
    // if(carrito.length < 2){
    //     return borrarCarritoVacio.remove();
    // }
});





const btnBateria = document.getElementById("bateriahtml");
btnBateria.addEventListener("click", ()=> {
    agregarCard("bateria");
    // agregarAlCarrito("bateria");

    // const liCarrito = document.getElementById("carritoUL");
    // const li = document.createElement("li");
    // li.innerHTML = `
    //     <li id="card">
    //         <h3>Producto</h3>
    //         <p>Bateria </p>
    //         <p>Precio por unidad ${localStorage.getItem("bateria")} </p>
    //         <button id="removerCarrito">X</button>
    //     </li>
    // `
    // liCarrito.appendChild(li);
    
    // precioTotalCarrito.textContent = `Precio total ${precioCarrito}`;
    // console.log(`Precio total: ${precioCarrito}`);
    // const borrarCarritoVacio = document.getElementById("carritoVacio");
    // if(carrito.length < 2){
    //     return borrarCarritoVacio.remove();
    // }
});