// JavaScript para manejar el desplazamiento suave al hacer clic en los botones del menú

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            var targetId = this.getAttribute('href').substring(1); // Obtener el ID del elemento objetivo
            var targetElement = document.getElementById(targetId);
            var offset = 180; // Ajustar este valor según sea necesario
            
            if (targetElement) {
                var targetPosition = targetElement.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
