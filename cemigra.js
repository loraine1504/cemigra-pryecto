 // Script para manejar la apertura y cierre del menú lateral
 document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('side-menu').classList.toggle('active');
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('side-menu').classList.remove('active');
});