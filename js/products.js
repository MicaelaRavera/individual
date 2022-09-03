function mostrarProductos (lista)
{
	let productosdiv =document.getElementById ("productos")
	productosdiv.innerHTML =`
	<center class="titulo">
		<h1>Productos</h1>
		<span>Veras aqui todos los productos de la categoria
		${lista.catName}
		</span>
	</center>
	<hr>
	`

	for(let producto of lista.products){
		productosdiv.innerHTML +=`

	<div class="producto">
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
}

getJSONData(PRODUCTS_URL+localStorage.getItem("catID")+EXT_TYPE)
	.then(productos => mostrarProductos(productos.data) )
