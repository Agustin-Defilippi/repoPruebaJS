const PaqueteExcursion =  recuperarTiendaExcursionesLS();
const excursiones = document.getElementById("excursiones");

const renderTiendaExcursiones = () =>{
    const PaqueteExcursiones = PaqueteExcursion;
    let salidaExcursiones="";
    PaqueteExcursiones.forEach(items => {
        salidaExcursiones+= 
        `<div class="d-flex excursionesTienda ">
                <div class="card  css-pFiltrado card-excursiones text-ligth" style="width: 18rem;">
                    <img src="${items.img}" class="card-img-top" alt="${items.destino}">
                    <div class="card-body text-center">
                        <h4 class="mb-2"><b>${items.nombre}</b><br></h4>
                        <p class="card-text">
                        Con Defilippi Tourlines esto es posible, aprovecha con nosotros la posibilidad de poder hacer tu  sueño realidad.<br><br>
                        <b>Precio</b>: <b>$${items.precio}</b>
                        </p>
                    </div>
                 
                </div>
        </div>`;
        
       
    });

    excursiones.innerHTML = salidaExcursiones;
}

renderTiendaExcursiones();

const mostrarProductos = () => {
   const pepe = renderTiendaExcursiones();

    const contenedor = document.getElementById("contenedor");

    pepe.forEach((items) => {
        contenedor.innerHTML += `
        <button id="${items.id}">Enviar</button>  
    `;
    });
    pepe.forEach((items) => {
        const boton = getElementById(items.id);
        boton.addEventListener("click", () => {
             
            Swal.fire('Any fool can use a computer')
        });
    });
};

mostrarProductos()

































/* const mensaje = () =>{
    const excursioneslala = PaqueteExcursion;
    let salida = "";

    excursioneslala.forEach(item => {
        



        Swal.fire({
            title: `excursion ${item.nombre}`,
            icon: 'info',
            html:
              `${item.destino}`,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
          })


    });


    
} */

/* const mostrarProductos = () => {
	const contenedor = document.getElementById("contenedor");
	productos.forEach((producto) => {
		contenedor.innerHTML += `
        <button id="${producto.id}">Enviar</button>  
    `;
	});
	productos.forEach((producto) => {
		const boton = getElementById(producto.id);
		boton.addEventListener("click", () => {
			console.log("Evento");
		});
	});
};

const boton = document.getElementById("informacion");

boton.addEventListener("click",(e) =>{
    e.preventDefault();
    mensaje();
    console.log(boton);
}) */