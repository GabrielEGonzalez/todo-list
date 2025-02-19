let tbody = document.querySelector('#content-body');
const boton = document.querySelector('#enviar');
let nombre = document.querySelector('#ntarea');
let description = document.querySelector('#desTarea');
const checkboxes = document.querySelectorAll(".taskCheckbox");


boton.addEventListener('click', (even) => {
    even.preventDefault();
    let tr = document.createElement('tr');
    let tdIndex = document.createElement("td");
    let tdNombre = document.createElement('td');
    let tdDescripcion = document.createElement('td');
    let tdChex = document.createElement('td')
    let tdEliminar = document.createElement('td');

    tdIndex.innerText = tbody.children.length + 1;
    tdNombre.innerText = nombre.value;
    tdDescripcion.innerText = description.value;

    //crear el input 

    const input = document.createElement('input');
    input.type = "checkbox"
    input.classList.add("taskCheckbox");

    tdChex.appendChild(input);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    tdEliminar.appendChild(deleteBtn);

    tr.appendChild(tdIndex);
    tr.appendChild(tdNombre);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdChex);
    tr.appendChild(tdEliminar);
    tbody.appendChild(tr);

    nombre.value = "";
    description.value = "";

    input.addEventListener("change", function () {
        const row = this.closest("tr"); 
        if (this.checked) {
            row.style.textDecoration = "line-through"; 
        } else {
            row.style.textDecoration = "none"; 
        }
    });

    // Eliminar tarea
    deleteBtn.addEventListener("click", function () {
        tr.remove(); // Eliminar del DOM
        actualizarIndices(); // Reorganizar números
    });
});





function actualizarIndices() {
    let filas = tbody.querySelectorAll("tr");
    filas.forEach((fila, index) => {
        fila.children[0].innerText = index + 1;
    });
}