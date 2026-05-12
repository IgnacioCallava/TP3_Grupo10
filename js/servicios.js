async function obtenerServicios() {
    const res = await fetch("https://tp3-grupo10-luea.onrender.com/servicios");
    const data = await res.json();
    return data;
}

async function mostrarServicios() {
    const servicios = await obtenerServicios();

    const lista = document.getElementById("servicios-lista");

    lista.innerHTML = "";

    servicios.forEach(servicio => {
        lista.innerHTML += `<li>${servicio.nombre}</li>`;
    });
}

mostrarServicios();