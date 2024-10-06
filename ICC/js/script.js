// Función para inicializar una cuenta regresiva
function initializeCountdown(id, endDate) {
    const countdownElement = document.getElementById(id);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance >= 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownElement.innerHTML = "¡El tiempo ha expirado!";
        }
    }

    setInterval(updateCountdown, 1000);
}

// Fechas límite
const endDate1 = new Date("2024-10-31T23:59:00").getTime(); // 31 de octubre a las 11:59 PM
const endDate2 = new Date("2024-11-07T23:59:00").getTime(); // 7 de noviembre a las 11:59 PM

// Inicializar las dos cuentas regresivas
initializeCountdown("countdown1", endDate1);
initializeCountdown("countdown2", endDate2);
