const contenedor = document.getElementById('contenedor-equipo');

fetch('https://tp3-grupo10-luea.onrender.com/equipo')
    .then(res => res.json())
    .then(data => {

    data.forEach(persona => {
    contenedor.innerHTML += `
        <div class="card">
        <div class="card-img">
            <img src="${persona.foto}" alt="Foto de ${persona.nombre}">
        </div>
        <div class="card-description">
            <h3>${persona.nombre}</h3>
            <p><strong>${persona.rol}</strong></p>
        </div>
        </div>
    `;
    });

    })
    .catch(error => console.log(error));