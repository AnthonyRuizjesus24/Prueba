document.addEventListener('DOMContentLoaded', () => {
    // Simulación de función para iniciar sesión con Google
    const googleButton = document.querySelector('.bg-indigo-100');
    if (googleButton) {
        googleButton.addEventListener('click', function () {
            alert('Redirigiendo a Google...');
            // Aquí puedes integrar la autenticación real de Google.
        });
    }

    // Simulación de función para iniciar sesión con GitHub
    const githubButton = document.querySelector('.mt-5.bg-indigo-100');
    if (githubButton) {
        githubButton.addEventListener('click', function () {
            alert('Redirigiendo a GitHub...');
            // Aquí puedes integrar la autenticación real de GitHub.
        });
    }

    // Función para manejar el envío del formulario con email y password
    const submitButton = document.querySelector('.bg-indigo-500');
    if (submitButton) {
        submitButton.addEventListener('click', function (e) {
            e.preventDefault();

            const emailInput = document.querySelector('input[type="email"]');
            const passwordInput = document.querySelector('input[type="password"]');

            if (emailInput && passwordInput) {
                const email = emailInput.value;
                const password = passwordInput.value;

                if (email && password) {
                    alert(`Registrando con el correo: ${email}`);
                    // Aquí puedes hacer una petición POST a tu servidor para registrar al usuario.
                } else {
                    alert('Por favor ingresa un correo y una contraseña.');
                }
            }
        });
    }
});
