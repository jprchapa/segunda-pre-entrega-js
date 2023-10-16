//Productos en stock
let productos = [
    { nombre: "producto 1", precio: 100, tipo: "categoria 1"},
    { nombre: "producto 2", precio: 200, tipo: "categoria 2"},
    { nombre: "producto 3", precio: 300, tipo: "categoria 2"},
    { nombre: "producto 4", precio: 400, tipo: "categoria 3"},
    { nombre: "producto 5", precio: 500, tipo: "categoria 3"}
]

//Mostrar Stock
function mostrarStock(){
    let mensaje = "Productos en Stock: \n"
    for (let producto of productos) {
        mensaje += `Producto: ${producto.nombre}, Precio: ${producto.precio}\n`
        console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}\n`)
    }
    alert(mensaje)
}
mostrarStock() 

//Carrito vacio

 let carrito = []

//Agregar productos al carrito 
function agregarProductoAlCarrito() {
  const nombreProducto = prompt("Ingrese el nombre del producto que desea agregar al carrito :") 

  const productoEncontrado = productos.find( producto => producto.nombre === nombreProducto)
   if (productoEncontrado) {
    carrito.push(productoEncontrado)
    console.log(`El producto ${productoEncontrado.nombre} ha sido agregado al carrito.`)
    
   } else {
    console.log("Producto no encontrado") 
   }
}
  
//continuar cargando productos
let continuarAgregando = true
while (continuarAgregando) {
    agregarProductoAlCarrito()
    const respuesta = prompt("¿Desea seguir agregando productos al carrito? Escribe si o no ")
    if( respuesta !== "si"){
      continuarAgregando = false}

    }

//calcular total carrito

let preciosCarrito = carrito.map(producto => producto.precio)
let totalCarrito = preciosCarrito.reduce((acumulador, precio) => acumulador + precio, 0)

console.log(`El total del carrito es: ${totalCarrito}`)
alert(`El total del carrito es: ${totalCarrito}`)


//Mostrar carrito en HTML

function mostrarCarritoEnHTML() {
    const listaProductosCarrito = document.getElementById('lista-carrito')
    listaProductosCarrito.innerHTML = ''

    let total = 0

    for (let producto of carrito) {
        const itemCarrito = document.createElement('li')
        itemCarrito.innerHTML = `Producto: ${producto.nombre}, Precio: $${producto.precio}`
        listaProductosCarrito.appendChild(itemCarrito)

       
    }

    const totalCarritoEnHTML = document.getElementById('total-carrito')
    totalCarritoEnHTML.innerHTML = totalCarrito
}

mostrarCarritoEnHTML();

