const stockProductos = [
  {
    id: 1,
    nombre: "Cerveza",
    cantidad: 1,
    desc: "Cerveza Heineken ",
    precio: 470,
    img: "./FOTO/CERVEZA-HEINEKEN-1-LITRO-NO-RETORNABLE-1-859.png",
  },
  {
    id: 2,
    nombre: "Fernet",
    cantidad: 1,
    desc: "Fernet Branca ",
    precio: 1250,
    img: "./FOTO/fernet.jpg",
  },
  {
    id: 3,
    nombre: "Cerveza",
    cantidad: 1,
    desc: "Cerveza Corona ",
    precio: 500,
    img: "./FOTO/corona-6832-1.png",
  },
  {
    id: 4,
    nombre: "Coca-Cola",
    cantidad: 1,
    desc: "Coca-cola 2,25ml",
    precio: 450,
    img: "./FOTO/cocacola.webp",
  },
  {
    id: 5,
    nombre: "Jugo",
    cantidad: 1,
    desc: "Jugo Baggio ",
    precio: 250,
    img: "./FOTO/baggio.jpg",
  },

  {
    id: 6,
    nombre: "Champagne",
    cantidad: 1,
    desc: "Chandon",
    precio: 1000,
    img: "./FOTO/chandon.jpg",
  },

  {
    id: 7,
    nombre: "Jugo",
    cantidad: 1,
    desc: "Jugo naranja Citric",
    precio: 350,
    img: "./FOTO/citric2.webp",
  },

  {
    id: 8,
    nombre: "Combo",
    cantidad: 1,
    desc: "Gancia + Sprite",
    precio: 1600,
    img: "./FOTO/gacia y sprite.jpeg",
  },

  {
    id: 9,
    nombre: "Hielo",
    cantidad: 1,
    desc: "Bolsa  de HIELO",
    precio: 650,
    img: "./FOTO/hielo.jpg",
  },

  {
    id: 10,
    nombre: "Vino",
    cantidad: 1,
    desc: "Santa Filomena",
    precio: 360,
    img: "./FOTO/santa filo.png",
  },

  {
    id: 11,
    nombre: "Vodka",
    cantidad: 1,
    desc: "Smirnoff",
    precio: 1450,
    img: "./FOTO/Smirnoff-Raspberry-Vodka-700-ml.png",
  },

  {
    id: 12,
    nombre: "Vodka",
    cantidad: 1,
    desc: "Skyy",
    precio: 950,
    img: "./FOTO/skyy.webp",
  },




];
const carritoContendor = document.querySelector('#carritoContenedor')
const vaciarCarrito = document.querySelector('#vaciarCarrito')
let carrito = [];
const contenedor = document.querySelector('#contenedor')
const precioTotal = document.querySelector('#precioTotal')






document.addEventListener('DOMContentLoaded', () => {
  carrito = JSON.parse(localStorage.getItem('carrito')) || []
  mostrarCarrito()
})

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod
  if (contenedor) {
    contenedor.innerHTML += `
      <div class="card mt-3" style="width: 18rem;">
      <img class="card-img-top mt-2" src="${img}" width="150" height="200" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: $${precio}</p>
        <p class="card-text">Descripcion: ${desc}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button id="agregar" class="btn btn-primary "   onclick="agregarProducto(${id})">Agregar al carrito</button>
      </div>
    </div>
      `;
  }
});


vaciarCarrito.addEventListener('click', () => {


  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: 'PEDIDO CANCELADO',
    showConfirmButton: true,
    timer: 2500
  })

  carrito.length = []
  mostrarCarrito()
})






function agregarProducto(id) {

  const existe = carrito.some(prod => prod.id === id)
  if (existe) {
    const prod = carrito.map(prod => {
      if (prod.id === id) {
        prod.cantidad++
      }
    })
    
  } else {


    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)

  }


  mostrarCarrito()
}


const mostrarCarrito = () => {
  const modalBody = document.querySelector('.modal .modal-body')
  modalBody.innerHTML = ''
  carrito.forEach((prod) => {
    const { id, nombre, img, desc, cantidad, precio } = prod
    modalBody.innerHTML += `
            <div class="modal-contenedor">
            <div>
            <img class="img-fluid img-carrito" src="${img}"/>
            </div>

            <div>
            <p>Producto: ${nombre}</p>
            <p>Precio: $${precio}</p>
            <p>Unidades: ${cantidad}</p>

            <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar</button>
            </div> 
            </div>


            `
  });

  carritoContendor.textContent = carrito.length

  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)


  guardarStorage()
}

function eliminarProducto(id) {
  const mercaderiaId = id
  carrito = carrito.filter((merca) => merca.id !== mercaderiaId)
  mostrarCarrito()
}

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito))
}



const pagado = document.querySelector("#procesarCompra");

pagado.addEventListener("click", () => {
  Swal.fire({
    title: 'Pedido realizado',
    text: 'Presiona aceptar para seguir comprando',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  })

  carrito.length = []
  mostrarCarrito()


});


const agregado = document.querySelectorAll("#agregar");

agregado.addEventListener("click", () => {
  Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { } // Callback after click
  }).showToast();

})





