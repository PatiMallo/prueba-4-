
function cargarMedicamentos() {
    const contenedor = document.getElementById('medicamentos');
    medicamentos.forEach(medicamento => {
        const divMedicamento = document.createElement('div');
        divMedicamento.classList.add('medicamento');

        const imagen = document.createElement('img');
        imagen.src = medicamento.imagen;
        imagen.alt = medicamento.nombre;
        imagen.classList.add('new-image');

        const nombre = document.createElement('h3');
        nombre.textContent = medicamento.nombre;

        const precio = document.createElement('p');
        precio.textContent = `$${medicamento.precio}`;

        divMedicamento.appendChild(imagen);
        divMedicamento.appendChild(nombre);
        divMedicamento.appendChild(precio);
        contenedor.appendChild(divMedicamento);
    });
}

document.addEventListener('DOMContentLoaded', cargarMedicamentos);
