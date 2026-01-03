document.addEventListener("DOMContentLoaded", () => {
    
    // Pobierz wszystkie elementy, które mają mieć opóźnioną animację
    const staggeredElements = document.querySelectorAll('.fade-in-stagger');
    
    staggeredElements.forEach((el, index) => {
        // Opóźnienie: każda kolejna karta pojawia się 100ms później
        el.style.animationDelay = `${index * 100}ms`;
    });

    // Opcjonalnie: Efekt paralaksy na tle (ruszanie myszką przesuwa tło)
    const bg = document.querySelector('.bg-animation');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Delikatne przesunięcie
        bg.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
    });

});