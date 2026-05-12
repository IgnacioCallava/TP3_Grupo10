const contenedor = document.getElementById('perfil');

const cargarPerfil = async () => {
try {
    const res = await fetch('https://tp3-grupo10-luea.onrender.com/perfil/1'); 
    const usuario = await res.json();

    contenedor.innerHTML = `
    <div class="card">
        <img src="https://tp3-grupo10-luea.onrender.com/${usuario.foto}" alt="${usuario.nombre}" width="150">
        <h2>${usuario.nombre}</h2>
        <p><strong>Email:</strong> ${usuario.mail}</p>
        <p><strong>Registro:</strong> ${usuario.fecha_registro}</p>
        <h3>Últimos pedidos:</h3>
        <ul>

        ${usuario.ultimos_pedidos.map(p => `<li>Servicio ${p.id_servicio} - ${p.fecha}</li>`).join('')}
        </ul>
    </div>
    `;
} catch (error) {
    console.log('Error:', error);
}
};

cargarPerfil();