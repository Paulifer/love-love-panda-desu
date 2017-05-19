var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

pictures.forEach(function(ele, in){
	var contenedor = document.getElementById('contPictures');
	var imagen = document.createElement('div');
	imagen.setAttribute("class", "pandas");
	var fotos = document.createElement('img');
	fotos.src = pictures[in];
	fotos.id = 'a' + (i+1);

	imagen.appendChild(fotos);
	contenedor.appendChild(imagen);
	});
