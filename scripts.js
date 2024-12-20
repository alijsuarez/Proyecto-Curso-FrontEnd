const productos = [
  {
    "nombre": "Notebook Hp 15.6 Core I5-1235u/8g/512g/w11",
    "precio": "1999999",
    "imagen": "images/hp.webp"
  },
  {
    "nombre": "Redmi Watch 3 Active",
    "precio": "89990",
    "imagen": "images/Redmi20Watch.webp"
  },
  {
    "nombre": "Tablet Samsung Galaxy Tab S6 Lite",
    "precio": "859000",
    "imagen": "images/tablet.webp"
  },
  {
    "nombre": "Apple iPhone 15 Pro Max",
    "precio": "3750000",
    "imagen": "images/iphone.webp"
  },
  {
    "nombre": "Router Linksys AC1900 Dual Band",
    "precio": "150000",
    "imagen": "images/router.webp"
  },
  {
    "nombre": "Auriculares Gamer JBL Quantum 910",
    "precio": "699999",
    "imagen": "images/auriJBL.webp"
  }
]


let productosHtml = "";
for (let indice = 0; indice < productos.length; indice++) {
  productosHtml +=
    `
        <div>
          <img src=${productos[indice].imagen} />
          <div class="informacion">
            <p>${productos[indice].nombre}</p>
            <p class="precio">$ ${productos[indice].precio}</p>
            <input id='btn-agregar-carrito' type="button" value="Agregar al carrito" class="btn"/>
          </div>
        </div>
      ` ;
}

const contenedordeProductos = document.querySelector(".contenedor");

//reemplazar contenido de los productos
contenedordeProductos.innerHTML = productosHtml;

//guardar en variables los elemnetos HTML que vamos a modificar
const botonesAgregarCarrito = document.querySelectorAll("#btn-agregar-carrito");
const listaCarrito = document.querySelector(".lista-carrito");
const totalCarrito = document.querySelector("#total");
const carritoContador = document.querySelector("#carrito-contador");
let totalPagar = 0;
let contadorCarrito = 0;
//agregar listener a los botones
for (let indice = 0; indice < botonesAgregarCarrito.length; indice++) {
  //agregar productos al carrito  

  /*
  function agregarAlCarrito() {
    mensaje.innerHTML = "";
    const elementoLi = document.createElement("li");
    elementoLi.innerHTML = 
    `
      <p>${productos[indice].nombre} - $${productos[indice].precio}</p>
    `;
    listaCarrito.appendChild(elementoLi);
    totalPagar += parseInt(productos[indice].precio);
    totalCarrito.innerHTML = "Total a Pagar: $" + totalPagar;
    
  }
  botonesAgregarCarrito[indice].addEventListener("click", agregarAlCarrito);
  */

  botonesAgregarCarrito[indice].addEventListener("click", () => {
    const elementoLi = document.createElement("li");
    elementoLi.innerHTML =
      `
      <p>${productos[indice].nombre}  $${productos[indice].precio}</p>
    `;
    listaCarrito.appendChild(elementoLi);
    totalPagar += parseInt(productos[indice].precio);
    totalCarrito.innerHTML = "Total a Pagar: $" + totalPagar;
    mensaje.innerHTML = "";
    contadorCarrito++;
    carritoContador.innerHTML = contadorCarrito;
  });
}

//agragar listener al boton borrar
const botonBorrar = document.querySelector("#btn-vaciar-carrito");

botonBorrar.addEventListener("click", () => {
  listaCarrito.innerHTML = "";
  totalPagar = 0;
  totalCarrito.innerHTML = "Total a Pagar: $" + totalPagar;
  mensaje.innerHTML = "";
  contadorCarrito = 0;
  carritoContador.innerHTML = contadorCarrito;
});


const botonPagar = document.querySelector("#btn-ir-pagar");
const mensaje = document.querySelector("#mensaje");

//agragar listener al boton pagar 
botonPagar.addEventListener("click", () => {
  if (totalPagar > 0) {
    window.location.href = "pagar.html";
  }
  else {
    mensaje.innerHTML = "No hay productos en el carrito";
    //alert("No hay productos en el carrito");
  }
}); 