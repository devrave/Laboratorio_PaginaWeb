document.getElementById("obtener-nombre").addEventListener('click', function(event){
    event.preventDefault();
    const input = document.getElementById("nombre");
    const nombre = input.value.trim();

    if(nombre){
        const mensaje = document.getElementById("mensaje");
        mensaje.textContent = "¡Hola, " + nombre + "!";
        input.value = '';
    }
});