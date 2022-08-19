function mostrarProductos (lista)
{
	let productosdiv =document.getElementById ("productos")
	for(let producto of lista.products){
		productosdiv.innerHTML +=`
		<h1>${producto.name} ${producto.currency} ${producto.cost}</h1>
     	<img src="${producto.image}" width="450" height="300">
     	<p>${producto.description}</p>
		`
	}
}

fetch("https://japceibal.github.io/emercado-api/cats_products/101.json")
	.then(respuesta => respuesta.json())
	.then(productos => mostrarProductos(productos) )
