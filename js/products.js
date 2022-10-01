let precio = false
let ascendente = false
let filtroMinimo = -1
let filtroMaximo = -1


function mostrarProductos(lista) {
	productsFiltrados = lista.products
		.filter((product) => {
			if (filtroMinimo >= 0) {
				return product.cost > filtroMinimo;
			} else {
				return true;
			}
		})
		.filter((product) => {
			if (filtroMaximo >= 0) {
				return product.cost < filtroMaximo;
			} else {
				return true;
			}
		})
		.sort((a, b) => {
			let primero;
			let segundo;
			let orden;
			if (ascendente === true) {
				orden = 1
			}
			else {
				orden = -1
			}
			if (precio) {
				primero = a.cost
				segundo = b.cost
			}
			else {
				primero = a.soldCount
				segundo = b.soldCount
			}
			if (primero > segundo) {
				return orden
			}
			else if (primero === segundo) {
				return 0
			}
			else {
				return -orden
			}
		})

	let productosdiv = document.getElementById("productos")
	productosdiv.innerHTML = `
	<center class="titulo">
		<h1>Productos</h1>
		<span>Veras aqui todos los productos de la categoria
		${lista.catName}
		</span>
	</center>
	<hr>
	`

	for (let producto of productsFiltrados) {
		productosdiv.innerHTML += `

	<div class="producto" product-id="${producto.id}">
     	<img src="${producto.image}"
		 width="200"
		 height="100">
		 <div class="detalles">

		 <h4>
		 	${producto.name}
			${producto.currency}
			${producto.cost}
		</h4>

		${producto.description}
		</div>
	<span>
		${producto.soldCount} vendidos
	</span>
	
	</div>
	<hr>
		`
	}
	let domproductos = document.getElementsByClassName("producto")

	for(let producto of domproductos ){
		producto.addEventListener("click", () => {
			let idproducto = producto.getAttribute("product-id")	
			idproducto = localStorage.setItem("idproduct", idproducto )
			window.location.replace("product-info.html")
		})
	}
	
}

function cargarProductos() {
	getJSONData(PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE)
		.then(productos => mostrarProductos(productos.data))
}

cargarProductos()
document.getElementById("sortAscPrice").addEventListener("click", () => {
	precio = true
	ascendente = true
	cargarProductos()
})
document.getElementById("sortDescPrice").addEventListener("click", () => {
	precio = true
	ascendente = false
	cargarProductos()
})
document.getElementById("sortDescSoldCount").addEventListener("click", () => {
	precio = false
	ascendente = false
	cargarProductos()
})
document.getElementById("filterPrices").addEventListener("click", () => {
	filtroMinimo = document.getElementById("filterMinPrice").value ? document.getElementById("filterMinPrice").value : -1
	filtroMaximo = document.getElementById("filterMaxPrice").value ? document.getElementById("filterMaxPrice").value : -1
	cargarProductos()
})
