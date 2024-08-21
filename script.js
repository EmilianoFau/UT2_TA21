const campoTexto = document.getElementById('campoTexto');

campoTexto.addEventListener('focus', () => {
    campoTexto.style.borderColor = '#555'; 
});

campoTexto.addEventListener('blur', () => {
    campoTexto.style.borderColor = '#ccc'; 
});