// let carrito = [];
// let precioCarrito = 0;
// const PRODUCTOS = [
//     {   nombre: "guitarra",
//         precio: 1111
//     },
//     {   nombre: "bateria",
//         precio: 2222
//     }
// ];
// const precioTotalCarrito = document.getElementById("precioTotal");
// const carritoUL = document.getElementById("carritoUL");
// const liCard = document.getElementById("card");
// const borrarCarritoVacio = document.getElementById("carritoVacio");
// const btnGuitarra = document.getElementById("guitarrahtml");
// const btnBateria = document.getElementById("bateriahtml");

// localStorage.setItem("guitarra", PRODUCTOS[0].precio);
// localStorage.setItem("bateria", PRODUCTOS[1].precio);
// localStorage.setItem("precio-carrito", precioCarrito);

// function agregarAlCarrito(a){
//     for (let i = 0; i < localStorage.length; i++){
//         let key = localStorage.key(i);
//         if (a === key){
//             carrito.push(key);
//             precioCarrito += parseInt(localStorage.getItem(key));
//         }
//     }
// }

// function eliminarLICarritoVacio(){
//     if(carrito.length !== 0){
//         borrarCarritoVacio.style.display = "none";
//     }
// }

// function refreshCarrito(){
//     if (carrito.length === 0){
//         borrarCarritoVacio.style.display = "block";
//     }

//     precioTotalCarrito.textContent = `Precio total ${precioCarrito}`;
// }

// function cardCarrito(item){
//     agregarAlCarrito(item);
//     eliminarLICarritoVacio();
//     const li = document.createElement("li");
//     li.setAttribute("id", "card");
//     li.className = "cardCreada";
//     li.innerHTML = `
//             <h3>Producto</h3>
//             <p>Guitarra </p>
//             <p>Precio por unidad ${localStorage.getItem(item)} </p>
//     `
//     carritoUL.appendChild(li);
//     li.appendChild(crearBtnBorrar());
//     refreshCarrito();
    
//     function crearBtnBorrar(){
//         const btnBorrar = document.createElement("button");
//         btnBorrar.textContent = "X";
//         btnBorrar.className = "btn-borrar-de-carrito";
//         btnBorrar.addEventListener("click", ()=>{ 
//             btnBorrar.parentElement.remove();
//             let indice = carrito.indexOf(item);
//             carrito.splice(indice, 1);
//             precioCarrito -= parseInt(localStorage.getItem(item));
//             refreshCarrito()
//             console.log(carrito);
//         });
//         return btnBorrar;
//     }
// }            

// btnGuitarra.addEventListener("click", ()=> {
//     cardCarrito("guitarra");
//     console.log(carrito);
// });

// btnBateria.addEventListener("click", ()=> {
//     cardCarrito("bateria");
//     console.log(carrito);
// });


/* 
lo de eliminarlos, no.
Después, el storage prácticamente no lo estamos utilizando, ya que no tiene ninguna función relevante dentro de la aplicación, si tenemos un carrito, 
la idea sería justamente que en el storage se vaya actualizando ese carrito.
Después, también habría que tener en cuenta cuál es la tarea principal de tu aplicación, la venta de productos, entonces deberíamos poder completarla. 
Es decir, que una vez que el usuario seleccione los productos que quiere comprar, que pueda confirmar la compra, que se le de el ok de que salió todo bien 
y que luego de eso se vacíe el carrito volviendo al punto cero. En fin, la preentrega queda aprobada, pero a no dormirse que son puntos importantes para 
encarar la entrega final. Felicitaciones por el proyecto, la cursada y lo mejor para lo que sigue!
*/

// fetch('https://fakestoreapi.com/products?limit=5')
//     .then((data)=>{
//         return data.json();
//     }).then((completeData)=>{
//         for (let i = 0; i < completeData.length;i++ ){
//             let card = document.getElementById("root");
//             let cadaCard = document.createElement("div");
//             cadaCard.setAttribute("class", "card");
//             cadaCard.innerHTML =`
//                 <h2>${completeData[i].title}</h2>
//                 <img src="${completeData[i].image}" alt="">
//                 <h3>Precio: ${completeData[i].price}</h3>
//                 <p id="description">Descripción: ${completeData[i].description}</p>
//                 <p id="category">Categoria: ${completeData[i].category}</p>
//                 <button>Agregar a carrito</button>
//             `;   
//             card.appendChild(cadaCard);
//         }
//     }).catch((error)=>{
//         console.log(error);
//     })



// --------------------------------------------

const card = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const carritoContainer = document.getElementById("carrito-container");
const cantCarrito = document.getElementById("cantCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProductos = async()=>{
    const respuesta = await fetch('https://fakestoreapi.com/products?limit=5');
    const data = await respuesta.json();
    
    // cada card
    data.forEach((product)=>{
        let content = document.createElement("div");
        content.setAttribute("class", "card");
        content.innerHTML =`
            <img src="${product.image}" alt="">
            <h2>${product.title}</h2>
            <h3>Precio: ${product.price} $</h3>
            <p id="description">Descripción: ${product.description}</p>
            <p id="category">Categoria: ${product.category}</p>
        `; 
        card.append(content);

        // boton de comprar 
        let btnComprar = document.createElement("button");
        btnComprar.textContent = "Comprar";
        btnComprar.className = "comprar";
        content.append(btnComprar);
        btnComprar.addEventListener("click", ()=>{
            carrito.push({
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
            });
            pintarCarrito();
            carritoContainer.style.display = "none";
            saveLocal();
        });
    });

    const saveLocal = () =>{
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };

    // icono carrito 
    const pintarCarrito = () =>{
        carritoContainer.innerHTML = "";

        const carritoHeader = document.createElement("div");
        carritoHeader.className="carrito-header";
        carritoHeader.innerHTML=`
            <h1 class="carrito-titulo">Carrito</h1>
        `;
        carritoContainer.append(carritoHeader);
    
        const carritoButton = document.createElement("h1");
        carritoButton.innerText="X";
        carritoButton.className = "carrito-header-button";
        carritoHeader.append(carritoButton);
        carritoButton.addEventListener("click", ()=>{
            carritoContainer.style.display= "none";
        });
    
        let contenidoCarrito = document.createElement("div");
        contenidoCarrito.className="contenido-carrito";
        carritoContainer.append(contenidoCarrito);

        carrito.forEach((product) => {
            let carritoContent = document.createElement("div");
            carritoContent.className = "carrito-content";
            carritoContent.innerHTML = `
            <img src="${product.image}" alt="">
            <h3>${product.title}</h3>
            <p>$ ${product.price}</p>
            `;
            contenidoCarrito.append(carritoContent);

            // borrar item del carrito
            const btnBorrar = document.createElement("button");
            btnBorrar.textContent = "X";
            btnBorrar.className = "btn-borrar-de-carrito";
            carritoContent.append(btnBorrar);

            btnBorrar.addEventListener("click", ()=>{
                btnBorrar.parentElement.remove();
                let indice = carrito.indexOf(product.id);
                carrito.splice(indice, 1);
                pintarCarrito();
                saveLocal();
            });
        }); 
        const total = carrito.reduce((acc, el) => acc + el.price, 0);
        const totalComprando = document.createElement("div");
        totalComprando.className = "total-content";
        totalComprando.innerHTML = `total a pagar: $ ${total}`;
        carritoContainer.append(totalComprando);

        const vaciarCarrito = document.createElement("button");
        vaciarCarrito.innerText= "Vaciar carrito";
        carritoContainer.append(vaciarCarrito);
        vaciarCarrito.addEventListener("click", ()=>{
            do{
                carrito.pop();
            }while(carrito != 0);
            contenidoCarrito.remove();
            pintarCarrito();
            saveLocal();
            vaciarCarrito.remove();
            Swal.fire("Carrito vacio");
        })
    };

    verCarrito.addEventListener("click", ()=>{
        pintarCarrito();
        carritoContainer.style.display = "flex";
    });
}

getProductos();