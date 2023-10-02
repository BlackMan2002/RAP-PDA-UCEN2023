function mostrarHora() {
    const ahora = new Date();
    const hora = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    document.getElementById('hora').innerText = `${hora}:${minutos}:${segundos}`;
}

// Actualizar la hora cada segundo
setInterval(mostrarHora, 1000);

// Mostrar la hora al cargar la página
mostrarHora();
